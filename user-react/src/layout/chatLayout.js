import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchCurrentUserProfile} from "../store/features/user/user";
import {Outlet} from "react-router-dom";
import MainSidebar, {SmNavbar} from "../components/main-sidebar/MainSidebar";
import Login from "../components/login/login";
import SignUp from "../components/sign-up/SignUp";
// import TwModal from "../components/modal/modal";
// import {AudioCallModal} from "../components/Message/buildChatRoom";
// import io from "socket.io-client";
// import VideoCall from "../components/video-call/videoCall";


function ChatLayout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUserProfile());
  }, [dispatch]);


  return (
    <div className={"app w-100"}>
      <Login/>
      <SignUp/>
      {/*<AudioCallModal/>*/}
      <main className="container-fluid container-xl p-0 px-sm-5 m-0 mx-auto overflow-hidden">
        <section className="row mx-auto">
          <nav className={"col-2 d-none col-xl-3 d-sm-flex flex-column p-0"}>
            <MainSidebar/>
          </nav>
          <main className="col p-0 col-xl mb-auto">
            <Outlet/>
          </main>
        </section>

        <nav className={"d-sm-none mt-auto"}>
          <div style={{height: "59px"}}></div>
          <SmNavbar/>
        </nav>
      </main>
    </div>
  );
}

export default ChatLayout;
