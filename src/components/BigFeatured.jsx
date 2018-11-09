import React from "react";
import masterArticlesList from "./ArticlesList";

function BigFeatured(){
  var bigFeaturedStyles = {
    backgroundImage: masterArticlesList[0].image,
    width: "100%",
    height: "403px",
    marginBottom: "20px",
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
  };
  return (
    <div style={bigFeaturedStyles}>
      <h2>{masterArticlesList[0].title}</h2>
      <p>{masterArticlesList[0].info}</p>
    </div>
  );
}
export default BigFeatured;
