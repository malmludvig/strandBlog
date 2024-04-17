import React from "react";
import "./LargeCard.css";
import paris from "../../images/paris1.jpg";

const LargeCard = () => {
  const data = {
    title: "Paris in Summer",
    img: paris,
    desc: "ipsum bd ad adab lada ipsum bawd ad adab lada ipsum bd ad adab lada ipsum bawd ad adab lada ipsum bd ad adab lada ipsum bawd ad adab lada ipsum bd ad adab lada ipsum bawd ad adab lada ipsum bd ad adab lada ipsum bawd ad adab lada ipsum bd ad adab lada ipsum bawd ad adab lada ",
  };
  return (
    <div className="largeCard">
      <img src={data.img} alt={data.title} />
      <div className="largeCard_text">
        <h2> {data.title} </h2>
        <span> {data.desc} </span>
        <div className="largeCard_text_button">
          <a href="#adw"> READ MORE</a>
        </div>
      </div>
    </div>
  );
};

export default LargeCard;
