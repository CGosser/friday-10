import React from "react";
import { Link } from 'react-router-dom';

function NavBar(){
  var navStyles = {
    marginLeft: '20px',
    display: "flex",
    width: "760px",
    listStyle: "none",
    justifyContent: "space-between",
    marginRight: 100,
  };
  var aStyles = {
    cursor: "pointer",
    fontWeight: "bolder",
    textTransform: "uppercase"
  };
  return (
    <ul style={navStyles}>
      <li><a className="color-toggle" style={aStyles} href="#/article">articles</a></li>
      <li><a className="color-toggle" style={aStyles} href="#">photoplasties</a></li>
      <li><a style={aStyles} className="color-toggle" href="#">pictofacts</a></li>
      <li><a style={aStyles} className="color-toggle" href="#">personal experiences</a></li>
      <li><a style={aStyles} className="color-toggle" href="#">forums</a></li>
      <li><a style={aStyles} className="color-toggle" href="#">more</a></li>
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
