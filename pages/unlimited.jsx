import { Box } from "@mui/joy";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GameScreen from "../components/GameScreen";
import AlertBar from "../components/AlertBar";
import styles from "../styles/Home.module.css";
import WinLoseModal from "../components/WinLoseModal";
import HowToPlayModal from "../components/HowToPlayModal";
import CheatSheetModal from "../components/CheatSheetModal";
import { useEffect, useRef, useState } from "react";

const Unlimited = () => {
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
  const [gameFinished, setGameFinished] = useState(false); // Game is finished or not
  const [gameWon, setGameWon] = useState(false);

  // Guesses and hints
  const guessRef = useRef(null);
  const [guess, setGuess] = useState("");
  const [guesses, setGuesses] = useState([]);

  // Modals
  const [winOpen, setWinOpen] = useState(false);
  const [loseOpen, setLoseOpen] = useState(false);
  const [howToPlayOpen, setHowToPlayOpen] = useState(false);
  const [cheatSheetOpen, setCheatSheetOpen] = useState(false);

  // Hint button status
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

  // Start game handler
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

  // If mystery player has not been set, set one
  useEffect(() => {
    if (playerFullName === "") {
      getPlayerData();
    }
  }, []);

  // If guesses is 6 and player not guessed, game is lost
  useEffect(() => {
    // Scroll to most recent guess
    guessRef.current?.lastElementChild?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });

    // Disable hint when there are 5 guesses
    if (guesses.length === 7) {
      setHintClicked(true);
    }

    // If all columns HAVE been green, disable hints
    if (hintColumns.length === 0) {
      setHintClicked(true);
    }

    // Lose condition - show lose modal and load actual player guess row
    if (guesses.length === 8 && !gameWon) {
      setGuesses([...guesses, playerFullName]);
      setGameFinished(true);
      setLoseOpen(true);
    }
  }, [guesses]);

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
          {/* If game has started, show game screen */}
          <GameScreen
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
          />
        </Box>
        <Footer />
      </div>
    </>
  );
};

export default Unlimited;
