import * as React from "react";

/** @param {function({btnStyle: string, classes: string, object}): React.ReactElement} */
/**  @return {React.ReactElement} */
export default function TwButton({btnStyle, classes, ...props}) {
    return (
        <button
            className={`btn btn-${btnStyle ?? 'primary'} ${classes ?? ''}`}
        >
            {props.children}
        </button>
    );
}
