import {createBrowserRouter} from "react-router-dom";
import Layout from "../layout/layout";
import {lazy, Suspense} from "react";

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
    element: <Suspense><Layout/></Suspense>,
    children: [
      {
        index: true,
        element: <Suspense><Home/></Suspense>
      },
      {
        path: "notifications",
        element: <Suspense><Notifications/></Suspense>
      },
      {
        path: "Message",
        element: <Suspense><Message/></Suspense>
      },
      {
        path: "bookmarks",
        element: <Suspense><Bookmarks/></Suspense>
      },
      {
        path: "profile/:username",
        element: <Suspense><Profile/></Suspense>
      },
      {
        path: "explore",
        element: <Suspense><Explore/></Suspense>
      },
      {
        path: "bookmarks",
        element: <Suspense><Bookmarks/></Suspense>
      },
      {
        path: "details/:slug",
        element: <Suspense> <TweetDetails/></Suspense>
      }
    ]
  }
])
