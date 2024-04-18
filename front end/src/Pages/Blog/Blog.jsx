import React from "react";
import { Navbar } from "../../containers";
import MediumCard from "../../components/MediumCard/MediumCard";
import "./blog.css";

const Blog = () => {
  return (
    <div className="blog">
      <Navbar />
      <div className="blog_content">
        <MediumCard />
        <MediumCard />
        <MediumCard />
        <MediumCard />
        <MediumCard />
        <MediumCard />
        <MediumCard />
        <MediumCard />
        <MediumCard />
        <MediumCard />
        <MediumCard />
        <MediumCard />
      </div>
    </div>
  );
};

export default Blog;
