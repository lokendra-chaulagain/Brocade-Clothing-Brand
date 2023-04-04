import React from "react";
import FooterSmallDeviceSubscribe from "./FooterSmallDeviceSubscribe";
import FooterRightSide from "./FooterRightSide";
import NewsLetterModal from "../NewsLetterModal";

const Footer = () => {
  return (
    <div className="px-3 px-sm-5  bg-grey">
      <div className=" d-md-flex justify-content-between mt-4 pt-4 ">
        <NewsLetterModal />
        <FooterSmallDeviceSubscribe />
        <div className="my-md-5 d-flex justify-content-center custom-fs-11">&copy;2022 BROCADE</div>
        <FooterRightSide />
      </div>

      <p className="small mt-4 mb-1 text-muted text-center fz-12">
        Designed & Developed By&nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://lokendra-portfolio.vercel.app">
          Lokendra Chaulagain
        </a>{" "}
        No Right Reserved , Free To Use .
      </p>
    </div>
  );
};

export default Footer;
