import { Box, Button, Modal, ModalClose, Sheet, Typography } from "@mui/joy";
import Confetti from "./Confetti";
import styles from "../styles/Home.module.css";

const WinLoseModal = ({
  gameFinished,
  gameWon,
  winOpen,
  loseOpen,
  setWinOpen,
  setLoseOpen,
  playerHeadshot,
  playerFullName,
}) => {
  return (
    <>
      {gameFinished ? (
        <Modal
          disableAutoFocus={true}
          open={gameWon ? winOpen : loseOpen}
          onClose={() => (gameWon ? setWinOpen(false) : setLoseOpen(false))}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Sheet
            className={styles.modalFadeIn}
            style={{
              zIndex: "1",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              border: "1px solid #b8b8b8",
            }}
            sx={{
              width: { xs: "70vw", sm: "50vw", md: "40vw" },
              height: { xs: "45vh", sm: "60vh", lg: "55vh" },
              borderRadius: "14px",
            }}
          >
            <ModalClose
              variant="outlined"
              sx={{
                top: "calc(-1/4 * var(--IconButton-size))",
                right: "calc(-1/4 * var(--IconButton-size))",
                boxShadow: "0 2px 12px 0 rgba(0 0 0 / 0.2)",
                borderRadius: "50%",
                bgcolor: "background.surface",
              }}
            />
            {gameWon ? <Confetti /> : null}
            <Box
              component="img"
              src={playerHeadshot}
              alt="mystery player headshot"
              sx={{
                maxWidth: { xs: 120, sm: 160, md: 260 },
                maxHeight: { xs: 90, sm: 120, md: 190 },
              }}
            />

            {gameWon ? <h1>Congrats! You won! 🥳</h1> : <h1>You lost! 😭</h1>}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "3vw", sm: "2.4vw", md: "2vw" },
              }}
            >
              The mystery player was {playerFullName}
            </Typography>
            <Button
              sx={{
                width: { xs: "20vw", md: "15vw", lg: "10vw" },
                height: { xs: "7vh", md: "6vh", lg: "6vh" },
                color: "white",
                borderRadius: "14px",
                marginTop: "2vh",
              }}
              variant="contained"
              style={{
                background: "#62cc87",
                fontSize: "11pt",
                verticalAlign: "middle",
                justifyContent: "center",
                alignItems: "flexEnd",
              }}
              onClick={() => (gameWon ? setWinOpen(false) : setLoseOpen(false))}
            >
              Show Results
            </Button>
          </Sheet>
        </Modal>
      ) : null}
    </>
  );
};

export default WinLoseModal;
