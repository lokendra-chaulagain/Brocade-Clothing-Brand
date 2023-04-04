import React from "react";
import NewsLetterModal from "./NewsLetterModal";
import FooterSmallDeviceSubscribe from "./FooterSmallDeviceSubscribe";
import FooterRightSide from "./FooterRightSide";

const Footer = () => {
  return (
    <div
      className="px-3 px-sm-5 footer_print"
      style={{ backgroundColor: "#f8f9fa" }}>
      <div className=" d-md-flex justify-content-between mt-4 pt-4 ">
        <NewsLetterModal />
        <FooterSmallDeviceSubscribe />
        <div className="my-md-5 d-flex justify-content-center custom-fs-11">&copy;2022 BROCADE</div>
        <FooterRightSide />
      </div>
    </div>
  );
};

export default Footer;
