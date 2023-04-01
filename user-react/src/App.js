import MainSidebar from "./components/main-sidebar/MainSidebar";
import Home from './components/home/home';
import LeftSidebar from './components/leftSidebar/leftSidebar';
import RightSidebar from "./components/RightSidebar/RightSidebar";

function App() {
    return (
        <main className="container">
            <section className="row" style={{height: "100vh"}}>
                <header className="col-3 col-xs-6 ">
                    {/* <MainSidebar/> */}
                    <LeftSidebar />
                </header>
                <main className="col border p-0">
                    <Home />
                </main>
                <aside className="col-4 d-none d-lg-block ">
                    {/* <LeftSidebar /> */}
                    <RightSidebar/>
                </aside>
            </section>
        </main>
    );
}

export default App;
