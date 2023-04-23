import React, {useCallback} from "react";
import {useNavigate, useParams} from "react-router-dom";
import BuildChatRoom from "./buildChatRoom";
import ChatBtn from "./chatBtn";
import {useSendMessage} from "../../hooks/chat-hooks/chatHooks";

const ChatRoom = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  const sendMessage = useSendMessage({username: params.username})

  const handleSendMessage = useCallback((value) => {
    sendMessage({value})
  }, [sendMessage])

  return (
    <div className={"d-flex flex-column justify-content-between"} style={{height: "100vh"}}>
      <div className={"overflow-y-auto"} style={{maxHeight: "100vh"}}>
        <BuildChatRoom params={{username: params.username}}/>
      </div>
      <ChatBtn handleSendMessage={handleSendMessage}/>
    </div>
  );

}

export default ChatRoom;
