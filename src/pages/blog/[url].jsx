import React, { useState, useEffect } from "react";
import SingleBlog from "../../components/SingleBlog";
import API from "../../services/Api.js";
import { useRouter } from "next/router";

function BlogId() {
  return (
    <div className="container paddingTop">
      <SingleBlog />
    </div>
  );
}

export default BlogId;
