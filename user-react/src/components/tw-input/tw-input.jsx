import React, {HTMLInputTypeAttribute, InputHTMLAttributes} from "react";
import "./tw-input.style.css";

export default function TwInput(
    props: {
        type?: HTMLInputTypeAttribute,
        id: string,
        labelText: string,
        classes?: string,
        errorMessage?: string,
        errorClasses?: string,
        helpText?: string,
        other?: InputHTMLAttributes,
        children: React.Component | React.Component[]
    }
) {
    return (
        <div className="form-floating fw-light">
            <input
                type={props?.type ?? "text"}
                className={`form-control ${props?.classes ?? ""} fw-light`}
                placeholder={""}
                id={props?.id}
                {...props?.other}
            />
            <label htmlFor={props?.id}>{props?.labelText}</label>
            <div className={`ms-3 invalid-feedback fw-400 ${props?.errorClasses ?? ""}`}>
                {props?.errorMessage}
            </div>
            {props?.children}
        </div>
    );
}
