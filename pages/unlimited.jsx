import { Box } from "@mui/joy";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AlertBar from "../components/AlertBar";
import styles from "../styles/Home.module.css";
import WinLoseModal from "../components/WinLoseModal";
import HowToPlayModal from "../components/HowToPlayModal";
import CheatSheetModal from "../components/CheatSheetModal";
import PlayActions from "../components/PlayActions";
import ColumnHeadings from "../components/ColumnHeadings";
import GuessGrid from "../components/game/GuessGrid";
import PlayAgainButton from "../components/PlayAgainButton";
import useGame from "../hooks/useGame";

const Unlimited = () => {
  const game = useGame("unlimited");

  return (
    <>
      <AlertBar
        isOpen={game.alertOpen}
        handleClose={() => game.setAlertOpen(false)}
        message={game.alertMessage}
      />
      <HowToPlayModal
        howToPlayOpen={game.howToPlayOpen}
        setHowToPlayOpen={game.setHowToPlayOpen}
      />
      <CheatSheetModal
        cheatSheetOpen={game.cheatSheetOpen}
        setCheatSheetOpen={game.setCheatSheetOpen}
      />
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
              isDaily={false}
              isWnba={false}
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
            <PlayAgainButton
              gameFinished={game.gameFinished}
              guesses={game.guesses}
              onStartGameClickHandler={game.onStartGameClickHandler}
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
          />
        </Box>
        <Footer />
      </div>
    </>
  );
};

export default Unlimited;
