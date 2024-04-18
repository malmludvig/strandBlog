import React from "react";
import { Navbar } from "../../containers";
import LittleCard from "../../components/LittleCard/LittleCard";

const Blog = () => {
  return (
    <div>
      <Navbar />
      <LittleCard />
      <LittleCard />
      <LittleCard />
    </div>
  );
};

export default Blog;
