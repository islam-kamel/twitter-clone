import React, {useEffect} from "react";
import OneMessage from "./OneMessage";
import {useChatInfo} from "../../hooks/chat-hooks/chatHooks";
import {useDispatch, useSelector} from "react-redux";

export default function ChatList(props) {
  const {usersProfiles, fetchChats} = useChatInfo()
  const dispatch = useDispatch();
  const lastMessages = useSelector(state => state.chatV2.latestMessages);


  useEffect(() => {
    try {
      const getChats = async () => await fetchChats()
      getChats()

    } catch (e) {
      console.log("some Error in fetch chat")
    }

  }, [dispatch, fetchChats])

  return (
    <div className="overflow-y-auto" style={{maxHeight: "80vh"}}>

      {Object.values(usersProfiles)?.map((user, index) => {
        return <OneMessage
          key={index}
          {...props}
          chatId={index}
          index={index}
          lastMessage={lastMessages[user.username]?.message}
          user={user}
        />
      })}
    </div>
  );
}
