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

import JoinNowTwitter from "./components/JoinNowTwitter/JoinNowTwitter";

import Profile from "./components/profile/profile";
import useAuth from "./hooks/useAuth";
import { useEffect } from "react";


function App() {
    const {response, setCredentials} = useAuth();

    useEffect(() => {
        setCredentials({username: 'islam.admin', password: '123'})
    },  [setCredentials])

    useEffect(() => {
        response.then(e => console.log("isalm"))
        .catch(e => console.log(e.response.data))

    }, [response]) 
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
                            <Route index element={<Home/>}/>
                            <Route path={"notifications"} element={<Notifications/>}/>
                            <Route path={"Message"} element={<Message/>}/>
                            <Route path={"explore"} element={<Explore/>}/>
                            <Route path={"profile/:username"} element={<Profile/>}/>
                            {/* end protected*/}
                            <Route path={"Profile"} element={<Profile/>}/>

                        </Routes>
                    </main>
                    {/* <aside className="col-4 d-none d-md-flex flex-grow-0 p-0">
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
