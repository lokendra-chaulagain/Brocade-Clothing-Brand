import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import API from "../services/Api.js";

//calling api
const CallApi = new API();

const defaultValue = {
  thumbnail: "",
  title: "",
  description: "",
};

const BlogCard = () => {
  const [blog, SetBlog] = useState();

  useEffect(() => {
    Callfun();
  }, []);

  const Callfun = async () => {
    let mycalldata = await CallApi.fetchData("blog/9");
    mycalldata && SetBlog(mycalldata);
  };


  return (
    <div className="container">
    

      <div className="row ">       

        {
 
  
        blog && blog.map((myblogdata)=>{

      return    <div key={Math.random()} className="col-12 col-md-4 col-lg-3 col-sm-12 mb-3">
        <Link href={
          {
            pathname:`blog/[url]`,
            query:{url:myblogdata.url}
          }
        }>
            <a className="blogCard">
              <div className="image mb-2">
                <Image className="cardImg w-100 img-fluid" src={`${process.env.NEXT_PUBLIC_API_URL}/${myblogdata.thumbnail}`}
                  height='100%' layout="responsive" width='100%' />
              </div>
              <div className="card-body">
                <h5 className="blogTitle">{myblogdata.title}</h5>
                <p>{
                myblogdata.description.substring(0,40)
                
                }
                </p>
              </div>
            </a>
            </Link>
          </div>




         })
        }
        {/* ))} */}
      </div>
    </div>
  );
};

export default BlogCard;
