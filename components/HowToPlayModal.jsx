import { Box, Modal, ModalClose, Sheet, Typography } from "@mui/joy";
import styles from "../styles/Home.module.css";

const HowToPlayModal = ({ howToPlayOpen, setHowToPlayOpen }) => {
  const listStyle = {
    listStyleType: "circle",
  };
  return (
    <>
      <Modal
        disableAutoFocus={true}
        open={howToPlayOpen}
        onClose={() => setHowToPlayOpen(false)}
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
          <Box
            sx={{
              width: "90%",
              height: "90%",
              overflow: "auto",
            }}
          >
            <h1>How To Play 🤔</h1>
            <Box
              sx={{
                textAlign: "left",
              }}
            >
              <h3>How The Game Works</h3>
              <ul>
                <li>
                  Given <span style={{ fontWeight: "bold" }}>6 attempts</span>,
                  your aim is to guess the{" "}
                  <span style={{ fontWeight: "bold" }}>mystery NBA player</span>
                </li>
                <li>
                  You have an option to use a{" "}
                  <span style={{ fontWeight: "bold" }}>one time hint</span> that
                  consumes a guess, but this hint can't be used on the final
                  guess
                </li>
              </ul>

              <h3>How Guesses Work</h3>
              <ul>
                <li>
                  A guess will indicate how close you are to the correct player
                </li>
                <li>
                  <span style={{ background: "#8de38e" }}>Green</span> indicates
                  that your guessed player has a matching stat or stats to the
                  correct player
                </li>
                <li>
                  <span style={{ background: "#fce56f" }}>Yellow</span>{" "}
                  indicates that your guessed player has a stat or stats that
                  are close to the correct player
                </li>
                <li>
                  ⬆️ and ⬇️ indicates the correct player's stats are either
                  higher or lower than the guessed player's stats
                </li>
              </ul>
              <h1 style={{ textAlign: "center" }}>Good Luck!</h1>
            </Box>
          </Box>
        </Sheet>
      </Modal>
    </>
  );
};

export default HowToPlayModal;
