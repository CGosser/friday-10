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
  author: PropTypes.string,
  date: PropTypes.string,
  comments: PropTypes.string
};
export default SmallFeatured;
