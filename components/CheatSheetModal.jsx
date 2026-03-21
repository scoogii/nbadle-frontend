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
              <h3 style={{ textAlign: "center", fontWeight: "normal", "fontStyle": "italic" }}>
                For the filthy casuals
              </h3>
              <h2 style={{ textAlign: "center", marginBottom: "2px" }}>NBA</h2>
              <hr style={{ border: "none", borderTop: "1px solid #cdcfd1", marginTop: 0, marginBottom: "16px" }} />
              <h3>West</h3>
              <Box sx={teamsContainerStyle}>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/mavericks.png"
                    alt="Dallas Mavericks logo"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/nuggets.png"
                    alt="Denver Nuggets logo"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/warriors.png"
                    alt="Golden State Warriors logo"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/rockets.png"
                    alt="Houston Rockets logo"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/clippers.png"
                    alt="Los Angeles Clippers logo"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/lakers.png"
                    alt="Los Angeles Lakers logo"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/grizzlies.png"
                    alt="Memphis Grizzlies logo"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/timberwolves.png"
                    alt="Minnesota Timberwolves logo"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/pelicans.png"
                    alt="New Orleans Pelicans logo"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/thunder.png"
                    alt="Oklahoma City Thunder logo"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/suns.png"
                    alt="Phoenix Suns logo"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/trail blazers.png"
                    alt="Portland Trail Blazers logo"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/kings.png"
                    alt="Sacramento Kings logo"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/spurs.png"
                    alt="San Antonio Spurs logo"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/jazz.png"
                    alt="Utah Jazz logo"
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
                    alt="Atlanta Hawks logo"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/celtics.png"
                    alt="Boston Celtics logo"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/nets.png"
                    alt="Brooklyn Nets logo"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/hornets.png"
                    alt="Charlotte Hornets logo"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/bulls.png"
                    alt="Chicago Bulls logo"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/cavaliers.png"
                    alt="Cleveland Cavaliers logo"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/pistons.png"
                    alt="Detroit Pistons logo"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/pacers.png"
                    alt="Indiana Pacers logo"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/heat.png"
                    alt="Miami Heat logo"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/bucks.png"
                    alt="Milwaukee Bucks logo"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/knicks.png"
                    alt="New York Knicks logo"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/magic.png"
                    alt="Orlando Magic logo"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/76ers.png"
                    alt="Philadelphia 76ers logo"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/raptors.png"
                    alt="Toronto Raptors logo"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image
                    component="img"
                    src="/wizards.png"
                    alt="Washington Wizards logo"
                    width={100}
                    height={100}
                    style={teamImageStyle}
                  />
                </Box>
              </Box>
              <h2 style={{ textAlign: "center", marginTop: "20px", marginBottom: "2px" }}>WNBA</h2>
              <hr style={{ border: "none", borderTop: "1px solid #cdcfd1", marginTop: 0, marginBottom: "16px" }} />
              <h3>West</h3>
              <Box sx={teamsContainerStyle}>
                <Box sx={imageContainerStyle}>
                  <Image component="img" src="/aces.png" alt="Las Vegas Aces logo" width={100} height={100} style={teamImageStyle} />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image component="img" src="/lynx.png" alt="Minnesota Lynx logo" width={100} height={100} style={teamImageStyle} />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image component="img" src="/mercury.png" alt="Phoenix Mercury logo" width={100} height={100} style={teamImageStyle} />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image component="img" src="/sparks.png" alt="Los Angeles Sparks logo" width={100} height={100} style={teamImageStyle} />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image component="img" src="/storm.png" alt="Seattle Storm logo" width={100} height={100} style={teamImageStyle} />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image component="img" src="/wings.png" alt="Dallas Wings logo" width={100} height={100} style={teamImageStyle} />
                </Box>
              </Box>
              <h3>East</h3>
              <Box sx={teamsContainerStyle}>
                <Box sx={imageContainerStyle}>
                  <Image component="img" src="/dream.png" alt="Atlanta Dream logo" width={100} height={100} style={teamImageStyle} />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image component="img" src="/sky.png" alt="Chicago Sky logo" width={100} height={100} style={teamImageStyle} />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image component="img" src="/sun.png" alt="Connecticut Sun logo" width={100} height={100} style={teamImageStyle} />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image component="img" src="/fever.png" alt="Indiana Fever logo" width={100} height={100} style={teamImageStyle} />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image component="img" src="/liberty.png" alt="New York Liberty logo" width={100} height={100} style={teamImageStyle} />
                </Box>
                <Box sx={imageContainerStyle}>
                  <Image component="img" src="/mystics.png" alt="Washington Mystics logo" width={100} height={100} style={teamImageStyle} />
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
