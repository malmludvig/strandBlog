import React from "react";
import "./Header.css";
import bg from "../../images/Header.jpg";
import LittleCard from "../../components/LittleCard/LittleCard";
import MediumCard from "../../components/MediumCard/MediumCard";
import LargeCard from "../../components/LargeCard/LargeCard";

const Header = () => {
  return (
    <div className="header">
      <div className="header_latest">
        <h3>LATEST POST</h3>
        <LargeCard />
      </div>
      <div className="header_featured">
        <h3>FEATURED POSTS</h3>
        <div className="header_featured_content">
          <MediumCard />
          <MediumCard />
          <MediumCard />
        </div>
      </div>
    </div>
  );
};

export default Header;
