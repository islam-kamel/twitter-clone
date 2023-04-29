import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect, useState} from "react";
import {
  addDoc,
  collection,
  doc,
  limit,
  onSnapshot,
  orderBy,
  query,
  Timestamp,
  updateDoc,
  where
} from "firebase/firestore";
import {firebaseDb} from "../../store/API/firebase";
import {
  addNewLastMessage,
  fetchAllUsersProfiles,
  setChatsInfo,
} from "../../store/chat/chatV2";
import {debounce} from "../../utility/utils";


class MessageModel {
  constructor({...message}) {
    this.content = message.content || null;
    this.sender = message.sender || null;
    this.sent_date = message.sent_date || Timestamp.fromDate(new Date());
    this.seen = message.seen || null;
    this.chatId = message.chatId;
    this.extraKwargs = message.extra || {};
  }

  getObj() {
    return {
      sender: this.sender,
      content: this.content,
      sent_date: Timestamp.fromDate(new Date()),
      seen: false,
      chat_id: this.chatId,
      ...this.extraKwargs
    };
  }
}


export function useMessages(value) {
  const [messages, setMessages] = useState({});
  const [currentChatId, setCurrentChatId] = useState();
  const [unreadMessages, setUnreadMessages] = useState([]);

  const unSubscribe = useCallback((callback) => callback, []);
  const dispatch = useDispatch();
  const chatsObj = useSelector(state => state.chatV2.chatsObj);
  const params = value;

  const getChatId = useCallback(({value, targetList}) => {
    const q = value || params
    return targetList.filter(chat => chat.receiver === q);
  }, [params])

  const updateMessages = useCallback(message => {
    if (message?.id) {
      setMessages((messagesObj) => {
        messagesObj[message.id] = message;

        return {...messagesObj};
      });
    }
  }, [])

  const getMessagesRef = () => collection(firebaseDb, "messages");

  const trackUpdates = useCallback((q) => {
    return onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "modified") {
          const message = {...change.doc.data(), id: change.doc.id};
          updateMessages(message);

          // you can improve this
          const receiver = chatsObj[message.chat_id].receiver;
          const messageDate = change.doc.data()?.sent_date.toJSON()
          const messageObj = {user: receiver, id:change.doc.id , message: {...change.doc.data(), sent_date: messageDate}}
          dispatch(addNewLastMessage(messageObj))
          // end here
        }

        if (change.type === "added") {
          const message = {...change.doc.data(), id: change.doc.id};

          if (!message?.seen) {
            setUnreadMessages(item => [...item, message])
          }
          updateMessages(message);
        }
      });
    })
  }, [chatsObj, dispatch, updateMessages]);

  const getMessages = useCallback((chat_id) => {
    const messagesRef = getMessagesRef();
    const chatId = chat_id || getChatId({targetList: Object.values(chatsObj)})[0]?.chatId;
    if (!chatId) return;

    setCurrentChatId(chatId)

    const q = query(
      messagesRef,
      where("chat_id", "==", chatId),
      orderBy("sent_date")
    );

    return unSubscribe(trackUpdates(q));
  }, [chatsObj, getChatId, trackUpdates, unSubscribe]);

  const readMessage = useCallback(({username}) => {
    const update = (messageId) => {
      const messagesRef = doc(firebaseDb, "messages", messageId);
      updateDoc(messagesRef, {
        seen: true
      })
    }

    setUnreadMessages(prev => {
      if (!prev.length) return prev;

      prev.forEach(item => {
        if (item?.sender !== username) {
          debounce(() => update(item.id), 500)();
          readMessage(item.id)
        }
      })
      return [];
    })
  }, []);

  useEffect(() => {
    return () => {
      unSubscribe();
    }
  }, [unSubscribe])

  return {
    messages,
    chatsObj,
    getChatId,
    getMessages,
    setMessages,
    currentChatId,
    unreadMessages,
    readMessage
  };
}

export function useChatInfo() {
  const dispatch = useDispatch();

  const {userInfo, usersProfiles, chatsObj: chatsList} = useSelector(state => {
    return {
      userInfo: state.currentUser.userProfile,
      usersProfiles: state.chatV2.usersProfiles,
      chatsObj: state.chatV2.chatsObj
    }
  });

  const getLatestMessage = useCallback(({chatId, receiver}) => {
    const messagesRef = collection(firebaseDb, "messages");
    if (!chatId) return;

    const q = query(
      messagesRef,
      where("chat_id", "==", chatId),
      orderBy("sent_date", "desc"),
      limit(1)
    );

    return onSnapshot(q,
      (snapshot) => {
        snapshot.docChanges().forEach(change => {
          if (change.type === "added") {
            const messageDate = change.doc.data()?.sent_date.toJSON()
            const messageObj = {user: receiver, id:change.doc.id , message: {...change.doc.data(), sent_date: messageDate}}
            dispatch(addNewLastMessage(messageObj))
          }
        })
      }
    )
  }, [dispatch])

  const trackUpdates = useCallback((q) => {
    return onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          const chat = change.doc.data();
          const receiver = change.doc.data().users[0] !== userInfo.username ? 0 : 1;
          const chatObj = {receiver: chat.users[receiver], chatId: change.doc.id};
          dispatch(setChatsInfo(chatObj))
          dispatch(fetchAllUsersProfiles({username: chatObj.receiver}))
          getLatestMessage(chatObj)
        }
      });
    })
  }, [dispatch, getLatestMessage, userInfo.username]);


  const chatsQuery = useCallback((chatRef) => {
    return query(
      chatRef,
      where("users", "array-contains-any", [userInfo.username])
    );
  }, [userInfo.username])

  const fetchChats = useCallback(async () => {
    const chat = collection(firebaseDb, "chat");

    const q = chatsQuery(chat);
    return trackUpdates(q);
  }, [chatsQuery, trackUpdates])


  return {userInfo, usersProfiles, chatsList, fetchChats};
}

export function useSendMessage(params) {
  const {getChatId} = useMessages(params.username);

  const {userInfo, chatsList} = useSelector(state => {
    return {
      chatsList: state.chatV2.chatsObj,
      userInfo: state.currentUser.userProfile
    }
  })

  return useCallback(async ({value}) => {
    const content = value
    const messagesRef = collection(firebaseDb, "messages")
    const chatId = getChatId({targetList: Object.values(chatsList)})[0].chatId

    const message = new MessageModel({
      chatId,
      content,
      sender: userInfo.username,
    }).getObj();

    await addDoc(messagesRef, message);

    return chatId;
  }, [chatsList, getChatId, userInfo.username])
}
