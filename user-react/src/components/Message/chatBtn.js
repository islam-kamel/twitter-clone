import {emoji, gif, imageIcon} from "../../constants/icons";
import React, {useRef} from "react";

export default function ChatBtn(props) {
  const inputRef = useRef();

  const handleClick = () => {
    if (props?.handleSendMessage) {
      props?.handleSendMessage(inputRef?.current?.value)
    }
  }
  return (
    <div className={"p-2 w-100"}>
      <div className={"d-flex bg-secondary-subtle px-2 rounded-3"}>
        <div className={"icon-button"}>
          <div className={"icon-bg i-bg-primary"}>
            {emoji}
          </div>
        </div>

        <div className={"icon-button"}>
          <div className={"icon-bg i-bg-primary"}>
            {gif}
          </div>
        </div>
        <div className={"icon-button"}>
          <div className={"icon-bg i-bg-primary"}>
            {imageIcon}
          </div>
        </div>
        <input
          ref={inputRef}
          dir={'auto'}
          className={"form-control border-0 fw-light"}
          placeholder={"Start a new  message"}
        />
        <div
          onClick={handleClick}
          className={"icon-button"}
        >
          <div className={"icon-bg i-bg-primary"}>
            <i className={"bi bi-send"}></i>
          </div>
        </div>
      </div>
    </div>
  );
}
