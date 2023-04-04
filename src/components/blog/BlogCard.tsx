import React from "react";
import Image from "next/image";
import blogs from "../../data/blogs.json";

const BlogCard = () => {
  return (
    <div className="">
      <p className="text-center my-4 h3 fw-bold">Read Our Blogs</p>
      <div className="row">
        {blogs &&
          blogs.map((blog: any, id: any) => (
            <div
              key={id}
              className="col-12 col-md-4 col-lg-3 col-sm-12 mb-5 ">
              <Image
                src={blog.image}
                objectFit="cover"
                height={1000}
                width={1000}
                alt="img"
              />
              <a
                href={`blog/${blog.slug}`}
                className="card-body cursor-pointer">
                <h5 className="blogTitle">{blog.title}</h5>
                <p className="">{blog.description.substring(0, 150)} . . .</p>
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BlogCard;
