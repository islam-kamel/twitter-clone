import React from "react";
import "./tw-input.style.css";

export default function TwInput(props) {
  return (
    <div className="form-floating fw-light">
      {props.textarea
        ? (
          <textarea
            className={`form-control ${props?.classes ?? ""} fw-light`}
            placeholder={""}
            id={props?.id}
            {...props?.other}
          />
        )
        : (
          <input
            type={props?.type ?? "text"}
            className={`form-control ${props?.classes ?? ""} fw-light`}
            placeholder={""}
            id={props?.id}
            {...props?.other}
          />
        )
      }
      <label htmlFor={props?.id}>{props?.labelText}</label>
      <div className={`ms-3 invalid-feedback fw-400 ${props?.errorClasses ?? ""}`}>
        {props?.errorMessage}
      </div>
      {props?.children}
    </div>
  );
}
