import React from "react";
import "./button.index.css";

function Button( {text, onclick, outline} ) {
  return(
  <div className={outline ? "outline-button": "button"} onClick={() => onclick()} >{text}</div>
)
}

export default Button;
