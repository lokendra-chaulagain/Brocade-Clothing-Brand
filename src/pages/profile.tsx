import Image from "next/image";
import AccountNavTab from "../components/profile/AccountNavTab";
import React from "react";
import { toast } from "react-toastify";
import UpdateProfileInfo from "../components/profile/UpdateProfileInfo";
import products from "../data/products.json";

export default function Profile() {
  const handleLogOut = async () => {
    toast.success("Logout Success");
  };
  const image = products[0].image;

  return (
    <div className="container  paddingTop">
      <div className="row">
        <div className="d-flex align-items-center gap-4">
          <Image
            className="col-12 col-sm-6 rounded-circle"
            objectFit="cover"
            src={image}
            height={100}
            width={100}
            alt="img"
          />

          <div className="col-12 col-sm-6 mt-3 mt-sm-0">
            <h3>Hello , Lokendra Chaulagain.</h3>
            <div className="d-flex gap-4">
              <button
                className="global_black_button py-1 rounded-0"
                onClick={handleLogOut}
                type="button">
                Logout
              </button>

              <UpdateProfileInfo />
            </div>
          </div>
        </div>
      </div>
      <AccountNavTab />
    </div>
  );
}
