import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect, useState} from "react";
import {addDoc, collection, getDocs, onSnapshot, or, orderBy, query, serverTimestamp, where} from "firebase/firestore";
import {firebaseDb} from "../../store/API/firebase";
import {fetchAllUsersProfiles, setChatsInfo} from "../../store/chat/chatV2";

export function useChatInfo() {
  const dispatch = useDispatch();
  const {userInfo, usersProfiles, chatsList} = useSelector(state => {
    return {
      userInfo: state.currentUser.userProfile,
      usersProfiles: state.chatV2.usersProfiles,
      chatsList: state.chatV2.chatsList,
    }
  });

  const chatsQuery = useCallback((chatRef) => {
    return query(
      chatRef,
      or(where("users", "array-contains-any", [userInfo.username])));
  }, [userInfo.username])

  const fetchChats = useCallback(async () => {
    const chat = collection(firebaseDb, "chat");
    const q = chatsQuery(chat);
    const chatSnapShot = await getDocs(q);
    return chatSnapShot.docs.map(doc => {
      const item = doc.data()
      const receiver = item.users[0] !== userInfo.username ? 0 : 1
      return {receiver: item.users[receiver], chatId: doc.id}
    });

  }, [chatsQuery, userInfo.username])

  useEffect(() => {
    fetchChats().then(chatList => {
      dispatch(setChatsInfo(chatList))
      const usersList = chatList.map(item => item.receiver)
      dispatch(fetchAllUsersProfiles({usersList: usersList}))
    })
  }, [dispatch, fetchChats])

  return {userInfo, usersProfiles, chatsList};
}

export function useMessages(value) {
  const params = value;
  const [messages, setMessages] = useState([]);

  const chatsList = useSelector(state => {
    return state.chatV2.chatsList
  })

  const getChatId = useCallback(({value, targetList}) => {
    const q = value || params
    return targetList.filter(chat => chat.receiver === q);
  }, [params])

  const getMessages = useCallback(async () => {
    const messagesRef = collection(firebaseDb, "messages");
    const chatId = getChatId({targetList: chatsList})[0]?.chatId
    if (!chatId) {
      return;
    }
    const q = query(
      messagesRef,
      where("chat_id", "==", chatId),
      orderBy("sent_date")
    );
    return onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          setMessages(item => [...item, change.doc.data()])
        }
      });
    })
  }, [chatsList, getChatId])


  return {messages, chatsList, getChatId, getMessages, setMessages}
}

export function useSendMessage(params) {
  const {getChatId} = useMessages(params.username);
  const {userInfo, chatsList} = useSelector(state => {
    return {
      chatsList: state.chatV2.chatsList,
      userInfo: state.currentUser.userProfile
    }
  })

  return useCallback(({value}) => {
    const content = value
    const messagesRef = collection(firebaseDb, "messages")
    const chatId = getChatId({targetList: chatsList})[0].chatId
    addDoc(messagesRef, {
      chat_id: chatId,
      sender: userInfo.username,
      content: content,
      sent_date: serverTimestamp()
    })
  }, [chatsList, getChatId, userInfo.username])
}
