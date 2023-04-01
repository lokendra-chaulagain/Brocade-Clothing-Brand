// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import img1 from "../../public/1.jpg";
// import img5 from "../../public/5.jpg";
// import API from "../services/Api.js";

// const CallApi=new API();

// const defaultValue={
//   name:"",
//   thumbnail:""
// }



// const HomeContent = () => {

//   const [category,SetCategory] = useState(defaultValue);

 

//   const Callfun= async()=>{
//     let mycalldata= await CallApi.fetchData("category/5");
//      SetCategory(mycalldata);
//   }

//   useEffect(()=>{
//     Callfun();
//    },[]);

//    console.log(category);





 

//   return (

//     <div className="container">
  

//   {category[0]&&
//   <div className="row">
//         <div className="hoverContainer">
//           <Image src={`${process.env.NEXT_PUBLIC_API_URL}/${category[0].thumbnail}`} className="image" layout="fill"/>
//           <div className="middle">
//             <div className="text">{category[0].name}</div>
//           </div>
//         </div>
//         <h4 className="h4 mb-3 mt-2 d-flex justify-content-center">{category[0].name}</h4>
//       </div>
// }
//       <div className="row mt-2  ">
//         <div className="col-12 hoverContainer  col-sm-12 mb-2 mb-md-0  col-md-6">
//           <Image
//             src={`${process.env.NEXT_PUBLIC_API_URL}/${category[1].thumbnail}`}
//             className="image"
//             layout="responsive"
//             objectFit="cover"
//           />
//           <div className="middle">
//             <div className="text">{category[1].name}</div>
//           </div>

//           <h4 className="h4 mb-3 mt-2 d-flex justify-content-center">
//           {category[1].name}
//           </h4>
//         </div>
//         <div className="col-12 hoverContainer col-sm-12 col-md-6">
//           <Image
//             src={`${process.env.NEXT_PUBLIC_API_URL}/${category[2].thumbnail}`}
//             className="image"
//             layout="responsive"
//             objectFit="cover"
//           />
//           <div className="middle">
//             <div className="text">{category[2].name}</div>
//           </div>

//           <h4 className="h4 mb-3 mt-2 d-flex justify-content-center">{category[2].name}</h4>
//         </div>
//       </div>

//       <div className="row mt-2">
//         <div className="col-12 hoverContainer col-sm-12 mb-2 mb-md-0 col-md-6">
//           <Image
//             src={`${process.env.NEXT_PUBLIC_API_URL}/${category[3].thumbnail}`}
//             className="image"
//             layout="responsive"
//             objectFit="cover"
//           />
//           <div className="middle">
//             <div className="text">{category[3].name}</div>
//           </div>

//           <h4 className="h4 mb-3 mt-2 d-flex justify-content-center">{category[3].name}</h4>
//         </div>

//         <div className="col-12 hoverContainer col-sm-12 col-md-6">
//           <Image
//             src={`${process.env.NEXT_PUBLIC_API_URL}/${category[4].thumbnail}`}
//             className="image"
//             layout="responsive"
//             objectFit="cover"
//           />
//           <div className="middle">
//             <div className="text">{category[4].name}</div>
//           </div>

//           <h4 className="h4 mb-3 mt-2 d-flex justify-content-center">
//           {category[4].name}
//           </h4>
//         </div>
//       </div>

//       <div className="row">
//         <div className="hoverContainer">
//           <Image src={`${process.env.NEXT_PUBLIC_API_URL}/${category[0].thumbnail}`}
//           className="image" />
//           <div className="middle">
//             <div className="text">{category[0].name}</div>
//           </div>
//         </div>
//         <h4 className="h4 mb-3 mt-2 d-flex justify-content-center">{category[0].name}</h4>
//       </div>
 

//       <div className="row">
//         <div className="hoverContainer">
//           <Image src={`${process.env.NEXT_PUBLIC_API_URL}/${category[0].thumbnail}`}
//           className="image" />
//           <div className="middle">
//             <div className="text">{category[2].name}</div>
//           </div>
//         </div>
//         <h4 className="h4 mb-3 mt-2 d-flex justify-content-center">{category[0].name}</h4>
//       </div>



      
//     </div>
//   );
// };

// export default HomeContent;