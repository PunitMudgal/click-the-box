import React from "react";
import "./styles.css";

export default function Box(props) {
  const styles = {
    backgroundColor: props.on ? "black" : "#F9F9F9"
  };
  return (
    <div
      style={styles}
      onClick={() => props.toggle(props.id)}
      className="boxes"
    ></div>
  );
}
