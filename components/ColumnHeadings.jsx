import { Box } from "@mui/joy";
import ColumnHeading from "./ColumnHeading";

const ColumnHeadings = () => {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
      sx={{
        width: { xs: "98vw", md: "77vw", lg: "70vw", xl: "63vw" },
        height: "3vh",
        paddingBottom: "5px",
      }}
    >
      <ColumnHeading heading="Player" />
      <ColumnHeading heading="Team" />
      <ColumnHeading heading="Conf." />
      <ColumnHeading heading="Age" />
      <ColumnHeading heading="Position" />
      <ColumnHeading heading="#" />
      <ColumnHeading heading="Draft#" />
    </Box>
  );
};

export default ColumnHeadings;
