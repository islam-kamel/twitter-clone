// import Login from "../components/login/login";
// import SignUp from "../components/sign-up/SignUp";
import {SmNavbar} from "../components/main-sidebar/MainSidebar";
import {Outlet} from "react-router-dom";
// import NewToTwitter from "../components/new-to-twitter/NewToTwitter";
// import RightSidebar from "../components/RightSidebar/RightSidebar";
// import Footer from "../components/footer/Footer";
import {lazy, Suspense, useEffect} from "react";
import {useDispatch} from "react-redux";
import {fetchCurrentUserProfile} from "../store/features/user/user";
import Chat from "../components/chat/Chat";
import ChatRoom from "../components/Message/ChatRoom";

const MainSidebar = lazy(() => import("../components/main-sidebar/MainSidebar"));
// const SmNavbar = lazy(() => import("../components/main-sidebar/MainSidebar"));
const Login = lazy(() => import("../components/login/login"));
const SignUp = lazy(() => import("../components/sign-up/SignUp"));
const NewToTwitter = lazy(() => import("../components/new-to-twitter/NewToTwitter"));
const RightSidebar = lazy(() => import("../components/RightSidebar/RightSidebar"));
const Footer = lazy(() => import("../components/footer/Footer"));

function Layout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUserProfile());
  }, [dispatch]);


  return (
      <div className={"app w-100"}>
        <Login/>
        <SignUp/>
        <main className="container-fluid container-xl p-0 px-sm-5">
          <section className="row mx-auto">
            <nav className={"col-2 d-none d-sm-flex"}>
              <MainSidebar/>
            </nav>
            <main className="col p-0 mb-auto">
                <Outlet/>
            </main>
            <aside className="col-4 d-none d-lg-flex flex-grow-0 p-0 ">
              <div className={"position-fixed h-100"} style={{width: 350}}>
                <NewToTwitter/>
                <RightSidebar/>
              </div>
            </aside>
          </section>
          <nav className={"d-sm-none mt-auto"} style={{margin: "58px 0!important"}}>
            <SmNavbar/>
          </nav>
        </main>

        {/*protected*/}
        <div style={{margin: "72px 0 !important"}}>
          <Footer/>
        </div>
        {/*protected*/}
      </div>
  );
}

export default Layout;
