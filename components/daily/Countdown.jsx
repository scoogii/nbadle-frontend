import { Box } from "@mui/material";
import Countdown from "react-countdown";

const Timer = () => {
  const tomorrow = new Date();
  tomorrow.setUTCHours(24, 0, 0, 0);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "1vh",
        textAlign: "center",
      }}
    >
      <h1>🎉 Daily Complete! 🎉</h1>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1vw",
        }}
      >
        <h2>Next daily:</h2>
        <h2>
          <Countdown date={tomorrow} />
        </h2>
      </Box>
      <h1></h1>
    </Box>
  );
};

export default Timer;
