import { Button } from "@mui/joy";
import styles from "../styles/Home.module.css";
import { Box, Tooltip } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import Image from "next/image";
import Link from "next/link";

const Header = ({
  setGameFinished,
  setGuesses,
  setHowToPlayOpen,
  setCheatSheetOpen,
}) => {
  // Return to starting screen
  const clickHomeHandler = () => {
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
        height: { xs: 60, sm: 70, md: 70, lg: 75 },
        marginBottom: { xs: "0vh", sm: "3vh" },
      }}
    >
      <Tooltip title="Need Help?">
        <Button
          className={styles.scaleButton}
          sx={{
            background: "transparent",
            position: "absolute",
            left: "0",
            marginLeft: "1vw",
          }}
          onClick={() => {
            setCheatSheetOpen(true);
          }}
        >
          <EmojiObjectsIcon />
        </Button>
      </Tooltip>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          flex: "1 0 auto",
        }}
      >
        <Image
          src="/basketball.png"
          className={styles.rotate}
          width={30}
          height={30}
          alt="basketball"
        />
        <Button
          sx={{
            background: "transparent",
            fontSize: { xs: "25pt", sm: "30pt" },
            textAlign: "center",
          }}
          className={styles.scaleButton}
          onClick={clickHomeHandler}
          href="/"
          component={Link}
        >
          NBAdle
        </Button>
        <Image
          src="/basketball.png"
          className={styles.rotate}
          width={30}
          height={30}
          alt="basketball"
        />
      </Box>
      <Tooltip title="How To Play">
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
      </Tooltip>
    </Box>
  );
};

export default Header;
