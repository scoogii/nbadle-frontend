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
        height: { xs: 60, sm: 70, lg: 85 },
        marginTop: "3vh",
      }}
    >
      By Bud Truong & Christian Nguyen
    </Box>
  );
};

export default Footer;
