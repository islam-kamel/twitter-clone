import React, {useEffect, useState} from "react";
import {threeDots, verifyBlue} from "../../constants/icons";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {useMessages} from "../../hooks/chat-hooks/chatHooks";
import { useTranslation } from "react-i18next";

const OneMessage = (props) => {
  const navigate = useNavigate()
  const [displayLastMessage, setDisplayLastMessage] = useState("")
  const [isUnread, setIsUnread] = useState(false);
  const [you, setYou] = useState(false);

  const lastMessages = useSelector(state => state.chatV2.latestMessages);
  const {unreadMessages} = useMessages();

  const handleClick = () => {
    if (props?.handleClick) {
      return props?.handleClick({user: props?.user.username, chatId: props?.chatId})
    }
    navigate(props?.user.username, {state: {key: props.user.username}})
  }
  const [t,setT] = useTranslation();

  useEffect(() => {

    const lastMessage = lastMessages[props?.user.username]?.message;

    if (!lastMessage) return;

    if (props?.user?.username === lastMessage?.sender) {
      setYou(false);
      setDisplayLastMessage(lastMessage?.content)

    } else {
      setYou(true)
      setDisplayLastMessage(` ${t('message.You')}: ${lastMessage?.content}`)
    }

    setIsUnread(lastMessage?.seen)

  }, [lastMessages, props?.user.username, unreadMessages])



  return (
    <>
      <div
        role={"button"}
        onClick={handleClick}
        className={"bg-hover"}>
        <div className={"d-flex flex-column p-3"}>

          <div className="d-flex justify-content-between align-items-center w-100">
            <div className="d-flex align-items-center w-75">
              <img
                src={`${props.user.profile?.image ? process.env.REACT_APP_MEDIA_BASE_URL + props.user.profile.image : "https://picsum.photos/200/300?grayscale"}`}
                className="rounded-circle tw-profile-image flex-shrink-0"
                alt="..."
              />
              <div className="ms-3 w-75">
                <div className={"d-flex align-items-center "}>
                  <h6 className={"m-0 fw-bold me-1 text-truncate"}
                      style={{maxWidth: "100%"}}>{props?.user.fullname}</h6>
                  <span
                    className="text-muted fw-light text-truncate"
                    style={{maxWidth: "100%"}}
                  >@{props?.user.username}
                  </span>
                  {props?.user?.is_verify &&  <span className={"text-primary tw-navbar-icon ms-1"}>{verifyBlue}</span>}
                </div>
                {
                  displayLastMessage &&
                  <div className={"d-flex align-items-center"}>
                    {you ? (
                      <span
                        dir={"auto"}
                        className={`fs-6 text-muted fw-light me-1`}
                      >
                        {displayLastMessage}
                      </span>

                    ) : (
                      <span
                        dir={"auto"}
                        className={`fs-6 text-${isUnread ? "muted" : "dark"} fw-${isUnread ? "light" : "bold"} me-1`}
                      >
                        {displayLastMessage}
                      </span>
                    )}

                    {
                      isUnread
                        ? <i className={"bi bi-check2-all text-primary"}></i>
                        : <i className={"bi bi-check2"}></i>
                    }
                  </div>
                }
              </div>
            </div>
            <div className={"icon-button"}>
              <div className="icon-bg i-bg-primary">
                {threeDots}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OneMessage;
