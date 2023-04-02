import React from "react";
import Image from "next/image";
import demo from "../assets/banner-3.webp"

const SingleBlog = () => {
  return (
    <div className=" ">
      <div className="row">
        <h1 className="h1 d-flex justify-content-center">Title</h1>

        <div className="image mb-2">
          <Image
            className="cardImg w-100 img-fluid"
            src={demo}
            height="100%"
            layout="responsive"
            width="100%"
          />
        </div>

        <p className="d-flex justify-content-center">2023-12-3</p>

        <p className="pb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos soluta sit vero, necessitatibus ad nesciunt eveniet iste quam accusamus dicta similique culpa architecto ab dolorum minima, vel quasi vitae nemo, facilis dolorem consectetur iusto minus ea. Incidunt, nesciunt quis natus ipsum ullam qui. Hic ex soluta repudiandae, totam nobis at laudantium porro debitis commodi libero facere obcaecati rerum pariatur magnam numquam corrupti dolores aspernatur earum saepe ipsum dolorum
          molestias! Voluptatum, vero dignissimos. Doloremque maxime tenetur quia quasi nisi molestias, placeat repellat iste animi commodi exercitationem minima optio impedit, corrupti explicabo quod ratione, sed nihil. Non laudantium perspiciatis corrupti assumenda sequi.
        </p>
      </div>
    </div>
  );
};

export default SingleBlog;
