import React, { useEffect } from "react";
import Cookies from "js-cookie";
const profile = () => {
  return (
    <div
      onClick={() => {
        Cookies.remove("token");
      }}>
      profile
    </div>
  );
};

export default profile;
