import React from "react";
import "./Header.css";
import LittleCard from "../../components/LittleCard/LittleCard";
import MediumCard from "../../components/MediumCard/MediumCard";
import LargeCard from "../../components/LargeCard/LargeCard";

const Header = () => {
  return (
    <div className="header">
      <LittleCard />
      <MediumCard />
      <LargeCard />
    </div>
  );
};

export default Header;
