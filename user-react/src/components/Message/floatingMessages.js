import {Link} from "react-router-dom";
import "./floatingMessages.style.scss"
import React, {useCallback, useRef, useState} from "react";
import ChatList from "./chatList";
import BuildChatRoom from "./buildChatRoom";
import {useSendMessage} from "../../hooks/chat-hooks/chatHooks";
import ChatBtn from "./chatBtn";
import {useTranslation} from "react-i18next";
export default function FloatingMessages() {
  const messagesRef = useRef(null);
  const [arrow, setArrow] = useState("bi-chevron-up")
  const [chatRoomOrMessages, setChatRoomOrMessages] = useState(false)
  const [receiver, setReceiver] = useState(null)
  const sendMessage = useSendMessage({username: receiver})
  const [t , translate]= useTranslation();
  const toggleMessages = () => {

    if (messagesRef.current.classList.toggle("active")) {
      setArrow("bi-chevron-down")
    } else {
      setArrow("bi-chevron-up")
    }
  }

  const handleMessageClick = useCallback(({user}) => {
    setReceiver(user);
    setChatRoomOrMessages(true)
  }, [])

  const handleBackClick = useCallback(() => {
    setChatRoomOrMessages(false)
  }, [])

  const handleSendMessage = useCallback((value) => {
    sendMessage({value})
  }, [sendMessage])

  return (
    <div className="position-relative w-100" >
      <div ref={messagesRef} className="messages-container bg-light d-flex  flex-column rounded-top-4 shadow" dir={t("dir")}>
        <div className={"d-flex p-3 justify-content-between position-sticky  top-0"}>
          <h1 style={{fontSize: "20px", fontWeight: "700"}}>{t("message.messages")}</h1>
          <div className="d-flex" style={{height: "fit-content"}}>
            <Link className="icon-button text-dark" to="#">
              <div className={"icon-bg i-bg-primary"}>
                <i className="bi bi-envelope"></i>
              </div>
            </Link>
            <Link
              onClick={toggleMessages}
              className="text-dark icon-button" to="#"
            >
              <div className={"icon-bg i-bg-primary"}>
                <i className={`bi ${arrow}`}></i>
              </div>
            </Link>
          </div>
        </div>
        <div className={"messages-details overflow-y-auto"} style={{maxHeight: "100vh"}}>
          {
            chatRoomOrMessages ? (
                <>
                  <BuildChatRoom onBack={handleBackClick} params={{username: receiver}} withoutBtn={true}/>
                  <div className={"position-sticky bottom-0 bg-light"}>
                    <ChatBtn handleSendMessage={handleSendMessage}/>
                  </div>
                </>
              )
              : <ChatList handleClick={handleMessageClick}/>
          }
        </div>
      </div>
    </div>
  )

}
