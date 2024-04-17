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
    </div>
  );
};

export default Navbar;
