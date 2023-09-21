import { Box } from "@mui/joy";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import HowToPlayModal from "../components/HowToPlayModal";
import CheatSheetModal from "../components/CheatSheetModal";
import { useState } from "react";

const Daily = () => {
  const [howToPlayOpen, setHowToPlayOpen] = useState(false);
  const [cheatSheetOpen, setCheatSheetOpen] = useState(false);

  return (
    <>
      <HowToPlayModal
        howToPlayOpen={howToPlayOpen}
        setHowToPlayOpen={setHowToPlayOpen}
      />
      <CheatSheetModal
        cheatSheetOpen={cheatSheetOpen}
        setCheatSheetOpen={setCheatSheetOpen}
      />
      <div className={styles.container}>
        <Header
          setHowToPlayOpen={setHowToPlayOpen}
          setCheatSheetOpen={setCheatSheetOpen}
        />
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          sx={{
            minHeight: {
              xs: "calc(100vh - 120px)",
              sm: "calc(100vh - 140px - 6vh)",
              md: "calc(100vh - 70px - 4vh)",
              lg: "calc(100vh - 70px - 2vh)",
            },
            marginTop: { lg: "-2vh" },
            marginBottom: { lg: "-2vh" },
          }}
        ></Box>
        <Footer />
      </div>
    </>
  );
};

export default Daily;
