import MainSidebar from "./components/main-sidebar/MainSidebar";
import Login from "./components/login/login";
import SignUp from "./components/sign-up/SignUp";
import Home from "./components/home/home";
import NewToTwitter from "./components/new-to-twitter/NewToTwitter";
import Footer from "./components/footer/Footer";
import {Route, Routes} from "react-router-dom";
import Notifications from "./components/notifications/NotificationsBody";
import Explore from "./components/explore/explore";

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
                            <Route index element={<Home />} />
                            <Route path={'explore'} element={<Explore />} />
                            <Route path={'notifications'} element={<Notifications />} />
                        </Routes>
                    </main>
                    <aside className="col-4 d-none d-md-flex flex-grow-0 p-0">
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
