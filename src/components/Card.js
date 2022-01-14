import React, { Component, useState } from "react";
import "./Card.css";

function Card({ option, selected, onChange }) {
  // const [style, setStyle] = useState("true");

  if (option == "Red") {
    option = "#ff0000d1";
  } else if (option == "Blue") {
    option = "#0000ffcf";
  } else if (option == "Green") {
    option = "#00cf00cc";
  } else if (option == "Brown") {
    option = "#795548";
  }
  // const handleClick = (color) => {
  //   setStyle(!style);
  //   console.log(color);
  // };
  return (
    <div className={selected ? "card-click" : "card"}>
      <div
        className="card-container"
        selected={selected}
        style={{ backgroundColor: option }}
        onClick={onChange}
      ></div>
    </div>
  );
}
export default Card;
