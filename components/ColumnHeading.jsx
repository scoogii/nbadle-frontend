import { Box } from "@mui/material";

const ColumnHeading = ({ heading }) => {
  const columnStyle = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  };

  const boxStyle = {
    width: { xs: "14vw", md: "12vw", lg: "10vw" },
    height: "100%",
    fontSize: { xs: "2.5vw", sm: "2vw", md: "1.5vw", lg: "1.3vw" },
  };

  return (
    <Box style={columnStyle} sx={boxStyle}>
      {heading}
    </Box>
  );
};

export default ColumnHeading;
