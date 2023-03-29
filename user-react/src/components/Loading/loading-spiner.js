import React from "react";
import "../Loading/loading-spiner.scss";

const LoadingSpiner = () => {
  return (
    <>
      <div class="w-100 h-100">
        <div class="load-spiner w-100  h-100">
        <i class="" id='spinner'></i>
        </div>
      </div>
    </>
  );
};

export default LoadingSpiner;
