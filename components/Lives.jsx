import { Box } from "@mui/joy";

const Lives = ({ guesses }) => {
  const lives = [];
  for (let i = 0; i < 8 - guesses.length; i++) {
    lives.push(
      <Box
        key={i}
        component="img"
        src="/obrien.jpeg"
        sx={{
          maxWidth: { xs: "25px", sm: "28px", md: "30px", lg: "35px" },
          maxHeight: { xs: "25px", sm: "28px", md: "30px", lg: "35px" },
        }}
      />,
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        marginTop: { xs: "4vh", sm: "3vh", md: "3vh", lg: "2.5vh" },
        gap: { xs: "0.2vw", sm: "0.2vw", md: "0.3vw", lg: "0.5vw" },
      }}
    >
      {lives}
    </Box>
  );
};

export default Lives;
