import { Box } from "@mui/joy";
import ColumnHeading from "./ColumnHeading";

const ColumnHeadings = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(8, 1fr)",
        alignItems: "center",
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
      <ColumnHeading heading="Draft Yr" />
    </Box>
  );
};

export default ColumnHeadings;
