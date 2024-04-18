import "./App.css";
import { Navbar, Header } from "./containers/index";
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Blog/Blog";
import About from "./Pages/About/About";
import Gallery from "./Pages/Gallery/Gallery";
import Login from "./Pages/Login/Login.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
