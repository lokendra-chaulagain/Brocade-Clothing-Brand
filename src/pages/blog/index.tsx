import React from "react";
import BlogCard from "../../components/BlogCard";
import NewsLetter from "../../components/NewsLetter";

const Blog = () => {
  return (
    <div className="container paddingTop">
      <BlogCard />
      <NewsLetter/>
    </div>
  );
};

export default Blog;
