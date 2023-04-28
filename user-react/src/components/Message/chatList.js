import React, {useEffect, useState} from "react";
import OneMessage from "./OneMessage";
import {useChatInfo} from "../../hooks/chat-hooks/chatHooks";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllLatestMessages} from "../../store/chat/chatV2";

export default function ChatList(props) {
  const {usersProfiles, chatsList} = useChatInfo()
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const lastMessages = useSelector(state => state.chatV2.latestMessages);


  useEffect(() => {
    setLoading(true)
    const promiseList = []
    Object.keys(chatsList).forEach(key => {
      promiseList.push(dispatch(fetchAllLatestMessages(chatsList[key])).unwrap())
    })
    Promise.all(promiseList)
      .finally(() => {
        setLoading(false)
      })
  }, [chatsList, dispatch])

  return (
    <div className="overflow-y-auto" style={{maxHeight: "80vh"}}>

      {!loading && lastMessages && Object.values(usersProfiles)?.map((user, index) => {
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
