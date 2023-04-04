import {useUserContext} from "../../context/userContext";
import {threeDots} from "../../constants/icons";
import Card from "../card/card";
import TwDropdown from "../twDropdown/TwDropdown";
import {Link} from "react-router-dom";

const profileImage = require("../../assets/profile.image.jpg");

function Bookmarks() {
    const {userInfo} = useUserContext();

    return (
        <div className={"container h-100 border p-0"}>
            <div className={"d-flex flex-column p-0"}>
                <div className={"d-flex p-3 flex-row-reverse justify-content-between align-items-center"}>
                    <TwDropdown
                        down={true}
                        toggle={
                            <TwDropdown.Toggle>
                                <span role={"button"}>{threeDots}</span>
                            </TwDropdown.Toggle>
                        }
                    >
                        <Link to={"#"} className={"text-danger text-decoration-none"}>Remove All Bookmarks</Link>
                    </TwDropdown>
                    <div className={"d-flex flex-column"}>
                        <h1 className={"fw-bold m-0"}>Bookmarks</h1>
                        <span className={"text-muted"}>@islam.admin</span>
                    </div>
                </div>
                <Card
                    name=" Engy Mo"
                    text="The simple truths hurt the most. One must have been very optimistic investing in Tesla, even being considered as a tech company in 2021. The company is great and run well. It has just been overvalued and supported by macro trends."
                    username="@engy5821 .2h"
                    img={profileImage}
                />
            </div>

        </div>
    );
}

export default Bookmarks;
