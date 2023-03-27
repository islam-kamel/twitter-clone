import MainSidebar from "./components/main-sidebar/MainSidebar";
import Login from "./components/login/login";
import SignUp from "./components/sign-up/SignUp";
import Home from "./components/home/home";
import NewToTwitter from "./components/new-to-twitter/NewToTwitter";
import Footer from "./components/footer/Footer";
import {Route, Routes} from "react-router-dom";
import Notifications from "./components/notifications/NotificationsBody";
import Explore from "./components/Explore/explore";

function App() {
    return (
        <>
            <Login/>
            <SignUp/>
            <main className="container-fluid container-xl">
                <section className="row" style={{height: "100vh"}}>
                    <header className="col-1 col-xl-3 d-none d-sm-block
">
                        <MainSidebar/>
                    </header>
                    <main className="col border">
                        <Routes>
                            <Route index element={<Home />} />
                            <Route path={'explore'} element={<Explore />} />
                            <Route path={'notifications'} element={<Notifications />} />
                        </Routes>
                    </main>
                    <aside className="col-4 d-none d-lg-flex">
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
