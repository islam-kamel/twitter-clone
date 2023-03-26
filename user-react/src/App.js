import MainSidebar from "./components/main-sidebar/MainSidebar";
import TwButton from "./components/tw-button/tw-button";

function App() {
    return (
        <main className="container">
            <section className="row" style={{height: "100vh"}}>
                <header className="col-3 col-xs-6 border">
                    <MainSidebar/>
                </header>
                <main className="col border">Main Area</main>
                <aside className="col-3 d-none d-lg-block border">Aside Bar</aside>
            </section>
        </main>
    );
}

export default App;
