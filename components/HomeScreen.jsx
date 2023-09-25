import styles from "../styles/Home.module.css";
import { Box } from "@mui/material";
import { Button, Chip } from "@mui/joy";
import Link from "next/link";

const HomeScreen = () => {
  return (
    <>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        sx={{
          minHeight: {
            xs: "calc(100vh - 120px)",
            sm: "calc(100vh - 140px - 6vh)",
            md: "calc(100vh - 140px - 6vh)",
            lg: "calc(100vh - 150px - 6vh)",
          },
        }}
      >
        <h1 className={styles.title}>Welcome to NBAdle!</h1>
        <h2
          className={styles.smallTitle}
          style={{
            marginBottom: "5vh",
            textAlign: "center",
          }}
        >
          The NBA Player Guessing Game
        </h2>

        <Box
          sx={{
            display: "flex",
            gap: 5,
          }}
        >
          <Button
            sx={{
              width: { xs: 120, sm: 140, md: 150, lg: 200 },
              height: { xs: 50, sm: 60, md: 65, lg: 70 },
              color: "white",
              borderRadius: "14px",
            }}
            variant="contained"
            style={{
              background: "#62cc87",
              fontSize: "11pt",
              verticalAlign: "middle",
            }}
            className={styles.bgButton}
            href="/daily"
            component={Link}
          >
            <Chip
              className={styles.newFeature}
              sx={{
                background: "#de1440",
                color: "white",
                boxShadow: "0 5px #a10e2e",
                position: "absolute",
                top: { xs: "-20px", md: "-15px" },
                right: { xs: "-18px", md: "-5px" },
              }}
            >
              New!
            </Chip>
            Daily
          </Button>
          <Button
            sx={{
              width: { xs: 120, sm: 140, md: 150, lg: 200 },
              height: { xs: 50, sm: 60, md: 65, lg: 70 },
              color: "white",
              borderRadius: "14px",
            }}
            variant="contained"
            style={{
              background: "#ffad54",
              fontSize: "11pt",
              verticalAlign: "middle",
            }}
            className={styles.bgButton}
            href="/unlimited"
            component={Link}
          >
            Unlimited
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default HomeScreen;
