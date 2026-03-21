import { Tooltip } from "@mui/joy";
import { Box, Paper, CircularProgress, useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";
import {
  checkTeam,
  checkAge,
  checkNo,
  checkDraftNo,
  checkDraftYear,
} from "../../utils/checkStats.js";
const Guess = ({
  isDaily,
  hintClicked,
  setHintColumns,
  hintColumn,
  setHintColumn,
  playerCorrectName,
  guess,
  playerTeam,
  playerConference,
  playerAge,
  playerPos,
  playerNo,
  playerDraftNo,
  playerDraftYear,
}) => {
  const isSmall = useMediaQuery("(max-width:900px)");
  const formatDraft = (val) => (val === "Undrafted" && isSmall ? "Undr." : val);

  const [headshot, setHeadshot] = useState(null);
  const [teamName, setTeamName] = useState("");
  const [conference, setConference] = useState("");
  const [age, setAge] = useState(0);
  const [pos, setPos] = useState("");
  const [no, setNo] = useState("");
  const [draftNo, setDraftNo] = useState("");
  const [draftYear, setDraftYear] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getGuessedPlayerData = async () => {
    if (guess !== "HINT") {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/getguessedplayer?guess=${guess}`,
        { method: "GET" }
      );
      return await response.json();
    } else {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/getguessedplayer?guess=${playerCorrectName}`
      );
      const data = await response.json();
      for (const column in data) {
        if (column === "headshot" || column === "full_name" || column !== hintColumn) {
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
        setDraftYear(data["draft_year"]);
      })
      .catch(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    const toRemove = [];
    if (playerTeam === teamName) toRemove.push("team_name");
    if (playerConference === conference) toRemove.push("conference");
    if (playerAge === age) toRemove.push("age");
    if (playerPos === pos) toRemove.push("position");
    if (playerNo === parseInt(no)) toRemove.push("player_number");
    if (playerDraftNo === draftNo) toRemove.push("draft_number");
    if (playerDraftYear === draftYear) toRemove.push("draft_year");

    setHintColumns((prev) => {
      const updated = prev.filter((item) => !toRemove.includes(item));
      if (updated.length > 0 && !updated.includes(hintColumn)) {
        setHintColumn(updated[Math.floor(Math.random() * updated.length)]);
      }
      return updated;
    });
  }, [teamName, conference, age, pos, no, draftNo, draftYear]);

  const columnStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRight: "1px solid",
    borderLeft: "1px solid",
    borderColor: "#cdcfd1",
    overflow: "hidden",
    minWidth: 0,
  };

  const boxStyle = {
    height: "100%",
    fontSize: { xs: "2.6vw", md: "1.8vw", lg: "1.2vw", xl: "1.1vw" },
  };

  const higherLower = (guessNum, actualNum) => {
    if (guessNum === null) return;
    if (actualNum === "Undrafted") {
      if (guessNum !== "Undrafted") {
        return <Box sx={{ marginTop: { xs: "0.4vh", lg: "0" } }}>⬆️</Box>;
      }
    }
    if (parseInt(guessNum) < parseInt(actualNum)) {
      return <Box sx={{ marginTop: { xs: "0.4vh", lg: "0" } }}>⬆️</Box>;
    } else if (parseInt(guessNum) > parseInt(actualNum)) {
      return <Box sx={{ marginTop: { xs: "0.4vh", lg: "0" } }}>⬇️</Box>;
    }
  };

  return (
    <>
      <Paper
        sx={{
          width: "100%",
          height: { xs: "13vh", md: "12vh", lg: "10vh" },
          display: "grid",
          gridTemplateColumns: "repeat(8, 1fr)",
          alignItems: "center",
        }}
        className={styles.guessPaper}
      >
        <Box style={columnStyle} sx={boxStyle} className={styles.fade}>
          {isLoading ? (
            headshot ? (
              <Tooltip title={guess}>
                <img
                  src={headshot}
                  alt={`${guess} headshot`}
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              </Tooltip>
            ) : null
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
                  style={{ maxWidth: "75%", maxHeight: "75%" }}
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
              style={{ maxWidth: "75%", maxHeight: "75%" }}
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
          className={checkDraftNo(draftNo, playerDraftNo)}
        >
          {isLoading ? (
            <div>
              {formatDraft(draftNo)}
              {draftNo !== "" ? higherLower(draftNo, playerDraftNo) : null}
            </div>
          ) : (
            <CircularProgress />
          )}
        </Box>

        <Box
          style={columnStyle}
          sx={boxStyle}
          className={checkDraftYear(draftYear, playerDraftYear)}
        >
          {isLoading ? (
            <div>
              {formatDraft(draftYear)}
              {draftYear !== ""
                ? higherLower(draftYear, playerDraftYear)
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
