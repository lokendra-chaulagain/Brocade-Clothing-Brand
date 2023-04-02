import React from "react";
import Image from "next/image";
import store1 from "../../assets/store/store-1.jpg";
import store2 from "../../assets/store/store-2.jpg";
import store3 from "../../assets/store/store-3.jpg";
import store4 from "../../assets/store/store-4.jpg";

export default function Store() {
  const stores = [
    {
      id: "1",
      email: "brocade.kathmandu@gmail.com",
      phone: "9864776545473",
      address: "Kathmandu Nepal",
      image: store1,
    },

    {
      id: "2",
      email: "brocade.chitwan@gmail.com",
      phone: "9864776545473",
      address: "Chitwan Nepal",
      image: store2,
    },

    {
      id: "3",
      email: "brocade.pokhara@gmail.com",
      phone: "9864776545473",
      address: "Pokhara Nepal",
      image: store3,
    },

    {
      id: "4",
      email: "brocade.nepaljung@gmail.com",
      phone: "9864776545473",
      address: "Nepaljung Nepal",
      image: store4,
    },
  ];

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
              />
              <div className="text-center p-0">
                <p className="h5 fw-bold m-0">{store.email}</p>
                <p className=" ">{store.phone}</p>
                <a
                  target="_blank"
                  rel="noopener"
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
