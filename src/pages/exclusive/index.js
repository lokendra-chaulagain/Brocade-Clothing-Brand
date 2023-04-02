import React from "react";
import Exclusivenew from "../../components/exclusive/Exclusivenew";
import Exclusiveporduct from "../../components/exclusive/Exclusiveporduct";
import Giveawaycounter from "../../components/exclusive/Giveawaycounter.jsx";

const exclusive = () => {
  return (
    <div className="paddingTop">
      <Exclusiveporduct />
      <Exclusivenew />
      <div className="mt-5">
        <Giveawaycounter />
      </div>
    </div>
  );
};

export default exclusive;
