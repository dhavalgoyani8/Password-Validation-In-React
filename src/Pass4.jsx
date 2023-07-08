import React, { useState } from "react";
import "./pass4.css";
import { Button, Input } from "antd";

function Pass4() {
  const [pass, setPass] = useState("");
  const [display, setDisplay] = useState([
    { id: "length", show: false },
    { id: "number", show: false },
    { id: "upper", show: false },
    { id: "special", show: false },
  ]);

  const handleInput = (e) => {
    const passValue = e.target.value;
    setPass(passValue);
    const updateDisplay = [
      { id: "length", show: passValue.length >= 5 },
      { id: "number", show: passValue.match(/[0-9]/) },
      { id: "upper", show: passValue.match(/[A-Z]/) },
      { id: "special", show: passValue.match(/[#?!@$%^&*-]/) },
    ];
    setDisplay(updateDisplay);

    for (let i = 0; i < display.length; i++) {
      const errorLabel = updateDisplay[i];
      const labelElement = document.getElementById(errorLabel.id);

      if (errorLabel.show) {
        labelElement.classList.add("checked");
      } else {
        labelElement.classList.remove("checked");
      }
    }

    for (let i = 0; i < display.length; i++) {
      const errorLabel = updateDisplay[i];
      const labelElement = document.getElementById(errorLabel.id);

      labelElement.style.display = "block";

      if (!errorLabel.show) {
        break;
      }
    }
  };

  return (
    <div className="App">
      <h1>The Password Game</h1>
      <div className="inputField">
        <input className="inputPassword" type="text" value={pass} onChange={(e) => handleInput(e)} />
        <span className="passLength">{pass.length > 0 ? pass.length : ""}</span>
      </div>

      <div className="box">
        <div id="length" className="massage-box">
          <p>Rule 1</p>
          <h2>Your password must be at least 5 characters.</h2>
        </div>

        <div id="number" className="massage-box">
          <p>Rule 2</p>
          <h2>Your password must include a number.</h2>
        </div>

        <div id="upper" className="massage-box">
          <p>Rule 3</p>
          <h2>Your password must include an uppercase letter</h2>
        </div>

        <div id="special" className="massage-box">
          <p>Rule 4</p>
          <h2>Your password must include a special character.</h2>
        </div>
      </div>
    </div>
  );
}

export default Pass4;
