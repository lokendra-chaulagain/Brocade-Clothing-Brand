import Image from "next/image";
import React from "react";
import demo from "../../assets/banner-5.webp";

const Exclusiveporduct = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card border-0">
              <div className="productImage d-flex flex-column align-items-center">
                <Image
                  className="myImg"
                  src={demo}
                  height="500px"
                  width="190px"
                  objectFit="scale-down"
                />
                <div className="card-body">
                  <h1 className="h3 fw-bold text-uppercase">Yellow Jump suit</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card border-0">
              <div className="productImage d-flex flex-column align-items-center">
                <Image
                  className="myImg"
                  src={demo}
                  height="500px"
                  width="170px"
                  objectFit="scale-down"
                />
                <div className="card-body">
                  <h1 className="h3 fw-bold text-uppercase">Yellow Jump suit</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card border-0">
              <div className="productImage d-flex flex-column align-items-center">
                <Image
                  className="myImg"
                  src={demo}
                  height="500px"
                  width="170px"
                  objectFit="scale-down"
                />
                <div className="card-body">
                  <h1 className="h3 fw-bold text-uppercase">Yellow Jump suit</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exclusiveporduct;
