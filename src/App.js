import "./styles.css";
import Data from "./Data";
import React, { useState } from "react";
import Box from "./Box";

export default function App() {
  const [squares, setSquares] = useState(Data);

  const toggle = (id) => {
    // console.log("clicked", id);
    setSquares((prevState) => {
      return prevState.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  };

  const Elements = squares.map((square) => (
    <Box toggle={toggle} id={square.id} on={square.on} key={square.id} />
  ));

  return (
    <>
      <div className="App">
        <h1 className="heading-text">Click the Boxes to change color</h1> <br />
        <div className="all-boxes">{Elements}</div>
      </div>
    </>
  );
}
