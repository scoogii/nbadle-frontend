import { Box, Modal, ModalClose, Sheet } from "@mui/joy";
import styles from "../styles/Home.module.css";
import Image from "next/image";

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
    display: "flex",
    width: { xs: "65px", sm: "80px", md: "80px", lg: "85px" },
    height: { xs: "65px", sm: "80px", md: "80px", lg: "85px" },
    justifyContent: "center",
    alignItems: "center",
  };

  const teamImageStyle = {
    width: "75%",
    height: "auto",
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
                  <Image
                    component="img"
                    src="/mavericks.png"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/nuggets.png"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/warriors.png"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/rockets.png"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/clippers.png"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/lakers.png"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/grizzlies.png"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/timberwolves.png"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/pelicans.png"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/thunder.png"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/suns.png"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/trail blazers.png"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/kings.png"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/spurs.png"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/jazz.png"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
              </Box>
              <h3>East</h3>
              <Box sx={teamsContainerStyle}>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/hawks.png"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/celtics.png"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/nets.png"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/hornets.png"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/bulls.png"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/cavaliers.png"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/pistons.png"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/pacers.png"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/heat.png"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/bucks.png"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/knicks.png"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/magic.png"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/76ers.png"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/raptors.png"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/wizards.png"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
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
