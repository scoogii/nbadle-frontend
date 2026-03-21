import { Grid } from "@mui/joy";
import { Paper } from "@mui/material";
import Guess from "./Guess";

const GuessGrid = ({
  isDaily,
  isWnba,
  playerCorrectName,
  guesses,
  guessRef,
  hintColumns,
  hintClicked,
  setHintColumns,
  hintColumn,
  setHintColumn,
  playerTeamName,
  playerConference,
  playerAge,
  playerPos,
  playerNo,
  playerDraftNo,
  playerDraftYear,
}) => {
  return (
    <Paper
      elevation={2}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        overflow: "auto",
      }}
      sx={{
        width: { xs: "98vw", md: "77vw", lg: "70vw", xl: "63vw" },
        height: { xs: "39vh", md: "48vh", lg: "60vh" },
      }}
    >
      <Grid ref={guessRef} spacing={0.2}>
        {guesses.map((guess, index) => (
          <Guess
            isDaily={isDaily}
            isWnba={isWnba}
            hintClicked={hintClicked}
            setHintColumns={setHintColumns}
            hintColumn={hintColumn}
            setHintColumn={setHintColumn}
            playerCorrectName={playerCorrectName}
            guess={guess}
            playerTeam={playerTeamName}
            playerConference={playerConference}
            playerAge={playerAge}
            playerPos={playerPos}
            playerNo={playerNo}
            playerDraftNo={playerDraftNo}
            playerDraftYear={playerDraftYear}
            key={index}
          />
        ))}
      </Grid>
    </Paper>
  );
};

export default GuessGrid;
