import React, {useCallback} from "react";
import {useParams} from "react-router-dom";
import BuildChatRoom from "./buildChatRoom";
import ChatBtn from "./chatBtn";
import {useSendMessage} from "../../hooks/chat-hooks/chatHooks";
import {useDispatch} from "react-redux";
import {fetchAllLatestMessages} from "../../store/chat/chatV2";

const ChatRoom = (props) => {
  const params = useParams();
  const sendMessage = useSendMessage({username: params.username})
  const dispatch = useDispatch()

  const handleSendMessage = useCallback((value) => {
    sendMessage({value}).then((chatId) => {
      dispatch(fetchAllLatestMessages({chatId, receiver: params.username}))
    })
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
