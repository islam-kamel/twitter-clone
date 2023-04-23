import React, {useCallback, useRef} from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import Header from "../header/header";
import {useSelector} from "react-redux";
import {addDoc, collection, serverTimestamp} from "firebase/firestore";
import {firebaseDb} from "../../store/API/firebase";
import {emoji, gif, imageIcon} from "../../constants/icons";
import Chat from "../chat/Chat";
import {useMessages} from "../../hooks/chat-hooks/chatHooks";

const ChatRoom = () => {
  const navigate = useNavigate();
  const params = useParams()
  const {getChatId} = useMessages(params.username);
  const location = useLocation()
  const inputRef = useRef(null);

  const receiver = useSelector(state => {
    if (location.state?.key) {
      return state.chatV2.usersProfiles[location.state?.key]
    }
    return state.chatV2.usersProfiles.filter(user => user.username === params.username)[0]
  })

  const {chatInfo, userInfo, chatsList} = useSelector(state => {
    return {
      chatInfo: state.chatInfo,
      chatsList: state.chatV2.chatsList,
      userInfo: state.currentUser.userProfile
    }
  })

  const sentMessage = useCallback((value) => {
    const content = inputRef.current.value
    const messagesRef = collection(firebaseDb, "messages")
    const chatId = getChatId({targetList: chatsList})[0].chatId
    addDoc(messagesRef, {
      chat_id: chatId,
      sender: userInfo.username,
      content: content,
      sent_date: serverTimestamp()
    })
  }, [chatsList, getChatId, userInfo.username]);

  return (
    <div className={"w-100 "}>
      <Header noBorder>
        <Header.Top>
          <div className="d-flex px-2 justify-content-between w-100">
            <div className={""}>
              <i onClick={() => {
                navigate("/Message")
              }}
                 role={"button"}
                 className="bi bi-arrow-left cursor-pointer bi-fw-bolder fs-4"
              ></i>
            </div>
            <div className="icon-button">
              <div className="icon-bg i-bg-primary">
                <i className="bi bi-exclamation-circle "></i>
              </div>
            </div>
          </div>
        </Header.Top>
      </Header>

      <div className="bg-hover py-3 d-flex justify-content-center align-items-center flex-column">
        <img
          className={"tw-profile-image rounded-circle"}
          src={`${receiver?.profile?.image ? process.env.REACT_APP_MEDIA_BASE_URL + receiver?.profile.image : "https://picsum.photos/200/300?grayscale"}`}
          alt="avatar"
        />
        <div className={"d-flex flex-column align-items-center justify-content-center mt-2"}>
          <h6 className="m-0"> {receiver?.fullname}</h6>
          <span className={"text-muted"}>@{receiver?.username}</span>
        </div>
        <p className={"text-center fs-6 fw-light text-muted"}>
          {receiver?.profile?.bio}
        </p>
        <div className={"d-flex align-items-center justify-content-center"}>
          <span
            style={{fontSize: 12}}
            className={"bg-secondary-subtle px-2 rounded-pill  fw-light me-3"}
          >
            Followers: {receiver?.followers?.length}
          </span>
          <span
            style={{fontSize: 12}}
            className={"bg-secondary-subtle px-2 rounded-pill  fw-light "}
          >
            Following: {receiver?.following?.length}
          </span>
        </div>
      </div>

      <div className={"p-3 h-100 position-relative"}>
        <Chat username={"islam-kamel"}/>

        <div className={"p-2 w-100"}>
          <div className={"d-flex bg-secondary-subtle px-2 rounded-3"}>
            <div className={"icon-button"}>
              <div className={"icon-bg i-bg-primary"}>
                {emoji}
              </div>
            </div>

            <div className={"icon-button"}>
              <div className={"icon-bg i-bg-primary"}>
                {gif}
              </div>
            </div>
            <div className={"icon-button"}>
              <div className={"icon-bg i-bg-primary"}>
                {imageIcon}
              </div>
            </div>
            <input ref={inputRef} className={"form-control border-0 fw-light"}
                   placeholder={"Start a new  message"}></input>
            <div
              onClick={sentMessage}
              className={"icon-button"}>
              <div className={"icon-bg i-bg-primary"}>
                <i className={"bi bi-send"}></i>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ChatRoom;
