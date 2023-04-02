import React from "react";
import Image from "next/image";
import Link from "next/link";
import demo from "../assets/banner-5.webp";

const BlogCard = () => {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-12 col-md-4 col-lg-3 col-sm-12 mb-3">
          <Link href={"/"}>
            <a className="blogCard">
              <div className="image mb-2">
                <Image
                  className="cardImg w-100 img-fluid"
                  src={demo}
                  height="100%"
                  layout="responsive"
                  objectFit="scale-down"
                  width="100%"
                />
              </div>
              <div className="card-body">
                <h5 className="blogTitle">Lorem ipsum dolor sit amet.</h5>
                {/* <p>{myblogdata.description.substring(0, 40)}</p> */}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vitae a magni quaerat! Esse ut eum vel eaque quae suscipit!</p>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
