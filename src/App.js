import React, { useState } from "react";
import { Button } from "react-bootstrap";
import CustomAlert from "./AlertComponent"; // Importa el componente de la alerta
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [showAlert, setShowAlert] = useState(false);

  const handleButtonClick = () => {
    setShowAlert(true);
  };

  return (
    <div style={{ height: "100vh", position: "relative" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100% - 30px)",
        }}
      >
        <Button onClick={handleButtonClick}>Test Button</Button>
      </div>

      {/* Llamada al componente de la alerta */}
      <CustomAlert showAlert={showAlert} setShowAlert={setShowAlert} alertText={"ok"}/>
    </div>
  );
}

export default App;
