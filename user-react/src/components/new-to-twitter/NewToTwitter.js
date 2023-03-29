import React from "react";
import "./NewToTwitter.css";
import TwButton, {GithubButton, GoogleButton} from "../tw-button/tw-button";
import TwModal from "../../components/modal/modal";

const auth = `
https://accounts.google.com/o/oauth2/v2/auth?
scope=https%3A//www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/user.birthday.read&
access_type=offline&
include_granted_scopes=true&
response_type=code&
redirect_uri=http%3A//localhost:3008&
client_id=903796776003-hvlec3ebn0pbc8hmt4ao97g0cbhe9hl8.apps.googleusercontent.com
`
const NewToTwitter = () => {
    return (
        <div>
            <div className="m-3 New-to-Twitter">
                <div className="card rounded-4">
                    <div className="card-body">
                        <div className="card-text">

                            <div className="row g-3 align-items-stretch createAccount-button">
                                <h5 className="card-title"><b>New to Twitter?</b></h5>
                                <h6
                                    className="card-subtitle text-muted"
                                >
                                    Sign up now to get your own personalized
                                    timeline!
                                </h6>
                                <div id={"authWithGoogle"}></div>

                                <GoogleButton
                                    btnStyle={"outline-dark"}
                                    classes={"rounded-5 py-2"}
                                />

                                <GithubButton
                                    btnStyle={"outline-dark"}
                                    classes={"rounded-5 py-2"}
                                >
                                    <i className="bi bi-github mx-2"></i>
                                    Sign in with Github
                                </GithubButton>

                                <TwModal.ModalButton
                                    targetId={"signup-modal"}
                                    btnStyle={"outline-dark p-2"}
                                    classes={"fw-bold rounded-5"}
                                    title={"Create Account"}
                                />

                                <p className="h6 ms-3 fw-light">By signing up, you agree to the
                                    <a a href="https://twitter.com/en/tos">
                                        Terms of Service</a>and <a href="https://twitter.com/en/privacy"> Privacy
                                        Policy</a>,
                                    including <a href="https://help.twitter.com/en/rules-and-policies/twitter-cookies">Cookie
                                        Use.</a></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default NewToTwitter;
