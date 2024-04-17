import React from "react";
import "./Header.css";
import LittleCard from "../../components/LittleCard/LittleCard";
import MediumCard from "../../components/MediumCard/MediumCard";

const Header = () => {
  return (
    <div className="header">
      <LittleCard />
      <MediumCard />
    </div>
  );
};

export default Header;
