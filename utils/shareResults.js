const COLUMNS = [
  "team_name",
  "conference",
  "age",
  "position",
  "player_number",
  "draft_number",
  "draft_year",
];

const getEmoji = (guessVal, correctVal, column) => {
  if (guessVal === null || guessVal === "") return "⬛";

  if (column === "team_name" || column === "conference" || column === "position") {
    return guessVal === correctVal ? "🟩" : "⬛";
  }

  if (column === "age") {
    const diff = Math.abs(parseInt(guessVal) - parseInt(correctVal));
    if (diff === 0) return "🟩";
    if (diff <= 2) return "🟨";
    return "⬛";
  }

  // player_number, draft_number, draft_year
  if (column === "player_number") {
    const diff = Math.abs(parseInt(guessVal) - parseInt(correctVal));
    if (diff === 0) return "🟩";
    if (diff <= 1) return "🟨";
    return "⬛";
  }

  // draft_number, draft_year
  const diff = Math.abs(parseInt(guessVal) - parseInt(correctVal));
  if (diff === 0) return "🟩";
  if (diff <= 1) return "🟨";
  return "⬛";
};

export const generateShareText = async (guesses, correctPlayer, gameWon, hintColumn) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  // Exclude the auto-revealed correct answer on loss
  const guessesToShare = gameWon ? guesses : guesses.slice(0, -1);
  const score = gameWon ? `${guessesToShare.length}/8` : "X/8";

  const rows = [];

  for (const guess of guessesToShare) {
    if (guess === "HINT") {
      const row = COLUMNS.map((col) => (col === hintColumn ? "🟩" : "⬛")).join("");
      rows.push(row);
      continue;
    }

    const response = await fetch(`${apiUrl}/getguessedplayer?guess=${guess}`);
    const data = await response.json();

    const row = COLUMNS.map((col) => {
      return getEmoji(data[col], correctPlayer[col], col);
    }).join("");

    rows.push(row);
  }

  return `NBAdle 🏀 ${score}\n${rows.join("\n")}`;
};

export const shareResults = async (text) => {
  // Mobile: use native share sheet if available
  if (navigator.share) {
    try {
      await navigator.share({ text });
      return "shared";
    } catch {
      // User cancelled or share failed, fall through to clipboard
    }
  }

  // Desktop: copy to clipboard
  await navigator.clipboard.writeText(text);
  return "copied";
};
