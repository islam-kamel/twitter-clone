import { useTranslation } from "react-i18next";
import {emoji, gif, imageIcon} from "../../constants/icons";
import React, {useRef} from "react";

export default function ChatBtn(props) {
  const inputRef = useRef();

  const clearInput = () => inputRef.current.value = '';
  const handleClick = () => {
    if (props?.handleSendMessage) {
      props?.handleSendMessage(inputRef?.current?.value)
      clearInput();
    }
  }

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  }

  const [t,setT] = useTranslation();


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
          onKeyDown={handleEnter}
          dir={"auto"}
          className={"form-control border-0 fw-light"}
          placeholder={t('message.Start_a_new_messag')}
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
