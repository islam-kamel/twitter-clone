import Card from "../card/card";
import "./home.style.css";
import {emoji, gif, imageIcon, poll} from "../../constants/icons";
import TwButton from "../tw-button/tw-button";

const profileImage = require("../../assets/profile.image.jpg");

export default function Home() {
    return (
        <main className="main_style border">
            <div className="col-12 position-sticky top-0 z-1 main-div border-bottom backdrop-blur ">
                <div className="d-flex flex-row justify-content-between p-4">
                    <h1 style={{fontSize: "20px", fontWeight: "600"}}>Home</h1>
                </div>
                <div className="d-flex flex-row justify-content-around">
                    <h3 style={{fontSize: "18px", fontWeight: "400"}}>For you </h3>
                    <h3 style={{fontSize: "18px", fontWeight: "400"}}>Following </h3>
                </div>
            </div>

            {/*New Tweet Start*/}
            <div className="card p-3 new_tweet border-0 col-12">
                <div className="row g-0 justify-content-start align-items-start">
                    <div className={"col-1 me-3"}>
                        <img src={profileImage} alt="img" className="rounded-circle tw-profile-image"/>
                    </div>
                    <div className={"col w-100"}>
                        <div className={"d-flex align-self-start align-items-center justify-content-center w-100"}>
                            <div className={"w-100 ms-3"}>
                                <textarea
                                    className={"form-control border-0  h-100"}
                                    placeholder={"What's happening?"}
                                    style={{resize: "none"}}
                                />
                                <div className={"mt-3 text-primary d-flex justify-content-between align-items-center"}>
                                    <div className={"row row-cols-4 g-0 w-50"}>
                                        <span role={"button"}> {imageIcon} </span>
                                        <span role={"button"}> {gif} </span>
                                        <span role={"button"}> {poll} </span>
                                        <span role={"button"}> {emoji} </span>
                                    </div>
                                    <TwButton
                                        btnStyle={"primary"}
                                        classes={"rounded-pill w-25 align-self-end"}
                                    >
                                        Tweet
                                    </TwButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*New Tweet End*/}

            <Card name=" Engy Mo"
                  text="The simple truths hurt the most. One must have been very optimistic investing in Tesla, even being considered as a tech company in 2021. The company is great and run well. It has just been overvalued and supported by macro trends."
                  username="@engy5821 .2h" img={profileImage}/>
            <Card name=" Engy Mo"
                  text="The simple truths hurt the most. One must have been very optimistic investing in Tesla, even being considered as a tech company in 2021. The company is great and run well. It has just been overvalued and supported by macro trends."
                  username="@engy5821 .2h" img={profileImage}/>
            <Card name=" Engy Mo"
                  text="The simple truths hurt the most. One must have been very optimistic investing in Tesla, even being considered as a tech company in 2021. The company is great and run well. It has just been overvalued and supported by macro trends."
                  username="@engy5821 .2h" img={profileImage}/>
            <Card name=" Engy Mo"
                  text="The simple truths hurt the most. One must have been very optimistic investing in Tesla, even being considered as a tech company in 2021. The company is great and run well. It has just been overvalued and supported by macro trends."
                  username="@engy5821 .2h" img={profileImage}/>
            <Card name=" Engy Mo"
                  text="The simple truths hurt the most. One must have been very optimistic investing in Tesla, even being considered as a tech company in 2021. The company is great and run well. It has just been overvalued and supported by macro trends."
                  username="@engy5821 .2h" img={profileImage}/>
            <Card name=" Engy Mo"
                  text="The simple truths hurt the most. One must have been very optimistic investing in Tesla, even being considered as a tech company in 2021. The company is great and run well. It has just been overvalued and supported by macro trends."
                  username="@engy5821 .2h" img={profileImage}/>
            <Card name=" Engy Mo"
                  text="The simple truths hurt the most. One must have been very optimistic investing in Tesla, even being considered as a tech company in 2021. The company is great and run well. It has just been overvalued and supported by macro trends."
                  username="@engy5821 .2h" img={profileImage}/>
            <Card name=" Engy Mo"
                  text="The simple truths hurt the most. One must have been very optimistic investing in Tesla, even being considered as a tech company in 2021. The company is great and run well. It has just been overvalued and supported by macro trends."
                  username="@engy5821 .2h" img={profileImage}/>
            <Card name=" Engy Mo"
                  text="The simple truths hurt the most. One must have been very optimistic investing in Tesla, even being considered as a tech company in 2021. The company is great and run well. It has just been overvalued and supported by macro trends."
                  username="@engy5821 .2h" img={profileImage}/>
            <Card name=" Engy Mo"
                  text="The simple truths hurt the most. One must have been very optimistic investing in Tesla, even being considered as a tech company in 2021. The company is great and run well. It has just been overvalued and supported by macro trends."
                  username="@engy5821 .2h" img={profileImage}/>
        </main>
    );
}
