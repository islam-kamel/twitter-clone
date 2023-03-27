import MainSidebar from "./components/main-sidebar/MainSidebar";
import Login from "./components/login/login";
import SignUp from "./components/sign-up/SignUp";
import Home from "./components/home/home";
import NewToTwitter from "./components/new-to-twitter/NewToTwitter";
import Footer from "./components/footer/Footer";
import {Route, Routes} from "react-router-dom";
import Notifications from "./components/notifications/NotificationsBody";
import Explore from "./components/Explore/explore";
import TwInput from "./components/tw-input/tw-input";

function App() {
    return (
        <>
            <Login/>
            <SignUp/>
            <main className="container">
                <section className="row" style={{height: "100vh"}}>
                    <header className="col-2  col-lg-3 border-end">
                        <MainSidebar/>
                    </header>
                    <main className="col ">
                        <Routes>
                            <Route index element={<Home />} />
                            <Route path={'explore'} element={<Explore />} />
                            <Route path={'notifications'} element={<Notifications />} />
                            <Route path={'kit'} element={<TwInput />}/>
                        </Routes>
                    </main>
                    <aside className="col-3 d-none d-lg-block">
                        <Routes>
                           <Route path={'*'} element={<NewToTwitter/>}/>
                        </Routes>
                    </aside>
                </section>
            </main>
            <Footer/>
        </>
    );
}

export default App;
