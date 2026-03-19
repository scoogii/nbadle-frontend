"use client";
import { Box } from "@mui/joy";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AlertBar from "../components/AlertBar";
import styles from "../styles/Home.module.css";
import WinLoseModal from "../components/WinLoseModal";
import HowToPlayModal from "../components/HowToPlayModal";
import CheatSheetModal from "../components/CheatSheetModal";
import { useEffect, useState } from "react";
import PlayActions from "../components/PlayActions";
import ColumnHeadings from "../components/ColumnHeadings";
import GuessGrid from "../components/game/GuessGrid";
import Countdown from "../components/daily/Countdown";
import ShareResultsButton from "../components/ShareResultsButton";
import useGame from "../hooks/useGame";

const Daily = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const game = useGame("daily");

  return (
    <>
      <AlertBar
        isOpen={game.alertOpen}
        handleClose={() => game.setAlertOpen(false)}
        message={game.alertMessage}
      />
      <AlertBar
        isOpen={game.copiedOpen}
        handleClose={() => game.setCopiedOpen(false)}
        message="Copied to clipboard! 📋"
        severity="success"
        background="#4caf50"
        borderColor="#2e7d32"
      />
      <HowToPlayModal
        howToPlayOpen={game.howToPlayOpen}
        setHowToPlayOpen={game.setHowToPlayOpen}
      />
      <CheatSheetModal
        cheatSheetOpen={game.cheatSheetOpen}
        setCheatSheetOpen={game.setCheatSheetOpen}
      />
      {isClient ? (
        <div className={styles.container}>
          <Header
            setHowToPlayOpen={game.setHowToPlayOpen}
            setCheatSheetOpen={game.setCheatSheetOpen}
          />
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flex: 1,
              minHeight: "100vh",
            }}
            sx={{
              justifyContent: { xs: "center", sm: "flex-start" },
            }}
          >
            {game.gameFinished ? <Countdown /> : null}{" "}
            <PlayActions
              gameFinished={game.gameFinished}
              handleGuessSubmit={game.handleGuessSubmit}
              playerNames={game.playerNames}
              guess={game.guess}
              guesses={game.guesses}
              setGuess={game.setGuess}
              setGuesses={game.setGuesses}
              hintClicked={game.hintClicked}
              handleHintPress={game.handleHintPress}
            />
            <ColumnHeadings />
            <GuessGrid
              isDaily={true}
              playerCorrectName={game.playerFullName}
              guesses={game.guesses}
              guessRef={game.guessRef}
              hintColumns={game.hintColumns}
              hintClicked={game.hintClicked}
              setHintColumns={game.setHintColumns}
              hintColumn={game.hintColumn}
              setHintColumn={game.setHintColumn}
              playerTeamName={game.playerTeamName}
              playerConference={game.playerConference}
              playerAge={game.playerAge}
              playerPos={game.playerPos}
              playerNo={game.playerNo}
              playerDraftNo={game.playerDraftNo}
              playerDraftYear={game.playerDraftYear}
            />
            <WinLoseModal
              gameFinished={game.gameFinished}
              gameWon={game.gameWon}
              winOpen={game.winOpen}
              loseOpen={game.loseOpen}
              setWinOpen={game.setWinOpen}
              setLoseOpen={game.setLoseOpen}
              playerHeadshot={game.playerHeadshot}
              playerFullName={game.playerFullName}
              guesses={game.guesses}
              correctPlayer={{
                team_name: game.playerTeamName,
                conference: game.playerConference,
                age: game.playerAge,
                position: game.playerPos,
                player_number: game.playerNo,
                draft_number: game.playerDraftNo,
                draft_year: game.playerDraftYear,
              }}
              hintColumn={game.hintColumn}
              isDaily={true}
              onCopied={() => {
                game.setCopiedOpen(false);
                setTimeout(() => game.setCopiedOpen(true), 100);
              }}
            />
            {game.gameFinished ? (
              <ShareResultsButton
                guesses={game.guesses}
                correctPlayer={{
                  team_name: game.playerTeamName,
                  conference: game.playerConference,
                  age: game.playerAge,
                  position: game.playerPos,
                  player_number: game.playerNo,
                  draft_number: game.playerDraftNo,
                  draft_year: game.playerDraftYear,
                }}
                gameWon={game.gameWon}
                hintColumn={game.hintColumn}
                onCopied={() => {
                  game.setCopiedOpen(false);
                  setTimeout(() => game.setCopiedOpen(true), 100);
                }}
              />
            ) : null}
          </Box>
          <Footer />
        </div>
      ) : null}
    </>
  );
};

export default Daily;
