import Head from "next/head";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";
// Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeScreen from "../components/HomeScreen";
// MUI
import { Box } from "@mui/material";
import HowToPlayModal from "../components/HowToPlayModal";
import CheatSheetModal from "../components/CheatSheetModal";

export default function Home() {
  const [howToPlayOpen, setHowToPlayOpen] = useState(false);
  const [cheatSheetOpen, setCheatSheetOpen] = useState(false);

  return (
    // Parent container
    <div className={styles.container}>
      <Head>
        <title>NBAdle</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta
          name="description"
          content="Play the (unofficial) NBA player guessing game. You have 8 chances to correctly guess the randomly chosen NBA player!"
        />
      </Head>
      <HowToPlayModal
        howToPlayOpen={howToPlayOpen}
        setHowToPlayOpen={setHowToPlayOpen}
      />
      <CheatSheetModal
        cheatSheetOpen={cheatSheetOpen}
        setCheatSheetOpen={setCheatSheetOpen}
      />
      {/* Header */}
      <Header
        setHowToPlayOpen={setHowToPlayOpen}
        setCheatSheetOpen={setCheatSheetOpen}
      />
      {/* Content container */}
      <Box>
        {/* If game has not started, show home screen */}
        <HomeScreen />
      </Box>
      <Footer />
    </div>
  );
}
