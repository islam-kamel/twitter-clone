import {RouterProvider} from "react-router-dom";
import {Suspense, useEffect} from "react";
import routes from "./router/routes";

// import useRefreshToken from "./hooks/useRefreshToken";
import io from "socket.io-client";
import {useSelector} from "react-redux";


const socket = io.connect('http://localhost:3008');

class Notification {
  constructor({...notify}) {
    this.to = notify.to;
    this.path = notify.path;
    this.eventDate = new Date();
    this.title = notify.title;
    this.content = notify.content;
    this.id = notify.id || null;
  }

  static fromJson(stringBody) {
    return new Notification(JSON.parse(stringBody));
  }
}

function App() {
  const userInfo = useSelector(state => state.currentUser.userProfile);

  useEffect(() => {
    socket.emit('join', userInfo?.username)
  }, [userInfo])


  const sendNotify = () => {
    const notify = new Notification({
      to: 'islam-kamel',
      path: 'notifications',
      title: 'Initial Notification',
      content: "hello, notifications"
    })
    socket.emit("send-notifications", notify);
  }

  useEffect(() => {
    socket.on('receive-notifications', (notify) => {
      const obj = new Notification(notify)
      console.log(obj)
    })
  }, [])

  return (
    <Suspense fallback={null}>
      <button onClick={sendNotify}>Send Notfiy</button>
      <RouterProvider router={routes}/>
    </Suspense>
  );
}

export default App;
