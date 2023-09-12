import { Box, Modal, ModalClose, Sheet } from "@mui/joy";
import styles from "../styles/Home.module.css";

const CheatSheetModal = ({ cheatSheetOpen, setCheatSheetOpen }) => {
  const teamsContainerStyle = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: { xs: "5px", sm: "6px", md: "8px", lg: "10px" },
  };
  const imageContainerStyle = {
    width: { xs: "45px", sm: "50px", md: "55px", lg: "60px" },
    height: "100%",
    justifyContent: "center",
  };

  const teamImageStyle = {
    maxWidth: "100%",
    maxHeight: "100%",
  };

  return (
    <>
      <Modal
        disableAutoFocus={true}
        open={cheatSheetOpen}
        onClose={() => setCheatSheetOpen(false)}
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
            <h1>Cheat Sheet</h1>
            <Box
              sx={{
                flexDirection: "column",
                textAlign: "left",
              }}
            >
              <h3 style={{ textAlign: "center" }}>
                Filthy casual? We've got you covered
              </h3>
              <h3>West</h3>
              <Box sx={teamsContainerStyle}>
                <Box sx={imageContainerStyle}>
                  <Box
                    component="img"
                    src="/mavericks.png"
                    sx={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Box component="img" src="/nuggets.png" sx={teamImageStyle} />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Box
                    component="img"
                    src="/warriors.png"
                    sx={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Box component="img" src="/rockets.png" sx={teamImageStyle} />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Box
                    component="img"
                    src="/clippers.png"
                    sx={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Box component="img" src="/lakers.png" sx={teamImageStyle} />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Box
                    component="img"
                    src="/grizzlies.png"
                    sx={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Box
                    component="img"
                    src="/timberwolves.png"
                    sx={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Box
                    component="img"
                    src="/pelicans.png"
                    sx={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Box component="img" src="/thunder.png" sx={teamImageStyle} />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Box component="img" src="/suns.png" sx={teamImageStyle} />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Box
                    component="img"
                    src="/trail blazers.png"
                    sx={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Box component="img" src="/kings.png" sx={teamImageStyle} />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Box component="img" src="/spurs.png" sx={teamImageStyle} />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Box component="img" src="/jazz.png" sx={teamImageStyle} />
                </Box>
              </Box>
              <h3>East</h3>
              <Box sx={teamsContainerStyle}>
                <Box sx={imageContainerStyle}>
                  <Box component="img" src="/hawks.png" sx={teamImageStyle} />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Box component="img" src="/celtics.png" sx={teamImageStyle} />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Box component="img" src="/nets.png" sx={teamImageStyle} />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Box component="img" src="/hornets.png" sx={teamImageStyle} />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Box component="img" src="/bulls.png" sx={teamImageStyle} />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Box
                    component="img"
                    src="/cavaliers.png"
                    sx={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Box component="img" src="/pistons.png" sx={teamImageStyle} />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Box component="img" src="/pacers.png" sx={teamImageStyle} />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Box component="img" src="/heat.png" sx={teamImageStyle} />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Box component="img" src="/bucks.png" sx={teamImageStyle} />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Box component="img" src="/knicks.png" sx={teamImageStyle} />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Box component="img" src="/magic.png" sx={teamImageStyle} />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Box component="img" src="/76ers.png" sx={teamImageStyle} />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Box component="img" src="/raptors.png" sx={teamImageStyle} />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Box component="img" src="/wizards.png" sx={teamImageStyle} />
                </Box>
              </Box>
            </Box>
          </Box>
        </Sheet>
      </Modal>
    </>
  );
};

export default CheatSheetModal;
