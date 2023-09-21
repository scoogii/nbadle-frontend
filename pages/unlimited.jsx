import { Box } from "@mui/joy";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

const Unlimited = () => {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          sx={{
            minHeight: {
              xs: "calc(100vh - 120px)",
              sm: "calc(100vh - 140px - 6vh)",
              md: "calc(100vh - 70px - 4vh)",
              lg: "calc(100vh - 70px - 2vh)",
            },
            marginTop: { lg: "-2vh" },
            marginBottom: { lg: "-2vh" },
          }}
        ></Box>
        <Footer />
      </div>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
      `}</style>
    </>
  );
};

export default Unlimited;
