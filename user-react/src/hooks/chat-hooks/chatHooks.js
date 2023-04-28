import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect, useState} from "react";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  onSnapshot,
  or,
  orderBy,
  query,
  Timestamp,
  updateDoc,
  where
} from "firebase/firestore";
import {firebaseDb} from "../../store/API/firebase";
import {fetchAllUsersProfiles, setChatsInfo} from "../../store/chat/chatV2";
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

  const chatsList = useSelector(state => state.chatV2.chatsList);
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
  }, [updateMessages]);

  const getMessages = useCallback((chat_id) => {
    const messagesRef = getMessagesRef();
    const chatId = chat_id || getChatId({targetList: chatsList})[0]?.chatId;

    if (!chatId) return;

    setCurrentChatId(chatId)

    const q = query(
      messagesRef,
      where("chat_id", "==", chatId),
      orderBy("sent_date")
    );

    return unSubscribe(trackUpdates(q));
  }, [chatsList, getChatId, trackUpdates, unSubscribe]);

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
    chatsList,
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
      or(where("users", "array-contains-any", [userInfo.username]))
    );
  }, [userInfo.username])

  const fetchChats = useCallback(async () => {
    const chat = collection(firebaseDb, "chat");

    const q = chatsQuery(chat);

    const chatSnapShot = await getDocs(q);

    return chatSnapShot.docs.map(doc => {
      const item = doc.data();

      const receiver = item.users[0] !== userInfo.username ? 0 : 1;

      return {receiver: item.users[receiver], chatId: doc.id};
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

export function useSendMessage(params) {
  const {getChatId} = useMessages(params.username);

  const {userInfo, chatsList} = useSelector(state => {
    return {
      chatsList: state.chatV2.chatsList,
      userInfo: state.currentUser.userProfile
    }
  })

  return useCallback(async ({value}) => {
    const content = value
    const messagesRef = collection(firebaseDb, "messages")
    const chatId = getChatId({targetList: chatsList})[0].chatId

    const message = new MessageModel({
      chatId,
      content,
      sender: userInfo.username,
    }).getObj();

    await addDoc(messagesRef, message);

    return chatId;
  }, [chatsList, getChatId, userInfo.username])
}
