import { React } from "react";
import { Link } from "react-router-dom";
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
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="link" to="/gallery">
              Gallery
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
