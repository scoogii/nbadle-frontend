import { Button } from "@mui/joy";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { generateShareText, shareResults } from "../utils/shareResults";

const ShareResultsButton = ({
  guesses,
  correctPlayer,
  gameWon,
  hintColumn,
  isWnba,
  onCopied,
}) => {
  const [shareText, setShareText] = useState(null);

  useEffect(() => {
    generateShareText(guesses, correctPlayer, gameWon, hintColumn, isWnba).then(setShareText);
  }, []);

  const handleShare = async () => {
    if (!shareText) return;
    try {
      const result = await shareResults(shareText);
      if (result === "copied" && onCopied) {
        onCopied();
      }
    } catch {
      // silently fail
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "2.5vh",
        marginBottom: "0vh",
      }}
    >
      <Button
        sx={{
          width: { xs: "40vw", sm: "30vw", md: "22vw", lg: "16vw" },
          height: { xs: "6vh", sm: "6vh", md: "6vh", lg: "7vh" },
          color: "white",
          borderRadius: "14px",
        }}
        variant="contained"
        style={{
          background: "#62cc87",
          fontSize: "13pt",
          justifyContent: "center",
          alignItems: "center",
        }}
        className={styles.bgButton}
        onClick={handleShare}
      >
        Share Results
      </Button>
    </Box>
  );
};

export default ShareResultsButton;
