import React from "react";
import Image from "next/image";
import API from "../../src/services/Api";
import { useRouter } from "next/router";
import {useState,useEffect} from 'react';
import moment from 'moment/moment';










// let id="6323ed0d4137d65be0107f43"
const SingleBlog = () => {
  // console.log(props.blog)
  const CallApi=new API();

  let router=useRouter();



   const [singleBlog,SetSingleBlog]=useState();

  useEffect(()=>{
  CallFun();
  },[]);
  
  const CallFun=async()=>{
    let mycalldata=await CallApi.EditData(`singleblog/${router.query.url}`)
    mycalldata && SetSingleBlog(mycalldata);
    // console.log(mycalldata);

  }

  console.log(singleBlog);

  return (
    <div className=" ">
      <div className="row">
        <h1 className="h1 d-flex justify-content-center">{singleBlog && singleBlog.title}</h1>
          
        { singleBlog &&
        <div className="image mb-2">
                <Image className="cardImg w-100 img-fluid" src={`${process.env.NEXT_PUBLIC_API_URL}/${singleBlog.thumbnail}`}
                  height='100%' layout="responsive" width='100%' />
              </div>
            }

        
       {singleBlog &&<p className="d-flex justify-content-center">{moment(singleBlog.createdAt).format('DD-MM-YYYY')}</p>}


        {singleBlog &&
        <p className="pb-3">
          {singleBlog.description}
        </p>
        }
      </div>

    
    </div>
  );
};

export default SingleBlog;
