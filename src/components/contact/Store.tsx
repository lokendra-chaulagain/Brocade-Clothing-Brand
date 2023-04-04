import React from "react";
import Image from "next/image";
import stores from "../../data/stores.json";

export default function Store() {
  return (
    <div className="row ">
      {stores.map((store: any, id: any) => (
        <div
          key={id}
          className="col-12 col-sm-6 col-md-3 ">
          <div className="card-group h-100">
            <div className="card border-0 mb-3">
              <Image
                src={store.image}
                className="h-100 img-fluid rounded-0 mb-2"
                objectFit="scale-down"
                height={400}
                width={400}
                alt="img"
              />
              <div className="text-center p-0">
                <p className="h5 fw-bold m-0">{store.email}</p>
                <p className=" ">{store.phone}</p>
                <a
                  target="_blank"
                  rel=" noreferrer noopener"
                  href="https://lokendra-portfolio.vercel.app"
                  className="text_black">
                  <p>{store.address}</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
