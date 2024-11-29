import React from "react";
import "./button.index.css";
import { Link } from "react-router-dom";

function Button({ outline }) {
  return (
    <div
      className={outline ? "outline-button" : "button"}
      onClick={() => console.log("button click")}
    >
      <Link to="/dasboard">DasBoard</Link>
    </div>
  );
}

export default Button;
