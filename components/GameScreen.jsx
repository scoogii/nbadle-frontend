import { Box } from "@mui/joy";
import PlayActions from "./PlayActions";
import ColumnHeadings from "./ColumnHeadings";
import GuessGrid from "./GuessGrid";
import PlayAgainButton from "./PlayAgainButton";

const GameScreen = ({
  isShown,
  gameFinished,
  handleGuessSubmit,
  playerNames,
  guess,
  setGuess,
  setGuesses,
  handleHintPress,
  hintClicked,
  guesses,
  guessRef,
  hintColumns,
  setHintColumns,
  playerTeamName,
  playerConference,
  playerAge,
  playerPos,
  playerNo,
  playerDraftNo,
  onStartGameClickHandler,
}) => {
  return (
    <>
      {isShown ? (
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          sx={{
            minHeight: {
              xs: "calc(100vh - 120px - 6vh)",
              sm: "calc(100vh - 140px - 6vh)",
              md: "calc(100vh - 140px - 6vh)",
              lg: "calc(100vh - 80px - 2vh)",
            },
            marginTop: { lg: "-2vh" },
            marginBottom: { lg: "-2vh" },
          }}
        >
          {/* Play buttons: autocomplete, guess, hint */}
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
          />

          {/* When game is finished and user has not pressed play again, show play again button */}
          <PlayAgainButton
            gameFinished={gameFinished}
            guesses={guesses}
            onStartGameClickHandler={onStartGameClickHandler}
          />
        </Box>
      ) : null}
    </>
  );
};

export default GameScreen;
