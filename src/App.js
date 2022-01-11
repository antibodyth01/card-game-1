import React, { Component, useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [color, setColor] = useState(0);
  const [status, setStatus] = useState("");
  const [user, setUser] = useState("");
  const [bot, setBot] = useState("");
  const [statusBut, setStatusBut] = useState(false);

  const handleClick = () => {
    setStatusBut(true);
    if (
      (color == 1 && number == 3) ||
      (color == 3 && number == 4) ||
      (color == 4 && number == 2) ||
      (color == 2 && number == 1)
    ) {
      setStatus("Win");
    } else if (
      (number == 1 && color == 3) ||
      (number == 3 && color == 4) ||
      (number == 4 && color == 2) ||
      (number == 2 && color == 1)
    ) {
      setStatus("Lose");
    } else if (number == color) {
      setStatus("Draw");
    } else {
      setStatus("Draw");
    }
    if (number == 1) {
      setBot("Red");
    } else if (number == 2) {
      setBot("Blue");
    } else if (number == 3) {
      setBot("Green");
    } else if (number == 4) {
      setBot("Brown");
    } else {
      setBot("");
    }
    if (color == 1) {
      setUser("Red");
    } else if (color == 2) {
      setUser("Blue");
    } else if (color == 3) {
      setUser("Green");
    } else if (color == 4) {
      setUser("Brown");
    } else {
      setUser("");
    }
  };
  const handleClickRadio = (selected) => {
    setColor(selected);
    const min = Math.ceil(1);
    const max = Math.floor(4);
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    setNumber(randomNumber);
    setStatusBut(false);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div
        className="card"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              backgroundColor: "red",
              width: 100,
              height: 150,
              margin: 10,
              borderColor: "black",
              borderStyle: "solid",
              borderWidth: 2,
            }}
            onClick={(e) => handleClickRadio(1)}
          ></div>
          <input
            type="radio"
            value="1"
            name="red"
            checked={color === 1}
            onClick={(e) => handleClickRadio(1)}
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              backgroundColor: "blue",
              width: 100,
              height: 150,
              margin: 10,
              borderColor: "black",
              borderStyle: "solid",
              borderWidth: 2,
            }}
            onClick={(e) => handleClickRadio(2)}
          ></div>
          <input
            type="radio"
            value="2"
            name="blue"
            checked={color === 2}
            onClick={(e) => handleClickRadio(2)}
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              backgroundColor: "green",
              width: 100,
              height: 150,
              margin: 10,
              borderColor: "black",
              borderStyle: "solid",
              borderWidth: 2,
            }}
            onClick={(e) => handleClickRadio(3)}
          ></div>
          <input
            type="radio"
            value="3"
            name="green"
            checked={color === 3}
            onClick={(e) => handleClickRadio(3)}
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              backgroundColor: "#4e2300",
              width: 100,
              height: 150,
              margin: 10,
              borderColor: "black",
              borderStyle: "solid",
              borderWidth: 2,
            }}
            onClick={(e) => handleClickRadio(4)}
          ></div>
          <input
            type="radio"
            value="4"
            name="brown"
            checked={color === 4}
            onClick={(e) => handleClickRadio(4)}
          />
        </div>
      </div>
      <div>
        <button onClick={handleClick} disabled={statusBut}>
          Play
        </button>
      </div>
      <p>Player : {user}</p>
      <p>Bot : {bot}</p>
      <p>Status : {status}</p>
    </div>
  );
}

export default App;
