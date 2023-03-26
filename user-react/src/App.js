import MainSidebar from "./components/main-sidebar/MainSidebar";
import Footer from "./components/footer/Footer";
import Login from "./components/login/login";
import SignUp from "./components/sign-up/SignUp";

function App() {
    return (
        <>
            <Login/>
            <SignUp/>
            <main className="container">
                <section className="row" style={{height: "100vh"}}>
                    <header className="col-3 col-xs-6 border">
                        <MainSidebar/>
                    </header>
                    <main className="col border"> Main Area </main>
                    <aside className="col-3 d-none d-lg-block border">Aside Bar</aside>
                </section>
            </main>
            <Footer/>
        </>
    );
}

export default App;
