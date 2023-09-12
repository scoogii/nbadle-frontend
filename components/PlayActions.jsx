import { Box } from "@mui/joy";
import GuessForm from "./GuessForm";
import HintButton from "./HintButton";
import Lives from "./Lives";

const PlayActions = ({
  gameFinished,
  handleGuessSubmit,
  playerNames,
  guess,
  guesses,
  setGuess,
  setGuesses,
  hintClicked,
  handleHintPress,
}) => {
  return (
    <>
      {!gameFinished ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <GuessForm
            handleGuessSubmit={handleGuessSubmit}
            playerNames={playerNames}
            guess={guess}
            guesses={guesses}
            setGuess={setGuess}
            setGuesses={setGuesses}
          />
          <Lives guesses={guesses} />
          <HintButton
            hintClicked={hintClicked}
            handleHintPress={handleHintPress}
          />
        </Box>
      ) : null}
    </>
  );
};

export default PlayActions;
