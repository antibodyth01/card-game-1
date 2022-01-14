import React, { Component, useState } from "react";
import Card from "./components/Card";

function App() {
  const items = ["Red", "Blue", "Green", "Brown"];
  const [selectColor, setSelectColor] = useState("");
  const [isSelected, setisSelected] = useState(0);
  const [status, setStatus] = useState("");
  const [bot, setBot] = useState("");
  const handlePlay = () => {
    const randomNumber = Math.floor(Math.random() * items.length);
    //setBot(randomNumber);
    let color = "";
    if (randomNumber == 0) {
      setBot("Red");
      color = "Red";
    } else if (randomNumber == 1) {
      setBot("Blue");
      color = "Blue";
    } else if (randomNumber == 2) {
      setBot("Green");
      color = "Green";
    } else if (randomNumber == 3) {
      setBot("Brown");
      color = "Brown";
    } else {
      setBot("");
    }
    console.log(items[isSelected]);
    console.log(bot);
    if (
      (items[isSelected] == "Red" && color == "Green") ||
      (items[isSelected] == "Green" && color == "Brown") ||
      (items[isSelected] == "Brown" && color == "Blue") ||
      (items[isSelected] == "Blue" && color == "Red")
    ) {
      setStatus("Win");
    } else if (
      (color == "Red" && items[isSelected] == "Green") ||
      (color == "Green" && items[isSelected] == "Brown") ||
      (color == "Brown" && items[isSelected] == "Blue") ||
      (color == "Blue" && items[isSelected] == "Red")
    ) {
      setStatus("Lose");
    } else if (color == items[isSelected]) {
      setStatus("Draw");
    } else {
      setStatus("Draw");
    }
    // console.log(items[isSelected]);
    // console.log(bot);
    // console.log(status);
  };
  return (
    <div className="App">
      <div className="card-main">
        {items.map((option, index) => (
          <Card
            key={index}
            selected={isSelected === index}
            option={option}
            onChange={() => setisSelected(index)}
          />
        ))}
      </div>
      <button className="btn-play" onClick={handlePlay}>
        Play
      </button>
      <div className="detail-contanier">
        <table className="detail">
          <tr>
            <td className="detail-subject">
              <p>Player</p>
            </td>
            <td className="detail-content"> {items[isSelected]}</td>
          </tr>
          <tr>
            <td className="detail-subject">
              <p>Bot</p>
            </td>
            <td className="detail-content">{bot}</td>
          </tr>
          <tr>
            <td className="detail-subject">
              <p>Status</p>
            </td>
            <td className="detail-content">
              <p className={"status-" + status}>{status}</p>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
