import React from "react";
import "./mediumcard.css";
import paris from "../../images/paris1.jpg";

const MediumCard = () => {
  const data = {
    title: "Paris in Summer",
    img: paris,
    desc: "ipsum bl blab lada ada awd adawda a adawd awd awd ada wd awd adwa wdawd ad aw dawda adawd awda dawdawda awd adw ada  awdwadfafa ",
  };
  return (
    <div className="mediumCard">
      <img src={data.img} alt={data.title} />
      <div className="mediumCard_text">
        <h2>{data.title}</h2>
        <span>{data.desc}</span>
        <div className="mediumCard_text_button">
          <a href="#awd"> REAM MORE</a>
        </div>
      </div>
    </div>
  );
};

export default MediumCard;
