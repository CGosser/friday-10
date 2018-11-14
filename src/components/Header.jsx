import React from "react";
import Logo from "./Logo";
import NavBar from "./Nav";
import { Link } from 'react-router-dom';

function Header(){
  var HeaderStyles = {
    display: "flex",
    width: "100%",
    paddingTop: 20,
    paddingLeft: 20
  };
  return (
    <div style={HeaderStyles}>
      <Logo/>
      <NavBar/>
    </div>
  );
}

export default Header;
