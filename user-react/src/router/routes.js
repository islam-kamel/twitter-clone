import {createBrowserRouter} from "react-router-dom";
import Layout from "../layout/layout";
import {lazy} from "react";
import ChatLayout from "../layout/chatLayout";
import ChatRoom from "../components/Message/ChatRoom";

const Home = lazy(() => import("../components/home/home"));
const TweetDetails = lazy(() => import("../components/showTweet/TweetDetails "));
const Profile = lazy(() => import("../components/profile/profile"));
const Bookmarks = lazy(() => import("../components/bookmarks/Bookmarks"));
const Message = lazy(() => import("../components/Message/Message"));
const Notifications = lazy(() => import("../components/notifications/NotificationsBody"));
const Explore = lazy(() => import("../components/explore/explore"));
const Chat = lazy(() => import("../components/chat/Chat"));

export default createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "notifications",
        element: <Notifications/>
      },
      {
        path: "bookmarks",
        element: <Bookmarks/>

      },
      {
        path: "profile/:username",
        element: <Profile/>
      },
      {
        path: "explore",
        element: <Explore/>
      },
      {
        path: "bookmarks",
        element: <Bookmarks/>
      },
      {
        path: "details/:slug",
        element: <TweetDetails/>
      },
      {
        path: "chat/:username",
        element: <Chat/>
      }
    ],
  },
  {
    path: "",
    element: <ChatLayout/>,
    children: [
      {path: '/Message', element: <Message/>, children: [{path: ':username', element: <ChatRoom/>}]}
    ]
  },
])
