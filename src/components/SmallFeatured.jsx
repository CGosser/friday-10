import React from "react";
import PropTypes from "prop-types";

function SmallFeatured(props){
  const smallFeaturedStyles = {
    backgroundImage: props.imageUrl,
    height: 500,
    width: 500,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
  };
  return (
    <div>
      <div style={smallFeaturedStyles}>
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
