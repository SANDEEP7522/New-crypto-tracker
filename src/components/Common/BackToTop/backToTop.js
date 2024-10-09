import React from "react";
import "./backToTop.css";
import NavigationIcon from "@mui/icons-material/Navigation";

function BackToTop() {

  let mybutton = document.getElementById("myBtn");
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      mybutton.style.display = "flex";
    } else {
      mybutton.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className="returnTOTop" id="myBtn" onClick={() => topFunction()}>
      <NavigationIcon />
    </div>
  );
};

export default BackToTop;
