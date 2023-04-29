import React, {useCallback} from "react";
import {useParams} from "react-router-dom";
import BuildChatRoom from "./buildChatRoom";
import ChatBtn from "./chatBtn";
import {useSendMessage} from "../../hooks/chat-hooks/chatHooks";

const ChatRoom = (props) => {
  const params = useParams();
  const sendMessage = useSendMessage({username: params.username})

  const handleSendMessage = useCallback((value) => {
    sendMessage({value})
  }, [sendMessage])

  return (
    <div className={"d-flex flex-column justify-content-between"} style={{height: "100vh"}}>
      <div className={"overflow-y-auto"} style={{maxHeight: "100vh"}}>
        <BuildChatRoom {...props} params={{username: params.username}} withoutBtn={true}/>
      </div>
      <div className={"position-sticky bottom-0 bg-light"}>
        <ChatBtn handleSendMessage={handleSendMessage}/>
      </div>
    </div>
  );

}

export default ChatRoom;
