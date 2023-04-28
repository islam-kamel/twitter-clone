import React, {useEffect, useRef} from "react";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useMessages} from "../../hooks/chat-hooks/chatHooks";
import {Timestamp} from "firebase/firestore";
import moment from "moment";


const MessageCreator = ({formYou = true, children, time, message, seen}) => {
  return (
    <div
      className={`d-flex justify-content-${formYou ? "end" : "start"} rounded mb-2`}
    >
      {/*{children}*/}
      <div className={`d-flex w-75 flex-column align-items-${formYou ? "end" : "start"}`}>
        <div
          className={`card border-0 ${formYou ? "bg-primary" : "bg-secondary-subtle text-dark"} p-2 text-light fw-light`}
          style={{width: "fit-content"}}>
            <span className={"text-break"} dir={"auto"}>
              {message}
            </span>
        </div>
        <div className={"d-flex justify-content-center align-items-center text-muted fw-light"}>
          <span className={"me-1"} style={{fontSize: 12}}>{time}</span>
          {
            seen
              ? <i className={"bi bi-check2-all text-primary"}></i>
              : <i className={"bi bi-check2"}></i>
          }
        </div>
      </div>
    </div>
  );
}

function Chat(props) {
  const messagesContainerRef = useRef(null);

  const userInfo = useSelector(state => state.currentUser.userProfile)

  const params = useParams()

  const username = props?.username || params.username;

  const {messages, getMessages, unreadMessages, readMessage} = useMessages(username)

  useEffect(() => {
    if (Object.entries(messages).length) {
      messagesContainerRef.current.scrollIntoView({block: "end", behavior: "smooth"})
    }
  }, [messages])

  useEffect(() => {
    getMessages()
  }, [getMessages])

  useEffect(() => {
    if (unreadMessages.length) {
      readMessage({username: userInfo?.username})
    }
  }, [readMessage, unreadMessages, userInfo?.username])

  const getTime = ({seconds, nanoseconds}) => {
    return new Timestamp(seconds, nanoseconds);
  }

  return (
    <div ref={messagesContainerRef} className={"d-flex p-0 justify-content-center  align-items-center w-100"}>
      <div className={"my-2 w-100"}>
        <div className={"card-body"} id={"chatList"}>
          {Object.values(messages).map((item, index) => {
            const x = getTime(item.sent_date)
            const formYou = item?.sender === userInfo.username || false
            return (
              <MessageCreator
                key={index}
                formYou={formYou}
                message={item.content}
                seen={item.seen}
                time={moment(x.toDate()).fromNow()}
              />
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Chat;

