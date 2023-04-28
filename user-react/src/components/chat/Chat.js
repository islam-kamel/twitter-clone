import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useMessages} from "../../hooks/chat-hooks/chatHooks";
import { Timestamp } from "firebase/firestore";
import moment from "moment";


function Chat(props) {
  const userInfo = useSelector(state => state.currentUser.userProfile)
  const params = useParams()
  const username = props?.username || params.username;
  const {messages, getMessages, setMessages} = useMessages(username)

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

  const MessageCreator = ({formYou = true, children, time, message}) => {
    return (
      <div
        className={`d-flex justify-content-${formYou ? "end" : "start"} rounded mb-2`}
      >
        <div className={`d-flex w-75 flex-column align-items-${formYou ? 'end' : 'start'}`}>
          <div className={`card border-0 ${formYou ? "bg-primary" : "bg-secondary-subtle text-dark"} p-2 text-light fw-light`}
               style={{width: "fit-content"}}>
            <span className={'text-break'} dir={'auto'}>
              {message}
            </span>
          </div>
          <span className={'text-muted fw-light'} style={{fontSize: 12}}>{time}</span>
        </div>
      </div>
    );
  }

  const getTime = ({seconds, nanoseconds}) => {
    return new Timestamp(seconds, nanoseconds);
  }
  return (
    // <div className={"d-flex p-0 justify-content-center overflow-y-auto align-items-center w-100"}
    //      style={{maxHeight: "50vh"}}>

    <div className={"d-flex p-0 justify-content-center  align-items-center w-100"}>
      <div className={"my-2 w-100"}>
        {/*<div className={"card-body"} id={"chatList"} style={{height: "50vh"}}>*/}
        <div className={"card-body"} id={"chatList"}>
          {messages.map((item, index) => {
            const x = getTime(item.sent_date)
            if (item?.sender === userInfo.username) {
              return (
                <MessageCreator
                  key={index}
                  message={item.content}
                  time={moment(x.toDate()).fromNow()}
                />
              );
            }
            return (
              <MessageCreator
                key={index}
                formYou={false}
                message={item.content}
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

