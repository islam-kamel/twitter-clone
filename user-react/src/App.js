import MainSidebar from "./components/main-sidebar/MainSidebar";
import Home from './components/home/home';
import LeftSidebar from './components/leftSidebar/leftSidebar';

function App() {
    return (
        <main className="container">
            <section className="row" style={{height: "100vh"}}>
                <header className="col-3 col-xs-6 border">
                    <MainSidebar/>
                </header>
                <main className="col border">
                    <Home />
                </main>
                <aside className="col-3 d-none d-lg-block border">
                    <LeftSidebar />
                </aside>
            </section>
        </main>
    );
}

export default App;
