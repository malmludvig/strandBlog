import React from "react";
import "./write.css";
import { Navbar } from "../../containers";
import layout1 from "../../images/layout1.png";
import layout2 from "../../images/layout2.png";
import layout3 from "../../images/layout3.png";
import layout4 from "../../images/layout4.png";

const write = () => {
  return (
    <div className="write">
      <Navbar />
      <div className="write_content">
        <h2>Choose a layout</h2>
        <div className="write_content_layouts">
          <div className="write_content_layouts_option">
            <img src={layout1} alt="layout1" />
          </div>
          <div className="write_content_layouts_option">
            <img src={layout2} alt="layout2" />
          </div>
          <div className="write_content_layouts_option">
            <img src={layout3} alt="layout3" />
          </div>
          <div className="write_content_layouts_option">
            <img src={layout4} alt="layout4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default write;
