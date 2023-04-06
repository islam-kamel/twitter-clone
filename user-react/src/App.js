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
import {useState} from "react";
import {useIsLoading} from "./context/isLoading";
import LoadingSpinner from "./components/Loading/loading-spinner";
import useAxiosPrivate from "./hooks/useAxiosPrivate";
import useAuth from "./hooks/useAuth";

import useRefreshToken from "./hooks/useRefreshToken";

function ApiTest() {
    const [apiHealth, setApiHealth] = useState("Nothing");
    const {isLoading} = useIsLoading();
    const {login} = useAuth();
    const refresh = useRefreshToken();

    // const axios = useAxios();
    // useEffect(() => {
    //     axios.get('api/api-health-check')
    //         .then(res => setApiHealth(res?.data?.state))
    //         .catch(err => setApiHealth(err?.message))
    // }, [axios])

    const axiosPrivate = useAxiosPrivate();

    const handelRefresh = () => refresh().then(res => setApiHealth(res.data.access_token))
    const handelLogin = () => {
        login({username: "islam.admin", password: "123"}).then(response => {
            setApiHealth(response.statusText);
            setTimeout(() => {
                axiosPrivate.get("api/user/is_auth")
                    .then(res => setApiHealth(res.data.message))
                    .catch(err => {
                        if (err?.response) {
                            setApiHealth(err?.response?.data["error_description"])
                        }
                    })
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
            <button className={"btn btn-danger mt-3"} onClick={handelRefresh}>Refresh</button>
            <button className={"btn btn-primary mt-3"} onClick={handelLogin}>Login</button>
            <button className={"btn btn-success mt-3"} onClick={handelGetFullname}>Get Fullname</button>
        </div>
    );
}

function App() {
    return (
        <>
            <Login/>
            <SignUp/>
            <main className="container-fluid container-xl p-0 px-sm-5">
                <section className="row mx-auto">
                    <nav className={"col-2 d-none d-sm-flex"}>
                        <MainSidebar/>
                    </nav>
                    <main className="col  p-0 mb-auto">
                        <Routes>
                            {/* start protected*/}
                            <Route index={true} element={<Home/>}/>
                            <Route path={"notifications"} element={<Notifications/>}/>
                            <Route path={"Message"} element={<Message/>}/>
                            <Route path={"explore"} element={<Explore/>}/>
                            <Route path={"bookmarks"} element={<Bookmarks/>}/>
                            <Route path={"profile/:username"} element={<Profile/>}/>
                            {/* end protected*/}
                            <Route path={"Profile"} element={<Profile/>}/>
                        </Routes>
                    </main>
                    {/*<aside className="col-4 d-none d-lg-flex flex-grow-0 p-0">*/}
                    {/*    <div className={"position-fixed"} style={{width: 350}}>*/}
                    {/*        <Routes>*/}
                    {/*            <Route path={"*"} element={<NewToTwitter/>}/>*/}
                    {/*        </Routes>*/}
                    {/*    </div>*/}
                    {/*</aside>*/}
                </section>
                <nav className={"d-sm-none mt-auto"} style={{margin: "58px 0!important"}}>
                    <SmNavbar/>
                </nav>
            </main>
            {/*protected*/}
            <div style={{margin: "72px 0 !important"}}>
                {/*<Footer/>*/}
            </div>
            {/*protected*/}
        </>
    );
}

export default App;
