import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import style from "../../styles/Home.module.css";
import API from "../services/Api.js";
import Slider from "./Slider";

const CallApi = new API();

const defaultValue = {
  name: "",
  thumbnail: "",
};

const Homepage = () => {
  const [category, SetCategory] = useState(defaultValue);
  const [banner, SetBanner] = useState();


  const Callfun = async () => {
    let mycalldata = await CallApi.fetchData("category");
    let banner = await CallApi.fetchData("banner");
    SetCategory(mycalldata);
    banner && SetBanner(banner);

  };

  useEffect(() => {
    Callfun();
  }, []);


  return (
    <>
    <div>
      {banner && <Slider banners={banner}/>}
    </div>
      <div className="container">
        {category[0] && (
          <section className={`${style.img} mb-3`}>
            <div className={`${style.imgWrapper}`}>
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}/${category[0].thumbnail}`}
                alt="hello"
                objectFit="cover"
                layout="fill"
               
              />
            </div>
            <Link passHref href={{
                  pathname:`store/[url]`,
                  query:{url:category[0].url}
                
                }}>
                  <a>
            <div className={style.overlay}></div>

                  </a>
            </Link>
            <div className={style.txt}>
              <h4 className="fw-bold">{category[0].name}</h4>
            </div>
          </section>
        )}

        <section className="mb-3">
          <div className="d-md-flex gap-3">

            {category[1] && (
              <div className={`${style.img} col`}>
                <div className={`${style.imgWrapper2} mb-3`}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_URL}/${category[1].thumbnail}`}
                    alt={category[1].name}
                    layout="fill"
                    objectFit="cover"
                    
                  />
                </div>
                <Link passHref href={{
                  pathname:`store/[url]`,
                  query:{url:category[1].url}
                
                }}>
          <a>
            <div className={style.overlay}></div>

                  </a>
                </Link>
                <div className={style.txt}>
                  <h4 className="fw-bold h5">{category[1].name}</h4>
                </div>
              </div>
            )}

            {category[2] && (
              <div className={`${style.img} col`}>
                <div className={`${style.imgWrapper2} mb-3`}>

                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_URL}/${category[2].thumbnail}`}
                    alt="hello"
                    layout="fill"
                    objectFit="cover"
                   
                  />
                </div>
                <Link passHref href={{
                  pathname:`store/[url]`,
                  query:{url:category[2].url}
                
                }}>
              <a>
            <div className={style.overlay}></div>

                  </a>
                </Link>
                <div className={style.txt}>
                  <h4 className="fw-bold h5">{category[2].name}</h4>
                </div>
              </div>
            )}
          </div>
        </section>

        {category[3] && (
          <section className={`${style.img}`}>
            <div className={`${style.imgWrapper}`}>
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}/${category[3].thumbnail}`}
                alt="hello"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <Link passHref href={{
                  pathname:`store/[url]`,
                  query:{url:category[3].url}
                
                }}>
        <a>
            <div className={style.overlay}></div>

                  </a>
            </Link>
            <div className={style.txt}>
              <h4 className="fw-bold h5">{category[3].name}</h4>
            </div>
          </section>
        )}



<section className="mb-3 mt-3">
          <div className="d-md-flex gap-3">

            {category[4] && (
              <div className={`${style.img} col`}>
                <div className={`${style.imgWrapper2} mb-3`}>
                  
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_URL}/${category[4].thumbnail}`}
                    alt="hello"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <Link passHref href={{
                  pathname:`store/[url]`,
                  query:{url:category[4].url}
                
                }}>
      <a>
            <div className={style.overlay}></div>

                  </a>
                </Link>
                <div className={style.txt}>
                  <h4 className="fw-bold h5">{category[4].name}</h4>
                </div>
              </div>
            )}

            {category[5] && (
              <div className={`${style.img} col`}>
                <div className={`${style.imgWrapper2} mb-3`}>
                 
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_URL}/${category[5].thumbnail}`}
                    alt="hello"
                    layout="fill"
                    objectFit="cover"
                  />
                 

                </div>
                <Link passHref href={{
                  pathname:`store/[url]`,
                  query:{url:category[5].url}
                
                }}>
                <a>
                <div className={style.overlay}></div>
                </a>
                  </Link>
                <div className={style.txt}>
                  <h4 className="fw-bold h5">{category[5].name}</h4>
                </div>
              </div>
            )}
          </div>
        </section>
        
      </div>
    </>
  );
};

export default Homepage;
