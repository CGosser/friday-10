import React from "react";
import PropTypes from "prop-types";

function SmallFeatured(props){
  const smallFeaturedStyles = {
    backgroundImage: props.image,
    height: 500,
    width: 500,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
  };
  return (
    <div>
    <div style={smallFeaturedStyles}>
      <h2>{props.title}</h2>
      <p> by {props.author} / {props.date} / {props.comments}</p>
    </div>
    </div>
  );
}
Shop.propTypes = {
  image: PropTypes.string,
  price: PropTypes.string,
  info: PropTypes.string
};
export default SmallFeatured;
