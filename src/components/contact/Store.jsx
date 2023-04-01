import React from "react";
import Image from "next/image";
import Link from "next/link";

const Store = () => {
  return (
    <div className="container">
      <div className="row  ">
        <div className="col-12 col-sm-6 col-md-3 ">
          <Link href="#">
            <div className="card-group h-100">
              <div className="card border-0 mb-3">
                <Image
                  // src={`${process.env.NEXT_PUBLIC_API_URL}/${image1}`}
                  unoptimized={true}
                  className="h-100 img-fluid rounded-0 mb-2"
                  objectFit="cover"
                  layout="intrinsic"
                  height="150px"
                  width="100%"
                />
                <div className="text-center p-0">
                  <h4 className="h5 fw-bold m-0">lokendrachaulagain@gmail.com</h4>
                  <h6 className="cutom-fs-11 m-0">74647646</h6>
                  <h6 className="cutom-fs-11">Kathmandu Nepal</h6>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-12 col-sm-6 col-md-3 ">
          <Link href="#">
            <div className="card-group h-100">
              <div className="card border-0 mb-3">
                <Image
                  // src={`${process.env.NEXT_PUBLIC_API_URL}/${image2}`}
                  unoptimized={true}
                  className="h-100 img-fluid rounded-0 mb-2"
                  objectFit="cover"
                  layout="intrinsic"
                  height="150px"
                  width="100%"
                />
                <div className="text-center p-0">
                  <h4 className="h5 fw-bold m-0">lokendrachaulagain@gmail.com</h4>
                  <h6 className="cutom-fs-11 m-0">74647646</h6>
                  <h6 className="cutom-fs-11">Kathmandu Nepal</h6>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-12 col-sm-6 col-md-3 ">
          <Link href="#">
            <div className="card-group h-100">
              <div className="card border-0 mb-3">
                <Image
                  // src={`${process.env.NEXT_PUBLIC_API_URL}/${image3}`}
                  unoptimized={true}
                  className="h-100 img-fluid rounded-0 mb-2"
                  objectFit="cover"
                  layout="intrinsic"
                  height="150px"
                  width="100%"
                />
                <div className="text-center p-0">
                  <h4 className="h5 fw-bold m-0">lokendrachaulagain@gmail.com</h4>
                  <h6 className="cutom-fs-11 m-0">74647646</h6>
                  <h6 className="cutom-fs-11">Kathmandu Nepal</h6>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-12 col-sm-6 col-md-3 ">
          <Link href="#">
            <div className="card-group h-100">
              <div className="card border-0 mb-3">
                <Image
                  // src={`${process.env.NEXT_PUBLIC_API_URL}/${image4}`}
                  unoptimized={true}
                  className="h-100 img-fluid rounded-0 mb-2"
                  objectFit="cover"
                  layout="intrinsic"
                  height="150px"
                  width="100%"
                />
                <div className="text-center p-0">
                  <h4 className="h5 fw-bold m-0">lokendrachaulagain@gmail.com</h4>
                  <h6 className="cutom-fs-11 m-0">74647646</h6>
                  <h6 className="cutom-fs-11">Kathmandu Nepal</h6>
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
