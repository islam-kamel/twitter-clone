import {Outlet} from "react-router-dom";
import {lazy, useEffect} from "react";
import {useDispatch} from "react-redux";
import {fetchCurrentUserProfile} from "../store/features/user/user";
import {SmNavbar} from "../components/main-sidebar/MainSidebar";

const MainSidebar = lazy(() => import("../components/main-sidebar/MainSidebar"));
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
      <main className="container-fluid container-xl p-0 px-sm-5 m-0 mx-auto">
        <section className="row mx-auto">
          <nav className={"col-2 d-none col-xl-3 d-sm-flex flex-column p-0"}>
            <MainSidebar/>
          </nav>
          <main style={{width:'80%'}} className="col p-0 mb-auto border">
            <Outlet/>
            {/*<VideoCall/>*/}
          </main>
          <aside className="col-4 d-none d-lg-flex flex-grow-0 ">
            <div className={"position-fixed h-100"} style={{maxWidth: 350}}>
              <NewToTwitter/>
              <RightSidebar/>
            </div>
          </aside>
        </section>
        <nav className={"d-sm-none mt-auto"}>
          <div style={{height: "58px"}}></div>
          <SmNavbar/>
        </nav>
      </main>
      <div style={{margin: "72px 0 !important"}}>
        <Footer/>
      </div>
    </div>
  );
}

export default Layout;
