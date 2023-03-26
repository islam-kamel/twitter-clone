import * as React from "react";

export default function TwButton(props) {
    console.log(props)
    return (
        <button
            className={`btn btn-${props.btnStyle ?? 'primary'} ${props.classes}`}
        >
            {props.children}
        </button>
    );
}

