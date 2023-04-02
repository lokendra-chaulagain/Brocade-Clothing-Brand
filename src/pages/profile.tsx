import Image from "next/image";
import AccountNavTab from "../components/AccountNavTab";
import React from "react";
import { toast } from "react-toastify";
import demo from "../assets/banner-1.webp";
import UpdateProfileInfo from "../components/profile/UpdateProfileInfo";

export default function Profile() {
  const handleLogOut = async () => {
    toast.success("Logout Success");
  };

  return (
    <div className="container  paddingTop">
      <div className="row">
        <div className="d-flex align-items-center gap-4">
          <Image
            className="col-12 col-sm-6 rounded-circle"
            objectFit="cover"
            src={demo}
            height={100}
            width={100}
          />

          <div className="col-12 col-sm-6 mt-3 mt-sm-0">
            <h3>Hello , Lokendra Chaulagain.</h3>
           <div className="d-flex gap-4">
           <button
              className="global_black_button py-1 rounded-1"
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
