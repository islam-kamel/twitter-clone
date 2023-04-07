import MainSidebar, {SmNavbar} from "./components/main-sidebar/MainSidebar";
import Login from "./components/login/login";
import SignUp from "./components/sign-up/SignUp";
import Home from "./components/home/home";
import {Route, Routes} from "react-router-dom";
import Notifications from "./components/notifications/NotificationsBody";
import Explore from "./components/explore/explore";
import Message from "./components/Message/Message";
import Profile from "./components/profile/profile";
import Bookmarks from "./components/bookmarks/Bookmarks";
import Footer from "./components/footer/Footer";
import {useEffect, useState} from "react";
import {useIsLoading} from "./context/isLoading";
import LoadingSpinner from "./components/Loading/loading-spinner";
import useAxiosPrivate from "./hooks/useAxiosPrivate";
import useAuth from "./hooks/useAuth";

// import useRefreshToken from "./hooks/useRefreshToken";
import LoadingTwitterIcon from "./components/Loading/LoadingTwitterIcon";
import NewToTwitter from "./components/new-to-twitter/NewToTwitter";
import RightSidebar from "./components/RightSidebar/RightSidebar";

function ApiTest() {
    const [apiHealth, setApiHealth] = useState("Nothing");
    const {isLoading} = useIsLoading();
    const {login} = useAuth();
    // const refresh = useRefreshToken;

    // const axios = useAxios();
    // useEffect(() => {
    //     axios.get('api/api-health-check')
    //         .then(res => setApiHealth(res?.data?.state))
    //         .catch(err => setApiHealth(err?.message))
    // }, [axios])

    const axiosPrivate = useAxiosPrivate();

    function isAuth() {
        axiosPrivate.get("api/user/is_auth")
            .then(res => setApiHealth(res.data.message))
            .catch(err => {
                if (err?.response) {
                    setApiHealth(err?.response?.data["error_description"])
                }
            })
    }

    // const handelRefresh = () => refresh().then(res => setApiHealth(res.data.access_token))
    const handelLogin = () => {
        login({username: "islam.admin", password: "123"}).then(response => {
            setApiHealth(response.statusText);
            setTimeout(() => {
                isAuth();
            }, 2000)
        })
    }

    const handelGetFullname = () => {
        axiosPrivate.get("api/user/info/islam.admin").then(res => {
            setApiHealth(res.data.fullname)
        })
    }

    return (
        <div className={"container my-5"}>
            <div className={"p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3"}>
                {isLoading ? <LoadingSpinner/> : apiHealth}
            </div>
            <div className={"btn-group"}>
                {/*<button className={"btn btn-danger mt-3"} onClick={handelRefresh}>Refresh</button>*/}
                <button className={"btn btn-primary mt-3"} onClick={handelLogin}>Login</button>
                <button className={"btn btn-success mt-3"} onClick={handelGetFullname}>Get Fullname</button>
                <button className={"btn btn-dark mt-3"} onClick={isAuth}>Is Auth?</button>
            </div>
        </div>
    );
}

function App() {
    const [isLoading, setIsLoading] = useState(true)
    const [show, setShow] = useState(true)

    useEffect(() => {
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false)
        }, 1000)

        setTimeout(() => {
            setShow(false)
        }, 800)

    }, [])

    return (
         isLoading ? <LoadingTwitterIcon show={show}/> : <>
            <Login/>
            <SignUp/>
            <main className="container-fluid container-xl p-0 px-sm-5">
                <section className="row mx-auto">
                    <nav className={"col-2 d-none d-sm-flex"}>
                        <MainSidebar/>
                    </nav>
                    <main className="col  p-0 mb-auto">
                        <ApiTest/>
                        <Routes>
                            <Route index={true} element={<Home/>}/>
                            <Route path={"notifications"} element={<Notifications/>}/>
                            <Route path={"Message"} element={<Message/>}/>
                            <Route path={"bookmarks"} element={<Bookmarks/>}/>
                            <Route path={"profile/:username"} element={<Profile/>}/>
                            <Route path={"explore"} element={<Explore/>}/>
                        </Routes>
                    </main>
                    <aside className="col-4 d-none d-lg-flex flex-grow-0 p-0 ">
                        <div className={"position-fixed h-100"} style={{width: 350}}>
                            <NewToTwitter/>
                            <RightSidebar/>
                        </div>
                    </aside>
                </section>
                <nav className={"d-sm-none mt-auto"} style={{margin: "58px 0!important"}}>
                    <SmNavbar/>
                </nav>
            </main>
            {/*protected*/}
            <div style={{margin: "72px 0 !important"}}>
                <Footer/>
            </div>
            {/*protected*/}
        </>
    );
}

export default App;
