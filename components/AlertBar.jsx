import { Alert, Snackbar } from "@mui/material";

const AlertBar = ({ isOpen, handleClose, message }) => {
  return (
    <Snackbar open={isOpen} autoHideDuration={3000} onClose={handleClose}>
      <Alert
        variant="filled"
        severity="error"
        sx={{
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          fontSize: { lg: "12pt" },
          background: "#e80e36",
          border: "1px solid #6e0014",
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AlertBar;
