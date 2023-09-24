import { Grid } from "@mui/joy";
import { Paper } from "@mui/material";
import Guess from "./Guess";

const GuessGrid = ({
  playerCorrectName,
  guesses,
  guessRef,
  hintColumns,
  setHintColumns,
  playerTeamName,
  playerConference,
  playerAge,
  playerPos,
  playerNo,
  playerDraftNo,
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
            hints={hintColumns}
            setHintColumns={setHintColumns}
            playerCorrectName={playerCorrectName}
            guess={guess}
            playerTeam={playerTeamName}
            playerConference={playerConference}
            playerAge={playerAge}
            playerPos={playerPos}
            playerNo={playerNo}
            playerDraftNo={playerDraftNo}
            key={index}
          />
        ))}
      </Grid>
    </Paper>
  );
};

export default GuessGrid;
