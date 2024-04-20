import { React, useState } from "react";
import { Navbar } from "../../containers";
import "./write.css";
import Layout1 from "../../images/layout1.png";
import Layout2 from "../../images/layout2.png";
import Layout3 from "../../images/layout3.png";
import Layout4 from "../../images/layout4.png";

const Write = () => {
  const [layout, setLayout] = useState("");

  return (
    <div className="write">
      <Navbar />
      <div className="write_content">
        <h2>Choose a layout</h2>
        <div className="write_content_layouts">
          <img
            style={layout == 1 ? { border: "3px solid blue" } : null}
            src={Layout1}
            alt="layout1"
            onClick={() => setLayout(1)}
          />
          <img
            style={layout == 2 ? { border: "3px solid blue" } : null}
            src={Layout2}
            alt="layout2"
            onClick={() => setLayout(2)}
          />
          <img
            style={layout == 3 ? { border: "3px solid blue" } : null}
            src={Layout3}
            alt="layout3"
            onClick={() => setLayout(3)}
          />
          <img
            style={layout == 4 ? { border: "3px solid blue" } : null}
            src={Layout4}
            alt="layout4"
            onClick={() => setLayout(4)}
          />
        </div>
        {layout && (
          <div className="write_content_text">
            <div className="write_content_text_editor"> </div>
            <div className="write_content_text_preview"> </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Write;
