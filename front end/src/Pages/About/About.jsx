import React from "react";
import { Navbar } from "../../containers";
import LargeCard from "../../components/LargeCard/LargeCard";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <Navbar />
      <div className="about_content">
        <LargeCard />
        <LargeCard />
        <LargeCard />
        <LargeCard />
      </div>
    </div>
  );
};

export default About;
