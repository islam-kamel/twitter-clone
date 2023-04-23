import React from "react";
import {useSelector} from "react-redux";
import OneMessage from "./OneMessage";

export default function ChatList() {
  const {usersList} = useSelector(state => {
    return {
      usersList: state.chatV2.chatsList,
    }
  })


  return (
    <div className="overflow-y-auto" style={{maxHeight: "80vh"}}>
      {usersList?.map((user, index) => {
        return <OneMessage
          key={index}
          chatId={index}
          user={user}
        />
      })}
    </div>
  );
}
