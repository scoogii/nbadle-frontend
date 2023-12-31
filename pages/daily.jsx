"use client";
import { Box } from "@mui/joy";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AlertBar from "../components/AlertBar";
import styles from "../styles/Home.module.css";
import WinLoseModal from "../components/WinLoseModal";
import HowToPlayModal from "../components/HowToPlayModal";
import CheatSheetModal from "../components/CheatSheetModal";
import { useEffect, useRef, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import PlayActions from "../components/PlayActions";
import ColumnHeadings from "../components/ColumnHeadings";
import GuessGrid from "../components/daily/GuessGrid";
import Countdown from "../components/daily/Countdown";

const Daily = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  // Player data
  const [playerHeadshot, setPlayerHeadshot] = useLocalStorage(
    "playerHeadshot",
    null,
  );
  const [playerFullName, setPlayerFullName] = useLocalStorage(
    "playerFullName",
    "",
  );
  const [playerTeamName, setPlayerTeamName] = useLocalStorage(
    "playerTeamName",
    "",
  );
  const [playerConference, setPlayerConference] = useLocalStorage(
    "playerConference",
    "",
  );
  const [playerAge, setPlayerAge] = useLocalStorage("playerAge", 0);
  const [playerPos, setPlayerPos] = useLocalStorage("playerPos", "");
  const [playerNo, setPlayerNo] = useLocalStorage("playerNo", 0);
  const [playerDraftNo, setPlayerDraftNo] = useLocalStorage(
    "playerDraftNo",
    null,
  );

  // Columns that are valid for hints
  const [hintColumns, setHintColumns] = useLocalStorage("hintColumns", [
    "team_name",
    "conference",
    "age",
    "position",
    "player_number",
    "draft_number",
  ]);

  const [playerNames, setPlayerNames] = useState([]); // Set player names
  const [gameFinished, setGameFinished] = useLocalStorage(
    "gameFinished",
    false,
  ); // Game is finished or not
  const [gameWon, setGameWon] = useState(false);

  // Guesses and hints
  const guessRef = useRef(null);
  const [guess, setGuess] = useState("");
  const [guesses, setGuesses] = useLocalStorage("guesses", []);

  // Modals
  const [winOpen, setWinOpen] = useState(false);
  const [loseOpen, setLoseOpen] = useState(false);
  const [howToPlayOpen, setHowToPlayOpen] = useState(false);
  const [cheatSheetOpen, setCheatSheetOpen] = useState(false);

  // Hint button status
  const [hintClicked, setHintClicked] = useLocalStorage("hintClicked", true);

  // Alert bar for invalid actions
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const cleanup = () => {
    setGuess("");
    setGuesses([]);
    setHintClicked(true);
    setGameFinished(false);
    setGameWon(false);
    setHintColumns([
      "team_name",
      "conference",
      "age",
      "position",
      "player_number",
      "draft_number",
    ]);
  };

  // Guess event handler
  const handleGuessSubmit = (e) => {
    e.preventDefault();

    // If player already guessed, alert
    if (guesses.includes(guess)) {
      setAlertMessage("Already guessed this player 🤦. Guess another player");
      setAlertOpen(true);
      return;
    }

    // If guess is a valid player, handle guess
    if (playerNames.includes(guess)) {
      setGuess(guess);
      setGuesses([...guesses, guess]);

      // If user guesses the right player
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
    // Hint is one time use
    if (!hintClicked) {
      setHintClicked(true);
    }

    // Hint counts as one valid guess
    setGuesses([...guesses, "HINT"]);
  };

  // USE EFFECTS
  // On load, get all active player names (Autocomplete)
  useEffect(() => {
    const fetchNames = async () => {
      const response = await fetch(
        "https://nbadle-backend.onrender.com/api/getnames",
        {
          method: "GET",
        },
      );
      const data = await response.json();

      if (data.error) {
        alert(data.error);
        return;
      }
      setPlayerNames(data);
    };
    fetchNames();
  }, []);

  // If mystery player has not been set, set one
  useEffect(() => {
    // Retreive player data function
    const getPlayerData = async () => {
      const response = await fetch(
        "https://nbadle-backend.onrender.com/api/getdailyplayer",
        {
          method: "GET",
        },
      );
      const data = await response.json();

      if (data.error) {
        alert(data.error);
        return;
      }
      if (playerFullName !== data["full_name"]) {
        cleanup();
      }
      setPlayerHeadshot(data["headshot"]);
      setPlayerFullName(data["full_name"]);
      setPlayerTeamName(data["team_name"]);
      setPlayerConference(data["conference"]);
      setPlayerAge(data["age"]);
      setPlayerPos(data["position"]);
      setPlayerNo(data["player_number"]);
      setPlayerDraftNo(data["draft_number"]);
    };
    getPlayerData();
  }, []);

  // If guesses is 6 and player not guessed, game is lost
  useEffect(() => {
    // Scroll to most recent guess
    guessRef.current?.lastElementChild?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });

    // Lose condition - show lose modal and load actual player guess row
    if (guesses.length === 8 && !guesses.includes(playerFullName)) {
      setGuesses([...guesses, playerFullName]);
      setGameFinished(true);
      setLoseOpen(true);
    }
  }, [guesses]);

  useEffect(() => {
    // Disable hint when there are 5 guesses or it is first guess
    if (guesses.length === 1) {
      setHintClicked(false);
    }

    if (guesses.length === 7) {
      setHintClicked(true);
    }
  }, [guesses.length]);

  useEffect(() => {
    if (hintColumns.length === 0) {
      setHintClicked(true);
    }
  }, [hintColumns.length]);

  return (
    <>
      <AlertBar
        isOpen={alertOpen}
        handleClose={() => {
          setAlertOpen(false);
        }}
        message={alertMessage}
      />
      <HowToPlayModal
        howToPlayOpen={howToPlayOpen}
        setHowToPlayOpen={setHowToPlayOpen}
      />
      <CheatSheetModal
        cheatSheetOpen={cheatSheetOpen}
        setCheatSheetOpen={setCheatSheetOpen}
      />
      {isClient ? (
        <div className={styles.container}>
          <Header
            setHowToPlayOpen={setHowToPlayOpen}
            setCheatSheetOpen={setCheatSheetOpen}
          />
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
            sx={{
              minHeight: {
                xs: "calc(100vh - 120px)",
                sm: "calc(100vh - 140px - 6vh)",
                md: "calc(100vh - 70px - 4vh)",
                lg: "calc(100vh - 70px - 2vh)",
              },
              marginTop: { lg: "-2vh" },
              marginBottom: { lg: "-2vh" },
            }}
          >
            {gameFinished ? <Countdown /> : null}{" "}
            <PlayActions
              gameFinished={gameFinished}
              handleGuessSubmit={handleGuessSubmit}
              playerNames={playerNames}
              guess={guess}
              guesses={guesses}
              setGuess={setGuess}
              setGuesses={setGuesses}
              hintClicked={hintClicked}
              handleHintPress={handleHintPress}
            />
            {/* Headings and Guess Grid */}
            <ColumnHeadings />
            <GuessGrid
              playerCorrectName={playerFullName}
              guesses={guesses}
              guessRef={guessRef}
              hintColumns={hintColumns}
              hintClicked={hintClicked}
              setHintColumns={setHintColumns}
              playerTeamName={playerTeamName}
              playerConference={playerConference}
              playerAge={playerAge}
              playerPos={playerPos}
              playerNo={playerNo}
              playerDraftNo={playerDraftNo}
            />
            {/* Win Lose Modals */}
            <WinLoseModal
              gameFinished={gameFinished}
              gameWon={gameWon}
              winOpen={winOpen}
              loseOpen={loseOpen}
              setWinOpen={setWinOpen}
              setLoseOpen={setLoseOpen}
              playerHeadshot={playerHeadshot}
              playerFullName={playerFullName}
            />
          </Box>
          <Footer />
        </div>
      ) : null}
    </>
  );
};

export default Daily;
