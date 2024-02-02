import React from "react";
import { Alert } from "react-bootstrap";

const CustomAlert = ({ showAlert, setShowAlert, alertText}) => {
  return (
    <Alert
      variant="danger"
      show={showAlert}
      onClose={() => setShowAlert(false)}
      dismissible
      style={{
        textAlign: "center",
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
      }}
    >
      { alertText }
    </Alert>
  );
};

export default CustomAlert;
