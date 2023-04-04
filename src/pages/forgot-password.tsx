import React from "react";
import ResetPassword from "../components/checkout/ResetPassword";
import RegisterSuggest from "../components/account/RegisterSuggest";

export default function ForgotPassword() {
  return (
    <div className="container paddingTop">
      <div className="row row-cols-1 row-cols-md-1">
        <div className="col col-md-6 col-sm-12 pe-3">
          <RegisterSuggest />{" "}
        </div>
      <ResetPassword/>
      </div>
    </div>
  );
}
