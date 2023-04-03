import React from "react";
import Image from "next/image";
import blogs from "../data/blogs.json";

const SingleBlog = () => {
  const blog = blogs[1];
  return (
    <div className="">
      <div className="row">
        <p className="h1 text-center">{blog.title}</p>
        <small className="d-flex justify-content-end px-5 ">8 days ago</small>

        <div className="image my-3">
          <Image
            className="cardImg w-100 img-fluid"
            src={blog.image}
            height={400}
            width={1000}
            layout="responsive"
            objectFit="cover"
          />
        </div>

        <p className="d-flex justify-content-center">2023-12-3</p>

        <p className="pb-3 px-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos soluta sit vero, necessitatibus ad nesciunt eveniet iste quam accusamus dicta similique culpa architecto ab dolorum minima, vel quasi vitae nemo, facilis dolorem consectetur iusto minus ea. Incidunt, nesciunt quis natus ipsum ullam qui. Hic ex soluta repudiandae, totam nobis at laudantium porro debitis commodi libero facere obcaecati rerum pariatur magnam numquam corrupti dolores aspernatur earum saepe ipsum dolorum
          molestias! Voluptatum, vero dignissimos. Doloremque maxime tenetur quia quasi nisi molestias, placeat repellat iste animi commodi exercitationem minima optio impedit, corrupti explicabo quod ratione, sed nihil. Non laudantium perspiciatis corrupti assumenda sequi.
        </p>
      </div>
    </div>
  );
};

export default SingleBlog;
