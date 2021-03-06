import React from "react";
import BigFeatured from './BigFeatured';
import SmallFeatured from './SmallFeatured';
import ArticlesList from './ArticlesList';

function ContentContainer(){
  const containerStyle = {
    position: "relative",
    marginTop: 100,
    marginLeft: "auto",
    marginRight: "auto",
    width: "50%",
  };
  const smallFeaturedStyles = {
    display: "flex"
  };
  return (
    <div style={containerStyle}>
      <BigFeatured/>
      <div style={smallFeaturedStyles}>
        {ArticlesList.map((item, index) =>{
          if (index < 4 && index >= 1) {
            return(<SmallFeatured imageUrl={item.imageUrl}
              title={item.title}
              author={item.author}
              date={item.date}
              comments={item.comments}
              key={index}
            />);
          }})}
      </div>
      <div style={containerStyle}>
      </div>
    </div>
  );
}


export default ContentContainer;
