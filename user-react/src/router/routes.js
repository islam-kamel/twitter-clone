import {createBrowserRouter} from "react-router-dom";
import Layout from "../layout/layout";
import {lazy} from "react";

const Home = lazy(() => import("../components/home/home"));
const TweetDetails = lazy(() => import("../pages/tweetDetails"));
const Profile = lazy(() => import("../components/profile/profile"));
const Bookmarks = lazy(() => import("../components/bookmarks/Bookmarks"));
const Message = lazy(() => import("../components/Message/Message"));
const Notifications = lazy(() => import("../components/notifications/NotificationsBody"));
const Explore = lazy(() => import("../components/explore/explore"));

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
        path: "Message",
        element: <Message/>
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
        element:  <TweetDetails/>
      }
    ]
  }
])
