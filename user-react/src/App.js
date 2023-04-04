import MainSidebar, {SmNavbar} from "./components/main-sidebar/MainSidebar";
import Login from "./components/login/login";
import SignUp from "./components/sign-up/SignUp";
import Home from "./components/home/home";
import NewToTwitter from "./components/new-to-twitter/NewToTwitter";
import {Route, Routes} from "react-router-dom";
import Notifications from "./components/notifications/NotificationsBody";
import Explore from "./components/explore/explore";
import Message from "./components/Message/Message";
import Profile from "./components/profile/profile";
import Bookmarks from "./components/bookmarks/Bookmarks";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <>
            <Login/>
            <SignUp/>
            <main className="container-fluid container-xl p-0 px-sm-5">
                <section className="row mx-auto" style={{height: "100vh"}}>
                    <nav
                        className="col-1 mx-2 col-sm-auto align-items-start flex-shrink-0 col-xl-2 d-none d-sm-flex">
                        <MainSidebar/>
                    </nav>
                    <main className="col p-0 mb-auto">
                        <Routes>
                            {/* start protected*/}
                            <Route index={true} element={<Home/>}/>
                            <Route path={"notifications"} element={<Notifications/>}/>
                            <Route path={"Message"} element={<Message/>}/>
                            <Route path={"explore"} element={<Explore/>}/>
                            <Route path={"bookmarks"} element={<Bookmarks/>}/>
                            <Route path={"profile/:username"} element={<Profile/>}/>
                            {/* end protected*/}
                            <Route path={"Profile"} element={<Profile/>}/>
                        </Routes>
                    </main>
                    <aside className="col-4 d-none d-lg-flex flex-grow-0 p-0">
                        <div className={"position-fixed"} style={{width: 400}}>
                            <Routes>
                                <Route path={"*"} element={<NewToTwitter/>}/>
                            </Routes>
                        </div>

                    </aside>
                </section>
            </main>
            {/*protected*/}
            <nav className={"d-sm-none mt-auto"}>
                <SmNavbar/>
            </nav>
            <Footer/>
            {/*protected*/}
        </>
    );
}

export default App;
