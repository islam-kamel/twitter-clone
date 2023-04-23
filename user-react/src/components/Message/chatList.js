import React from "react";
import OneMessage from "./OneMessage";
import {useChatInfo} from "../../hooks/chat-hooks/chatHooks";

export default function ChatList(props) {
  const {usersProfiles} = useChatInfo()

  return (
    <div className="overflow-y-auto" style={{maxHeight: "80vh"}}>
      {usersProfiles?.map((user, index) => {
        return <OneMessage
          key={index}
          {...props}
          chatId={index}
          user={user}
        />
      })}
    </div>
  );
}
