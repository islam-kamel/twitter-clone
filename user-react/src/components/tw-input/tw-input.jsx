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
        other?: InputHTMLAttributes
    }
) {
    return (
        <div className="form-floating">
            <input
                type={props?.type ?? 'text'}
                className={`form-control ${props?.classes ?? ''}`}
                placeholder={''}
                id={props?.id}
                {...props?.other}
            />
            <label htmlFor={props?.id}>{props?.labelText}</label>
            <div className={`ms-3 invalid-feedback fw-400 ${props?.errorClasses ?? ''}`}>
                {props?.errorMessage}
            </div>
        </div>
    );
}
