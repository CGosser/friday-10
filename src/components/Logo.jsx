import React from "react";
import image from "../assets/images/logo.png";

function Logo(){
  var logoStyles = {
    width: "150px"
  };
  return (
    <a href="#"><img style={logoStyles} src={image}/></a>
  );
}

export default Logo;
