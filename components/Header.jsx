import { Button } from "@mui/joy";
import styles from "../styles/Home.module.css";
import { Box } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";

const Header = ({
  setIsShown,
  setGameFinished,
  setGuesses,
  setHowToPlayOpen,
}) => {
  // Return to starting screen
  const clickHomeHandler = () => {
    setIsShown(false);
    setGameFinished(false);
    setGuesses([]);
  };

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        top: "0",
        width: "100%",
        textAlign: "center",
        background: "#006bb7",
        color: "white",
        boxShadow: "0 5px #00406e",
      }}
      sx={{
        height: { xs: 60, sm: 70, lg: 85 },
        marginBottom: "3vh",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          flex: "1 0 auto",
        }}
      >
        <img
          src="/basketball.png"
          className={styles.rotate}
          width="40px"
          height="40px"
        />
        <Button
          sx={{
            background: "transparent",
            fontSize: "30pt",
            textAlign: "center",
          }}
          className={styles.scaleButton}
          onClick={clickHomeHandler}
        >
          NBAdle
        </Button>
        <img
          src="/basketball.png"
          className={styles.rotate}
          width="40px"
          height="40px"
        />
      </Box>
      <Button
        className={styles.scaleButton}
        sx={{
          background: "transparent",
          position: "absolute",
          right: "0",
          marginRight: "1vw",
        }}
        onClick={() => {
          setHowToPlayOpen(true);
        }}
      >
        <HelpIcon />
      </Button>
    </Box>
  );
};

export default Header;
