import { Tooltip } from "@mui/joy";
import { Box, Paper, CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import {
  checkTeam,
  checkAge,
  checkNo,
  checkDraftNo,
} from "../utils/checkStats.js";
import { useLocalStorage } from "usehooks-ts";

const Guess = ({
  hints,
  setHintColumns,
  playerCorrectName,
  guess,
  playerTeam,
  playerConference,
  playerAge,
  playerPos,
  playerNo,
  playerDraftNo,
}) => {
  const [headshot, setHeadshot] = useState(null);
  const [teamName, setTeamName] = useState("");
  const [conference, setConference] = useState("");
  const [age, setAge] = useState(0);
  const [pos, setPos] = useState("");
  const [no, setNo] = useState("");
  const [draftNo, setDraftNo] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hintColumn, setHintColumn] = useLocalStorage(
    "hintColumn",
    hints[Math.floor(Math.random() * hints.length)],
  );

  const getGuessedPlayerData = async () => {
    if (guess !== "HINT") {
      const response = await fetch(
        `https://nbadle-backend.onrender.com/api/getguessedplayer?guess=${guess}`,
        {
          method: "GET",
        },
      );
      const data = await response.json();

      return data;
    } else {
      const response = await fetch(
        `https://nbadle-backend.onrender.com/api/getguessedplayer?guess=${playerCorrectName}`,
      );

      const data = await response.json();
      for (const column in data) {
        if (column !== hintColumn) {
          data[column] = "";
        }
      }

      return data;
    }
  };

  useEffect(() => {
    getGuessedPlayerData()
      .then((data) => {
        setIsLoading(true);
        setHeadshot(data["headshot"]);
        setTeamName(data["team_name"]);
        setConference(data["conference"]);
        setAge(data["age"]);
        setPos(data["position"]);
        setNo(data["player_number"]);
        setDraftNo(data["draft_number"]);
      })
      .finally(setIsLoading(false));
  }, []);

  // When new row is made, update possible hints player can get based on green columns if any
  useEffect(() => {
    const toRemove = [];
    // If any guesses are correct, remove them from possible hints we can provide
    if (playerTeam === teamName) {
      toRemove.push("team_name");
    }
    if (playerConference === conference) {
      toRemove.push("conference");
    }
    if (playerAge === age) {
      toRemove.push("age");
    }
    if (playerPos === pos) {
      toRemove.push("position");
    }
    if (playerNo === parseInt(no)) {
      toRemove.push("player_number");
    }
    if (playerDraftNo === draftNo) {
      toRemove.push("draft_number");
    }
    if (hintColumn === "" || !hints.includes(hintColumn)) {
      // Update possible hint they can get
      setHintColumn(hints[Math.floor(Math.random() * hints.length)]);
    }
    // Update all the hints still possible in receiving
    setHintColumns(hints.filter((item) => !toRemove.includes(item)));
  }, [teamName, conference, age, pos, no, draftNo]);

  const columnStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRight: "1px solid",
    borderLeft: "1px solid",
    borderColor: "#cdcfd1",
  };

  const boxStyle = {
    width: { xs: "14vw", md: "11vw", lg: "10vw", xl: "9vw" },
    height: "100%",
    fontSize: { xs: "2.6vw", md: "1.8vw", lg: "1.2vw", xl: "1.1vw" },
    position: { xs: "relative" },
  };

  const higherLower = (guessNum, actualNum) => {
    if (guessNum === null) {
      return;
    }

    if (guessNum < actualNum) {
      return <Box sx={{ marginTop: { xs: "0.4vh", lg: "0" } }}>⬆️</Box>;
    } else if (guessNum > actualNum) {
      return <Box sx={{ marginTop: { xs: "0.4vh", lg: "0" } }}>⬇️</Box>;
    }
  };

  return (
    <>
      <Paper
        sx={{
          width: "100%",
          height: { xs: "13vh", md: "12vh", lg: "10vh" },
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
        className={styles.guessPaper}
      >
        <Box style={columnStyle} sx={boxStyle} className={styles.fade}>
          {isLoading ? (
            <Tooltip title={guess}>
              <img
                src={headshot !== "" ? headshot : null}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
              />
            </Tooltip>
          ) : (
            <CircularProgress />
          )}
        </Box>

        <Box
          style={columnStyle}
          sx={boxStyle}
          className={checkTeam(teamName, playerTeam)}
        >
          {isLoading ? (
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <Tooltip title={teamName}>
                <img
                  src={
                    teamName !== "" ? `/${teamName.toLowerCase()}.png` : null
                  }
                  alt={teamName}
                  style={{
                    maxWidth: "75%",
                    maxHeight: "75%",
                  }}
                />
              </Tooltip>
            </Box>
          ) : (
            <CircularProgress />
          )}
        </Box>

        <Box
          style={columnStyle}
          sx={boxStyle}
          className={
            playerConference === conference ? styles.correctGuess : styles.fade
          }
        >
          {isLoading ? (
            <img
              src={
                conference === "East" || conference === "West"
                  ? `/${conference}.png`
                  : null
              }
              alt={conference}
              style={{
                maxWidth: "75%",
                maxHeight: "75%",
              }}
            />
          ) : (
            <CircularProgress />
          )}
        </Box>

        <Box
          style={columnStyle}
          sx={boxStyle}
          className={checkAge(age, playerAge)}
        >
          {isLoading ? (
            <div>
              {age}
              {age !== "" ? higherLower(age, playerAge) : null}
            </div>
          ) : (
            <CircularProgress />
          )}
        </Box>

        <Box
          style={columnStyle}
          sx={boxStyle}
          className={playerPos === pos ? styles.correctGuess : styles.fade}
        >
          {isLoading ? <div>{pos}</div> : <CircularProgress />}
        </Box>

        <Box
          style={columnStyle}
          sx={boxStyle}
          className={checkNo(parseInt(no), parseInt(playerNo))}
        >
          {isLoading ? (
            <div>
              {no !== "" ? no : null}
              {no !== "" ? higherLower(parseInt(no), parseInt(playerNo)) : null}
            </div>
          ) : (
            <CircularProgress />
          )}
        </Box>

        <Box
          style={columnStyle}
          sx={boxStyle}
          className={checkDraftNo(parseInt(draftNo), parseInt(playerDraftNo))}
        >
          {isLoading ? (
            <div>
              {draftNo}
              {draftNo !== ""
                ? higherLower(parseInt(draftNo), parseInt(playerDraftNo))
                : null}
            </div>
          ) : (
            <CircularProgress />
          )}
        </Box>
      </Paper>
    </>
  );
};

export default Guess;
