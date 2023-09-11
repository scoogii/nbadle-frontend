import { Button } from "@mui/joy";
import styles from "../styles/Home.module.css";

const PlayAgainButton = ({
  gameFinished,
  guesses,
  onStartGameClickHandler,
}) => {
  return (
    <>
      {gameFinished && guesses ? (
        <Button
          sx={{
            width: { xs: 150, sm: 200, lg: 250 },
            height: { xs: 60, sm: 70, lg: 80 },
            color: "white",
            borderRadius: "14px",
            marginTop: "3vh",
          }}
          variant="contained"
          style={{
            background: "#62cc87",
            fontSize: "11pt",
            verticalAlign: "middle",
          }}
          onClick={onStartGameClickHandler}
          className={styles.bgButton}
        >
          Play Again
        </Button>
      ) : null}
    </>
  );
};

export default PlayAgainButton;
