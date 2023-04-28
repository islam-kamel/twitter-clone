import React, {useEffect} from "react";
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
  const userInfo = useSelector(state => state.currentUser.userProfile)
  const params = useParams()
  const username = props?.username || params.username;
  const {messages, getMessages, setMessages, unreadMessages, readMessage} = useMessages(username)

  useEffect(() => {
    let unSubscribe;
    if (params || username) {
      unSubscribe = getMessages()
    }

    return () => {
      try {
        unSubscribe()
      } catch (e) {
        console.log("filled to unSubscribe")
      }
      setMessages([])
    }
  }, [getMessages, params, setMessages, username])

  useEffect(() => {
    if (unreadMessages.length) {
      unreadMessages.forEach(item => {
        if (item?.sender !== userInfo?.username) {
          readMessage(item.id)
        }
      })
    }
  }, [readMessage, unreadMessages, userInfo?.username])

  const getTime = ({seconds, nanoseconds}) => {
    return new Timestamp(seconds, nanoseconds);
  }

  return (
    <div className={"d-flex p-0 justify-content-center  align-items-center w-100"}>
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
              >
                <span className={"text-danger fw-light fs-6"}>{item.chat_id} </span>
              </MessageCreator>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Chat;

