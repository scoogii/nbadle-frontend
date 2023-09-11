import { Autocomplete, Button, Stack } from "@mui/joy";
import styles from "../styles/Home.module.css";

const GuessForm = ({
  handleGuessSubmit,
  playerNames,
  guess,
  guesses,
  setGuess,
  setGuesses,
}) => {
  return (
    <form onSubmit={handleGuessSubmit}>
      <Stack spacing={1}>
        <Autocomplete
          variant="outlined"
          options={playerNames}
          value={guess}
          sx={{
            width: { xs: 200, sm: 250, md: 300 },
            height: { xs: 40, sm: 45, md: 50, lg: 55, xl: 65 },
          }}
          placeholder="Guess a player"
          onChange={(e, newGuess) => {
            setGuess(newGuess);
          }}
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              handleGuessSubmit(e);
            }
          }}
          required
        />

        <Button
          type="submit"
          sx={{
            height: "5vh",
            color: "white",
            borderRadius: "14px",
          }}
          variant="contained"
          style={{
            background: "#62cc87",
            fontSize: "11pt",
            verticalAlign: "middle",
          }}
          className={styles.bgButton}
        >
          Guess
        </Button>
      </Stack>
    </form>
  );
};

export default GuessForm;
