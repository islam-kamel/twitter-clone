import MainSidebar from "./components/main-sidebar/MainSidebar";
import Login from "./components/login/login";
import SignUp from "./components/sign-up/SignUp";
import Home from "./components/home/home";
import NewToTwitter from "./components/new-to-twitter/NewToTwitter";
import Footer from "./components/footer/Footer";
import NotificationsRigte from "./components/notifications/NotificationsRigte";

function App() {
    return (
        <>
            <Login/>
            <SignUp/>
            <main className="container">
                <section className="row" style={{height: "100vh"}}>
                    <header className="col-2  col-lg-3 border">
                        <MainSidebar/>
                    </header>
                    <main className="col border">
                        <Home/>
                    </main>
                    <aside className="col-3 d-none d-lg-block border">
                        <NewToTwitter/>
                    </aside>
                </section>
            </main>
            <Footer/>
        </>
    );
}

export default App;
