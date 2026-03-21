import { useEffect, useRef, useState } from "react";

const DEFAULT_HINT_COLUMNS = [
  "team_name", "conference", "age", "position",
  "player_number", "draft_number", "draft_year",
];

// Helper: use localStorage or useState based on mode
function usePersistedState(key, initialValue, persist) {
  const [value, setValue] = useState(() => {
    if (persist && typeof window !== "undefined") {
      const stored = localStorage.getItem(key);
      if (stored !== null) {
        try { return JSON.parse(stored); } catch { return initialValue; }
      }
    }
    return initialValue;
  });

  useEffect(() => {
    if (persist) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value, persist]);

  return [value, setValue];
}

export default function useGame(mode) {
  const isDaily = mode === "daily" || mode === "wnba";
  const isWnba = mode === "wnba";

  // Prefix localStorage keys for WNBA to avoid conflicts with NBA daily
  const prefix = isWnba ? "wnba_" : "";

  // Player data — daily persists to localStorage, unlimited uses memory
  const [playerHeadshot, setPlayerHeadshot] = usePersistedState(`${prefix}playerHeadshot`, null, isDaily);
  const [playerFullName, setPlayerFullName] = usePersistedState(`${prefix}playerFullName`, "", isDaily);
  const [playerTeamName, setPlayerTeamName] = usePersistedState(`${prefix}playerTeamName`, "", isDaily);
  const [playerConference, setPlayerConference] = usePersistedState(`${prefix}playerConference`, "", isDaily);
  const [playerAge, setPlayerAge] = usePersistedState(`${prefix}playerAge`, 0, isDaily);
  const [playerPos, setPlayerPos] = usePersistedState(`${prefix}playerPos`, "", isDaily);
  const [playerNo, setPlayerNo] = usePersistedState(`${prefix}playerNo`, 0, isDaily);
  const [playerDraftNo, setPlayerDraftNo] = usePersistedState(`${prefix}playerDraftNo`, null, isDaily);
  const [playerDraftYear, setPlayerDraftYear] = usePersistedState(`${prefix}playerDraftYear`, null, isDaily);
  const [hintColumns, setHintColumns] = usePersistedState(`${prefix}hintColumns`, [...DEFAULT_HINT_COLUMNS], isDaily);
  const [hintColumn, setHintColumn] = usePersistedState(`${prefix}hintColumn`, "", isDaily);
  const [gameFinished, setGameFinished] = usePersistedState(`${prefix}gameFinished`, false, isDaily);
  const [guesses, setGuesses] = usePersistedState(`${prefix}guesses`, [], isDaily);
  const [hintClicked, setHintClicked] = usePersistedState(`${prefix}hintClicked`, true, isDaily);

  const [playerNames, setPlayerNames] = useState([]);
  const [gameWon, setGameWon] = usePersistedState(`${prefix}gameWon`, false, isDaily);
  const [ready, setReady] = useState(!isDaily);
  const guessRef = useRef(null);
  const [guess, setGuess] = useState("");

  // Modals
  const [winOpen, setWinOpen] = useState(false);
  const [loseOpen, setLoseOpen] = useState(false);
  const [howToPlayOpen, setHowToPlayOpen] = useState(false);
  const [cheatSheetOpen, setCheatSheetOpen] = useState(false);

  // Alert bar
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  // Copied snackbar (daily only, but harmless to have for both)
  const [copiedOpen, setCopiedOpen] = useState(false);

  const setPlayerData = (data) => {
    setPlayerHeadshot(data["headshot"]);
    setPlayerFullName(data["full_name"]);
    setPlayerTeamName(data["team_name"]);
    setPlayerConference(data["conference"]);
    setPlayerAge(data["age"]);
    setPlayerPos(data["position"]);
    setPlayerNo(data["player_number"]);
    setPlayerDraftNo(data["draft_number"]);
    setPlayerDraftYear(data["draft_year"]);
  };

  const cleanup = () => {
    setGuess("");
    setGuesses([]);
    setHintClicked(true);
    setGameFinished(false);
    setGameWon(false);
    setHintColumns([...DEFAULT_HINT_COLUMNS]);
    setHintColumn("");
  };

  const getPlayerData = async () => {
    try {
      let endpoint;
      if (isWnba) {
        endpoint = "/getwnbadailyplayer";
      } else if (isDaily) {
        endpoint = "/getdailyplayer";
      } else {
        endpoint = "/getplayer";
      }
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`,
        { method: "GET" }
      );
      const data = await response.json();
      if (data.error) {
        alert(data.error);
        return;
      }
      return data;
    } catch {
      return;
    }
  };

  const handleGuessSubmit = (e) => {
    e.preventDefault();
    if (guesses.includes(guess)) {
      setAlertMessage("Already guessed this player 🤦. Guess another player");
      setAlertOpen(true);
      return;
    }
    if (playerNames.includes(guess)) {
      setGuess(guess);
      setGuesses([...guesses, guess]);
      if (guess === playerFullName) {
        setGameFinished(true);
        setGameWon(true);
        setWinOpen(true);
        return;
      }
    }
    setGuess("");
  };

  const handleHintPress = () => {
    if (!hintClicked) {
      setHintClicked(true);
    }
    if (!hintColumn && hintColumns.length > 0) {
      setHintColumn(hintColumns[Math.floor(Math.random() * hintColumns.length)]);
    }
    setGuesses([...guesses, "HINT"]);
  };

  const onStartGameClickHandler = () => {
    cleanup();
    getPlayerData().then((data) => {
      if (data) setPlayerData(data);
    });
  };

  // Fetch player names on mount
  useEffect(() => {
    const fetchNames = async () => {
      try {
        const namesEndpoint = isWnba ? "/getwnbanames" : "/getnames";
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}${namesEndpoint}`,
          { method: "GET" }
        );
        const data = await response.json();
        if (data.error) {
          return;
        }
        setPlayerNames(data);
      } catch {
        return;
      }
    };
    fetchNames();
  }, []);

  // Fetch mystery player on mount
  useEffect(() => {
    if (isDaily) {
      getPlayerData().then((data) => {
        if (!data) { setReady(true); return; }
        if (playerFullName !== data["full_name"]) {
          cleanup();
        }
        setPlayerData(data);
        setReady(true);
      });
    } else {
      if (playerFullName === "") {
        getPlayerData().then((data) => {
          if (data) setPlayerData(data);
        });
      }
    }
  }, []);

  // Lose condition
  useEffect(() => {
    guessRef.current?.lastElementChild?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
    if (guesses.length === 8 && !guesses.includes(playerFullName)) {
      setGuesses([...guesses, playerFullName]);
      setGameFinished(true);
      setLoseOpen(true);
    }
  }, [guesses]);

  // Hint availability
  useEffect(() => {
    if (guesses.length === 1) setHintClicked(false);
    if (guesses.length === 7) setHintClicked(true);
  }, [guesses.length]);

  useEffect(() => {
    if (hintColumns.length === 0) setHintClicked(true);
  }, [hintColumns.length]);

  return {
    isDaily,
    // Player data
    playerHeadshot, playerFullName, playerTeamName, playerConference,
    playerAge, playerPos, playerNo, playerDraftNo, playerDraftYear,
    // Game state
    ready, playerNames, gameFinished, gameWon, guess, guesses, guessRef,
    setGuess, setGuesses,
    // Hints
    hintColumns, setHintColumns, hintColumn, setHintColumn, hintClicked,
    // Modals
    winOpen, setWinOpen, loseOpen, setLoseOpen,
    howToPlayOpen, setHowToPlayOpen, cheatSheetOpen, setCheatSheetOpen,
    // Alert
    alertOpen, setAlertOpen, alertMessage,
    // Copied
    copiedOpen, setCopiedOpen,
    // Handlers
    handleGuessSubmit, handleHintPress, onStartGameClickHandler,
  };
}
