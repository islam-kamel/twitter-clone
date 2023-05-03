import {RouterProvider} from "react-router-dom";
import {Suspense, useEffect} from "react";
import "./i18n";
import config from "./config";
import routes from './router/routes'
import {useTranslation} from "react-i18next";
import Settings from "./components/settings/settings";
import NewTweetModal from "./components/NewTweetModal";

// const socket = io.connect('http://localhost:3008');
//
// class Notification {
//   constructor({...notify}) {
//     this.to = notify.to;
//     this.path = notify.path;
//     this.eventDate = new Date();
//     this.title = notify.title;
//     this.content = notify.content;
//     this.id = notify.id || null;
//   }
//
//   static fromJson(stringBody) {
//     return new Notification(JSON.parse(stringBody));
//   }
function App() {
  const [t] = useTranslation();

  useEffect(() => {
    document.body.parentElement.dir = t('dir');
    document.body.setAttribute('data-bs-theme', localStorage.getItem(config.colorKey))
  }, [t])

  // const userInfo = useSelector(state => state.currentUser.userProfile);
  //
  // useEffect(() => {
  //   socket.emit('join', userInfo?.username)
  // }, [userInfo])
  //
  //
  // const sendNotify = () => {
  //   const notify = new Notification({
  //     to: 'islam-kamel',
  //     path: 'notifications',
  //     title: 'Initial Notification',
  //     content: "hello, notifications"
  //   })
  //   socket.emit("send-notifications", notify);
  // }
  //
  // useEffect(() => {
  //   socket.on('receive-notifications', (notify) => {
  //     const obj = new Notification(notify)
  //     console.log(obj)
  //   })
  // }, [])

  return (
    <Suspense fallback={null}>
      <Settings/>
      <NewTweetModal/>
      <RouterProvider router={routes}/>
    </Suspense>
  );
}

export default App;
