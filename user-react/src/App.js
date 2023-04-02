import MainSidebar from "./components/main-sidebar/MainSidebar";
import Login from "./components/login/login";
import SignUp from "./components/sign-up/SignUp";
import Home from "./components/home/home";
import NewToTwitter from "./components/new-to-twitter/NewToTwitter";
import Footer from "./components/footer/Footer";
import {Route, Routes} from "react-router-dom";
import Notifications from "./components/notifications/NotificationsBody";
import Explore from "./components/explore/explore";
import Message from "./components/Message/Message";
import Profile from "./components/profile/profile";
import UserSignButton from './components/usersignButton/userSignButton';

function App() {
    return (
        <>
            <Login/>
            <SignUp/>
           
            <main className="container-fluid container-xl p-0 px-sm-5">
                <section className="row mx-auto" style={{height: "100vh"}}>
                    <header className="col-1 align-items-start flex-shrink-0 col-xl-2 d-none d-sm-flex">
                        <MainSidebar/>
                    </header>
                    <main className="col border p-0">
                        <Routes>
                            {/* start protected*/}
                            <Route index={true} element={<Home/>}/>
                            <Route path={"notifications"} element={<Notifications/>}/>
                            <Route path={"Message"} element={<Message/>}/>
                            <Route path={"explore"} element={<Explore/>}/>
                            <Route path={"profile/:username"} element={<Profile/>}/>
                            {/* end protected*/}
                            <Route path={"Profile"} element={<Profile/>}/>
                            <Route path={"UserSignButton"} element={<UserSignButton/>}/>
                        </Routes>
                    </main>
                    {/* <aside className="col-4 d-none d-lg-flex flex-grow-0 p-0">
                        <Routes>
                            <Route path={"*"} element={<NewToTwitter/>}/>
                        </Routes>
                    </aside> */}
                </section>
            </main>
            {/*protected*/}
            <Footer/>
            {/*protected*/}
        </>
    );
}

export default App;
