import React, {useEffect, useState} from "react";
import OneMessage from "./OneMessage";
import {useChatInfo} from "../../hooks/chat-hooks/chatHooks";
import {useDispatch, useSelector} from "react-redux";
import LoadingSpinner from "../Loading/loading-spinner";

export default function ChatList(props) {
  const {usersProfiles, fetchChats} = useChatInfo()
  const dispatch = useDispatch();
  const lastMessages = useSelector(state => state.chatV2.latestMessages);
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    try {
      setLoading(true)
      const getChats = async () => await fetchChats()
      getChats()
    } catch (e) {
      console.log("some Error in fetch chat")
    }

  }, [dispatch, fetchChats])

  return (
    <div className="overflow-y-auto" style={{maxHeight: "80vh"}}>
      {
        Object.values(usersProfiles)?.map((user, index) => {
          return <OneMessage
            key={index}
            {...props}
            chatId={index}
            index={index}
            lastMessage={lastMessages[user.username]?.message}
            user={user}
          />
        })
      }

    </div>
  );
}
