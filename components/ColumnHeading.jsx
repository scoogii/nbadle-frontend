import { Box } from "@mui/material";

const ColumnHeading = ({ heading }) => {
  const columnStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  };

  const boxStyle = {
    width: "100%",
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
