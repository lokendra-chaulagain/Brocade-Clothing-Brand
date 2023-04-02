import React from "react";
import Image from "next/image";
import Link from "next/link";
import style from "../../styles/Home.module.css";
import Slider from "./Slider";
import demo from "../assets/banner-1.webp";

const Homepage = () => {
  return (
    <>
      <div className="container">
        <div className="position-relative">
          <Image
            src={demo}
            alt="hello"
            objectFit="scale-down"
            height={1000}
            width={1000}
          />
        </div>
      </div>
    </>
  );
};

export default Homepage;
