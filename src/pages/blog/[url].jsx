import React,{useState,useEffect} from "react";
import SingleBlog from "../../components/SingleBlog";
import API from "../../services/Api.js";
import { useRouter } from "next/router";


function BlogId() {



//calling service
// const CallApi=new API();

let router=useRouter();


  // const [singeBlog,SetSingleBlog]=useState();

  // useEffect(()=>{
  // CallFun();
  // },[router.query.url]);
  
  // const CallFun=async()=>{
  //   let mycalldata=await CallApi.EditData(`blog/${router.query.url}`)
  //   mycalldata && SetSingleBlog(mycalldata);
  // }
  


  return (
    <div className="container paddingTop">
      {/* {singeBlog&&<SingleBlog blog={singeBlog}/>} */}
      <SingleBlog/>
    </div>
  );
}

export default BlogId;
