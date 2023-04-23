import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useMessages} from "../../hooks/chat-hooks/chatHooks";


function Chat(props) {
  const userInfo = useSelector(state => state.currentUser.userProfile)
  const params = useParams()
  const username = props?.username || params.username;
  const {messages, getChatId, chatsList, getMessages, setMessages} = useMessages(username)

  useEffect(() => {
    if (params || username) {
      getMessages()
    }

    return () => {
      setMessages([])
    }
  }, [getMessages, params, setMessages, username])

  const MessageCreator = ({formYou = true, children}) => {
    return (
      <div
        className={`d-flex justify-content-${formYou ? "end" : "start"} rounded mb-2`}
      >
        <div className={`${formYou ? "bg-primary" : "bg-secondary-subtle text-dark"} p-2 rounded text-light fw-light`}
             style={{width: "fit-content"}}>
          {children}
        </div>
      </div>
    );
  }
  return (
    // <div className={"d-flex p-0 justify-content-center overflow-y-auto align-items-center w-100"}
    //      style={{maxHeight: "50vh"}}>

    <div className={"d-flex p-0 justify-content-center  align-items-center w-100"}>
      <div className={"my-2 w-100"}>
        {/*<div className={"card-body"} id={"chatList"} style={{height: "50vh"}}>*/}
        <div className={"card-body"} id={"chatList"}>
          {messages.map((item, index) => {
            if (item?.sender === userInfo.username) {
              return (
                <MessageCreator key={index}>
                  <span>{item.content}</span>
                </MessageCreator>

              );
            }
            return (
              <MessageCreator key={index} formYou={false}>
                <span>{item.content}</span>
              </MessageCreator>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Chat;

