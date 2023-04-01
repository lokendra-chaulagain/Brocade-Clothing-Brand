import Image from "next/image";
import React from "react";
import logo from "../../public/logo-mini.svg"
const Loading = () => {
  return (
    <div className="loadingDiv rounded-circle">
      <Image src={logo} width={100} height={100} alt="" />
    </div>
  );
};

export default Loading;
