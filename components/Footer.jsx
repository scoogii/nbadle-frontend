import { Link } from "@mui/joy";
import { Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#ed174b",
        color: "white",
        width: "100%",
        position: "relative",
        bottom: "0",
        boxShadow: "0px -5px #8f102f",
      }}
      sx={{
        height: { xs: 60, sm: 70, md: 70, lg: 75 },
        marginTop: { xs: "0vh", sm: "3vh" },
      }}
    >
      <span style={{ textAlign: "center" }}>
        By&nbsp;
        <Link
          underline="none"
          href="https://www.linkedin.com/in/bud-truong-3a742a217/"
          target="_blank"
          style={{ color: "white" }}
        >
          Bud Truong
        </Link>
        &nbsp;and&nbsp;
        <Link
          underline="none"
          href="https://www.linkedin.com/in/christianngu/"
          target="_blank"
          style={{ color: "white" }}
        >
          Christian Nguyen
        </Link>
      </span>
    </Box>
  );
};

export default Footer;
