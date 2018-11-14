import React from "react";
import { Link } from 'react-router-dom';

function NavBar(){
  var navStyles = {
    display: "flex",
    width: "760px",
    listStyle: "none",
    justifyContent: "space-between",
    marginRight: 100,
  };
  var aStyles = {
    cursor: "crosshair",
    fontWeight: "bolder",
    textTransform: "uppercase"
  };
  return (
    <ul style={navStyles}>
      <li><a className="color-toggle" style={aStyles} href="#/About">articles</a></li>
      <li><a className="color-toggle" style={aStyles} href="#/Shop">photoplasties</a></li>
      <li><a style={aStyles} className="color-toggle"  href="#/Party">pictofacts</a></li>
      <li><a style={aStyles} className="color-toggle" href="#/fnord">personal experiences</a></li>
      <li><a style={aStyles} className="color-toggle" href="#/fnord">forums</a></li>
      <li><a style={aStyles} className="color-toggle" href="#/fnord">more</a></li>
      <style jsx>{`
          .color-toggle{
            text-decoration: none;
            color: black;
          }
          .color-toggle:hover {
            text-decoration: underline;
          }
      `}</style>
    </ul>
  );
}

export default NavBar;
