import { Box, Button } from "@mui/joy";
import styles from "../styles/Home.module.css";

const HintButton = ({ hintClicked, handleHintPress }) => {
  return (
    <>
      {!hintClicked ? (
        <Button
          variant="plain"
          color="neutral"
          disabled={hintClicked}
          onClick={handleHintPress}
          sx={{
            color: "#e08114",
            background: "transparent",
          }}
          className={styles.scaleButton}
        >
          Need a hint?
        </Button>
      ) : (
        <Box
          sx={{
            marginBottom: "2vh",
          }}
        />
      )}
    </>
  );
};

export default HintButton;
