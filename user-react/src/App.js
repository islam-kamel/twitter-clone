import {RouterProvider} from "react-router-dom";
import {Suspense, useEffect, useState} from "react";
import routes from "./router/routes";
import "./i18n";

// import useRefreshToken from "./hooks/useRefreshToken";
import io from "socket.io-client";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";

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
// }

function App() {
  ///localization

  const LANG_KEY = 'selectedLanguage';

  // const initialLanguage = localStorage.getItem(LANG_KEY) || 'en';

  const [t , translate]= useTranslation();
  const [en, setEn] = useState(true);

  const handleLanguageChange = () => {
    // Update the selected language in localStorage
    const lang = en ? 'en' : 'ar'
    localStorage.setItem(LANG_KEY, lang);
    // Call the i18n object to update the language
    translate.changeLanguage(lang).then(() => setEn(!en));
  };

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
      <button className={'btn btn-primary'} onClick={handleLanguageChange}>Change Lang</button>
      <RouterProvider router={routes}/>
    </Suspense>
  );
}

export default App;
