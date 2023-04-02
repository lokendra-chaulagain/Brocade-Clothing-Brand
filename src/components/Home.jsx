import React from "react";
import Image from "next/image";
import Link from "next/link";
import style from "../../styles/Home.module.css";
import Slider from "./Slider";
import demo from "../assets/banner-1.webp";

const Homepage = () => {
  return (
    <>
      <Slider />
      <div className="container">
        <section className={`${style.img} mb-3`}>
          <div className={`${style.imgWrapper}`}>
            <Image
              // src={`${process.env.NEXT_PUBLIC_API_URL}/${category[0].thumbnail}`}
              src={demo}
              alt="hello"
              objectFit="cover"
              layout="fill"
            />
          </div>
          <Link
            passHref
            href={"/"}>
            <a>
              <div className={style.overlay}></div>
            </a>
          </Link>
          <div className={style.txt}>
            <h4 className="fw-bold">Category Name</h4>
          </div>
        </section>

        <section className="mb-3">
          <div className="d-md-flex gap-3">
            <div className={`${style.img} col`}>
              <div className={`${style.imgWrapper2} mb-3`}>
                <Image
                  // src={`${process.env.NEXT_PUBLIC_API_URL}/${category[1].thumbnail}`}
                  src={demo}
                  alt="img"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <Link
                passHref
                href={"/"}>
                <a>
                  <div className={style.overlay}></div>
                </a>
              </Link>
              <div className={style.txt}>
                <h4 className="fw-bold h5">Category NAme</h4>
              </div>
            </div>

            <div className={`${style.img} col`}>
              <div className={`${style.imgWrapper2} mb-3`}>
                <Image
                  // src={`${process.env.NEXT_PUBLIC_API_URL}/${category[2].thumbnail}`}
                  src={demo}
                  alt="hello"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <Link
                passHref
                href={"/"}>
                <a>
                  <div className={style.overlay}></div>
                </a>
              </Link>
              <div className={style.txt}>
                <h4 className="fw-bold h5">Lorem, ipsum dolor.</h4>
              </div>
            </div>
          </div>
        </section>

        <section className={`${style.img}`}>
          <div className={`${style.imgWrapper}`}>
            <Image
              // src={`${process.env.NEXT_PUBLIC_API_URL}/${category[3].thumbnail}`}
              src={demo}
              alt="hello"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <Link
            passHref
            href={"/"}>
            <a>
              <div className={style.overlay}></div>
            </a>
          </Link>
          <div className={style.txt}>
            <h4 className="fw-bold h5">Lorem, ipsum dolor.</h4>
          </div>
        </section>

        <section className="mb-3 mt-3">
          <div className="d-md-flex gap-3">
            <div className={`${style.img} col`}>
              <div className={`${style.imgWrapper2} mb-3`}>
                <Image
                  // src={`${process.env.NEXT_PUBLIC_API_URL}/${category[4].thumbnail}`}
                  src={demo}
                  alt="hello"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <Link
                passHref
                href={"/"}>
                <a>
                  <div className={style.overlay}></div>
                </a>
              </Link>
              <div className={style.txt}>
                <h4 className="fw-bold h5">Lorem, ipsum dolor.</h4>
              </div>
            </div>

            <div className={`${style.img} col`}>
              <div className={`${style.imgWrapper2} mb-3`}>
                <Image
                  // src={`${process.env.NEXT_PUBLIC_API_URL}/${category[5].thumbnail}`}
                  src={demo}
                  alt="hello"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <Link
                passHref
                href={"/"}>
                <a>
                  <div className={style.overlay}></div>
                </a>
              </Link>
              <div className={style.txt}>
                <h4 className="fw-bold h5">Lorem, ipsum dolor.</h4>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Homepage;
