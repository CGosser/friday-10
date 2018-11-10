import React from "react";
import SidebarItems from "./SidebarItems";
import MainContent from "./MainContent";
import BigFeatured from './BigFeatured'
import SmallFeatured from './SmallFeatured'
import ArticlesList from './ArticlesList'

function ContentContainer(){
  var containerStyle = {
    position: "relative",
    marginTop: 100,
    marginLeft: "auto",
    marginRight: "auto",
    width: "45%",
  };
  return (
    <div>
    <BigFeatured/>
    {ArticlesList.map((item, index) =>
      if (index < 4 && index >= 1) {
        <SmallFeatured image={item.image}
        title={item.title}
        author={item.author}
        date={item.date}
        comments={item.comments}
        key={index}
})}

    <SmallFeatured/>
    <div style={containerStyle}>
      <SidebarItems/>
      <MainContent/>
    </div>
    </div>
  );
}

// Ticket.propTypes = {
//   names: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   issue: PropTypes.string
// };

export default ContentContainer;
