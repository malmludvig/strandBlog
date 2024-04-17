import React from "react";
import paris from "../../images/paris1.jpg";
import "./littlecard.css";
const data = {
  title: "Paris in Summer",
  img: paris,
  desc: "ipsum bl blab lada",
};

const LittleCard = () => {
  return (
    <div className="littleCard">
      <img src={data.img} alt={data.title} />
      <div className="littleCard_text">
        <div className="littleCard_text_title">
          <h3>{data.title}</h3>
        </div>
        <div className="littleCard_text_desc">{data.desc} </div>
      </div>
    </div>
  );
};

export default LittleCard;
