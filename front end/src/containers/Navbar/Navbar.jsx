import { React } from "react";
import "./Navbar.css";
import logo from "../../images/sand_PNG.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_logo">
        <img src={logo} alt="logo" />
        <h4>StrandBlog</h4>
      </div>
      <div className="navbar_links">
        <ul>
          <li>
            <a href="#home">Home</a>{" "}
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
