import Head from "next/head";
import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Home.module.css";
// Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeScreen from "../components/HomeScreen";
// MUI
import { Box } from "@mui/material";
import GameScreen from "../components/GameScreen";
import WinLoseModal from "../components/WinLoseModal";
import HowToPlayModal from "../components/HowToPlayModal";
import AlertBar from "../components/AlertBar";

export default function Home() {
  // Player data
  const [playerHeadshot, setPlayerHeadshot] = useState(null);
  const [playerFullName, setPlayerFullName] = useState("");
  const [playerTeamName, setPlayerTeamName] = useState("");
  const [playerConference, setPlayerConference] = useState("");
  const [playerAge, setPlayerAge] = useState(0);
  const [playerPos, setPlayerPos] = useState("");
  const [playerNo, setPlayerNo] = useState(0);
  const [playerDraftNo, setPlayerDraftNo] = useState(null);

  // Columns that are valid for hints
  const [hintColumns, setHintColumns] = useState([
    { name: "team_name" },
    { name: "conference" },
    { name: "age" },
    { name: "position" },
    { name: "player_number" },
    { name: "draft_number" },
  ]);

  const [playerNames, setPlayerNames] = useState([]); // Set player names
  const [isShown, setIsShown] = useState(false); // Player data visibility
  const [gameFinished, setGameFinished] = useState(false); // Game is finished or not
  const [gameWon, setGameWon] = useState(false);

  // Guesses and hints
  const guessRef = useRef(null);
  const [guess, setGuess] = useState("");
  const [guesses, setGuesses] = useState([]);

  // Modals for win and loss
  const [winOpen, setWinOpen] = useState(false);
  const [loseOpen, setLoseOpen] = useState(false);

  // How to play modal
  const [howToPlayOpen, setHowToPlayOpen] = useState(false);

  // Hint Button status
  const [hintClicked, setHintClicked] = useState(false);

  // Alert bar for invalid actions
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  // Retreive player data function
  const getPlayerData = async () => {
    const response = await fetch(
      "https://nbadle-backend.onrender.com/api/getplayer",
      {
        method: "GET",
      },
    );
    const data = await response.json();

    if (data.error) {
      alert(data.error);
      return;
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

  // Game cleanup function
  const cleanup = () => {
    setGuess("");
    setGuesses([]);
    setIsShown(true);
    setHintClicked(false);
    setGameFinished(false);
    setGameWon(false);
    setHintColumns([
      { name: "team_name" },
      { name: "conference" },
      { name: "age" },
      { name: "position" },
      { name: "player_number" },
      { name: "draft_number" },
    ]);
  };

  // HANDLERS
  // On start game button press, load game
  const onStartGameClickHandler = () => {
    cleanup();
    getPlayerData();
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

  // If guesses is 6 and player not guessed, game is lost
  useEffect(() => {
    // Scroll to most recent guess
    guessRef.current?.lastElementChild?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });

    // Disable hint when there are 5 guesses
    if (guesses.length === 5) {
      setHintClicked(true);
    }

    // If all columns HAVE been green, disable hints
    if (hintColumns.length === 0) {
      setHintClicked(true);
    }

    // Lose condition - show lose modal and load actual player guess row
    if (guesses.length === 6 && !gameWon) {
      setGuesses([...guesses, playerFullName]);
      setGameFinished(true);
      setLoseOpen(true);
    }
  }, [guesses]);

  return (
    // Parent container
    <div className={styles.container}>
      <Head>
        <title>NBAdle</title>
        <link rel="icon" href="/basketball.png" />
      </Head>

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

      {/* Header */}
      <Header
        setIsShown={setIsShown}
        setGameFinished={setGameFinished}
        setGuesses={setGuesses}
        setHowToPlayOpen={setHowToPlayOpen}
      />

      {/* Content container */}
      <Box>
        {/* If game has not started, show home screen */}
        <HomeScreen
          isShown={isShown}
          gameFinished={gameFinished}
          onStartGameClickHandler={onStartGameClickHandler}
        />

        {/* If game has started, show game screen */}
        <GameScreen
          isShown={isShown}
          gameFinished={gameFinished}
          handleGuessSubmit={handleGuessSubmit}
          playerNames={playerNames}
          guess={guess}
          setGuess={setGuess}
          setGuesses={setGuesses}
          handleHintPress={handleHintPress}
          hintClicked={hintClicked}
          guesses={guesses}
          guessRef={guessRef}
          hintColumns={hintColumns}
          setHintColumns={setHintColumns}
          playerTeamName={playerTeamName}
          playerConference={playerConference}
          playerAge={playerAge}
          playerPos={playerPos}
          playerNo={playerNo}
          playerDraftNo={playerDraftNo}
          onStartGameClickHandler={onStartGameClickHandler}
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
          onStartGameClickHandler={onStartGameClickHandler}
        />
      </Box>

      <Footer />

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
      `}</style>
    </div>
  );
}
