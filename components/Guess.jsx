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

const Guess = ({
  hints,
  setHintColumns,
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
  const [no, setNo] = useState(0);
  const [draftNo, setDraftNo] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
      let data = {
        headshot: null,
        team_name: playerTeam,
        conference: playerConference,
        age: playerAge,
        position: playerPos,
        player_number: playerNo,
        draft_number: playerDraftNo,
      };

      const hintColumn = hints[Math.floor(Math.random() * hints.length)];

      for (const column in data) {
        if (column !== hintColumn["name"]) {
          data[column] = null;
        }
      }

      return data;
    }
  };

  // Map team names to imgs
  const logos = {
    Hawks: "/hawks.png",
    Celtics: "/celtics.png",
    Nets: "/nets.png",
    Hornets: "/hornets.png",
    Bulls: "/bulls.png",
    Cavaliers: "/cavs.png",
    Mavericks: "/mavs.png",
    Nuggets: "/nuggets.png",
    Pistons: "/pistons.png",
    Warriors: "/warriors.png",
    Rockets: "/rockets.png",
    Pacers: "/pacers.png",
    Clippers: "/clippers.png",
    Lakers: "/lakers.png",
    Grizzlies: "/grizzlies.png",
    Heat: "/heat.png",
    Bucks: "/bucks.png",
    Timberwolves: "/timberwolves.png",
    Pelicans: "/pelicans.png",
    Knicks: "/knicks.png",
    Thunder: "/thunder.png",
    Magic: "/magic.png",
    "76ers": "/76ers.png",
    Suns: "/suns.png",
    Trailblazers: "/trailblazers.png",
    Kings: "/kings.png",
    Spurs: "/spurs.png",
    Raptors: "/raptors.png",
    Jazz: "/jazz.png",
    Wizards: "/wizards.png",
  };

  useEffect(() => {
    getGuessedPlayerData()
      .then((data) => {
        setIsLoading(true);
        setHeadshot(data["headshot"]);
        setTeamName(data["team_name"]);
        console.log(data["team_name"]);
        setConference(data["conference"]);
        setAge(data["age"]);
        setPos(data["position"]);
        setNo(data["player_number"]);
        setDraftNo(data["draft_number"]);

        const toRemove = [];
        // If any guesses are correct, remove them from hintColumns
        if (playerTeam === data["team_name"]) {
          toRemove.push("team_name");
        }
        if (playerConference === data["conference"]) {
          toRemove.push("conference");
        }
        if (playerAge === data["age"]) {
          toRemove.push("age");
        }
        if (playerPos === data["position"]) {
          toRemove.push("position");
        }
        if (playerNo === parseInt(data["player_number"])) {
          toRemove.push("player_number");
        }
        if (playerDraftNo === data["draft_number"]) {
          toRemove.push("draft_number");
        }
        setHintColumns(hints.filter((item) => !toRemove.includes(item.name)));
      })
      .finally(setIsLoading(false));
  }, []);

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
                src={headshot}
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
              {teamName !== "" ? (
                <Tooltip title={teamName}>
                  <img
                    src={logos[teamName]}
                    alt={teamName}
                    style={{
                      maxWidth: "75%",
                      maxHeight: "75%",
                    }}
                  />
                </Tooltip>
              ) : (
                "N/A"
              )}
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
              {higherLower(age, playerAge)}
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
              {no !== "" ? no : "N/A"}
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
              {higherLower(parseInt(draftNo), parseInt(playerDraftNo))}
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
