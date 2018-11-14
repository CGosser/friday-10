import React from "react";
import PropTypes from "prop-types";

function SmallFeatured(props){
  const smallFeaturedImageStyles = {
    backgroundImage: props.imageUrl,
    height: "140px",
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
  };
  const smallFeaturedStyles = {
    fontSize:"1.188rem",
    width: "360px",
  };
  return (
    <div style={smallFeaturedStyles}>
      <div style={smallFeaturedImageStyles}>
      </div>
      <h2>{props.title}</h2>
      <p> by {props.author} / {props.date} / {props.comments}</p>
    </div>
  );
}
SmallFeatured.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
  comments: PropTypes.string
};
export default SmallFeatured;
