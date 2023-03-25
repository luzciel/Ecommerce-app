import React from "react";
import loading from "../assets/loading.gif";

const Loading = () => {
  return (
    <div className="container-loading">
      <img src={loading} className="loading" alt="loading" />
    </div>
  );
};

export default Loading;
