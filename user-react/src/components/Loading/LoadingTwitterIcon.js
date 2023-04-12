import React from "react";
import {twitter} from "../../constants/icons";
import "./loadingTwitterIcon.style.css"

const LoadingTwitterIcon = (props) => {

  return (
    <div className={`w-100 loading h-100 position-absolute w-100 bg-light z-1 h-100 ${props?.show ? "show" : ""}`}>
      <div className="d-flex h-100 flex-column align-items-center mx-auto justify-content-center">
        <span className="text-primary" style={{width: 40}}>{twitter}</span>
      </div>
    </div>
  );
}

export default LoadingTwitterIcon;
