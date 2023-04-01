import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import API from "../../services/Api.js";

const APIcall = new API();

const Store = () => {
  const [cmsDetail, setCms] = useState({});

  useEffect(() => {
    fetchContact();
  }, []);

  let fetchContact = async () => {
    let res = await APIcall.fetchData("cms");
    res && setCms(res);
  };
  // console.log(cmsDetail);

  //destructuring object

  // const {logo,fevion,image3}=cmsDetail;
  // console.log(logo,fevi,image3);

  // console.log(cmsDetaimage1)
  const { address1, address2, address3, phone1, phone2, phone3, email1, email2, email3, image1, image2, image3, image4, email4, address4,phone4} = cmsDetail;

  return (
    <div className="container">
      <div className="row  ">
        <div className="col-12 col-sm-6 col-md-3 ">
          <Link href="#">
            <div className="card-group h-100">
              <div className="card border-0 mb-3">
                <Image src={`${process.env.NEXT_PUBLIC_API_URL}/${image1}`} 
                unoptimized={true}
                
                className="h-100 img-fluid rounded-0 mb-2" objectFit="cover" layout="intrinsic" height="150px" width="100%" />
                <div className="text-center p-0">
                  <h4 className="h5 fw-bold m-0">{email1}</h4>
                  <h6 className="cutom-fs-11 m-0">{phone1}</h6>
                  <h6 className="cutom-fs-11">{address1}</h6>
                </div>
              </div>
            </div>
          </Link>
        </div>

   
        <div className="col-12 col-sm-6 col-md-3 ">
          <Link href="#">
            <div className="card-group h-100">
              <div className="card border-0 mb-3">
                <Image src={`${process.env.NEXT_PUBLIC_API_URL}/${image2}`} 
                unoptimized={true}
                
                className="h-100 img-fluid rounded-0 mb-2" objectFit="cover" layout="intrinsic" height="150px" width="100%" />
                <div className="text-center p-0">
                  <h4 className="h5 fw-bold m-0">{email2}</h4>
                  <h6 className="cutom-fs-11 m-0">{phone2}</h6>
                  <h6 className="cutom-fs-11">{address2}</h6>
                </div>
              </div>
            </div>
          </Link>
        </div>

     

        <div className="col-12 col-sm-6 col-md-3 ">
          <Link href="#">
            <div className="card-group h-100">
              <div className="card border-0 mb-3">
                <Image src={`${process.env.NEXT_PUBLIC_API_URL}/${image3}`}
                unoptimized={true}
                
                className="h-100 img-fluid rounded-0 mb-2" objectFit="cover" layout="intrinsic" height="150px" width="100%" />
                <div className="text-center p-0">
                  <h4 className="h5 fw-bold m-0">{email3}</h4>
                  <h6 className="cutom-fs-11 m-0">{phone3}</h6>
                  <h6 className="cutom-fs-11">{address3}</h6>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-12 col-sm-6 col-md-3 ">
          <Link href="#">
            <div className="card-group h-100">
              <div className="card border-0 mb-3">
                <Image src={`${process.env.NEXT_PUBLIC_API_URL}/${image4}`}
                unoptimized={true}
                className="h-100 img-fluid rounded-0 mb-2" objectFit="cover" layout="intrinsic" height="150px" width="100%" />
                <div className="text-center p-0">
                  <h4 className="h5 fw-bold m-0">{email4}</h4>
                  <h6 className="cutom-fs-11 m-0">{phone4}</h6>
                  <h6 className="cutom-fs-11">{address4}</h6>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Store;
