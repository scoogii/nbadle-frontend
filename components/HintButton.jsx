import { Button } from "@mui/joy";
import styles from "../styles/Home.module.css";

const HintButton = ({ hintClicked, handleHintPress }) => {
  return (
    <Button
      variant="plain"
      color="neutral"
      disabled={hintClicked}
      onClick={handleHintPress}
      sx={{
        color: "#e08114",
        marginTop: "1vh",
        marginBottom: "2vh",
        background: "transparent",
      }}
      className={styles.scaleButton}
    >
      Need a hint?
    </Button>
  );
};

export default HintButton;
