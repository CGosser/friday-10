import React from "react";
import SidebarItems from "./SidebarItems";
import MainContent from "./MainContent";
import BigFeatured from './BigFeatured'
import SmallFeatured from './SmallFeatured'
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
