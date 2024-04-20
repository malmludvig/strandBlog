import { React, useState } from "react";
import { Navbar } from "../../containers";
import "./write.css";
import Layout1 from "../../images/layout1.png";
import Layout2 from "../../images/layout2.png";
import Layout3 from "../../images/layout3.png";
import Layout4 from "../../images/layout4.png";

const Write = () => {
  const [layout, setLayout] = useState("");
  const [image, setImage] = useState();
  //   const title1 = document.getElementById("title1").value;

  const showInputTitle1 = () => {
    document.getElementById("displayTitle1").innerHTML =
      document.getElementById("title1").value;
  };
  const showInputParagraf1 = () => {
    document.getElementById("displayText1").innerHTML =
      document.getElementById("paragraf1").value;
  };

  function previewImage(e) {
    setImage(URL.createObjectURL(e.target.files[0]));
  }

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
            <div className="write_content_text_editor">
              <div className="lableAndInput">
                <lable for="title1">Title</lable>
                <input
                  type="text"
                  name="title1"
                  id="title1"
                  onChange={showInputTitle1}
                ></input>{" "}
              </div>
              <div className="lableAndInput">
                <lable for="paragraf1">Text</lable>
                <textarea
                  name="paragraf1"
                  id="paragraf1"
                  onChange={showInputParagraf1}
                ></textarea>
              </div>
              <div className="lableAndInput">
                <lable for="image1">Upload your image</lable>
                <input
                  id="image1"
                  type="file"
                  accept="image/*"
                  onChange={previewImage}
                ></input>
              </div>
            </div>

            <div className="write_content_text_preview">
              <img src={image} alt="your image" />
              <p>
                <span
                  className="write_content_text_preview_title1"
                  id="displayTitle1"
                ></span>
              </p>
              <p>
                <span
                  className="write_content_text_preview_text1"
                  id="displayText1"
                ></span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Write;
