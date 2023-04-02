import React, {FormEvent, useContext, useEffect, useState} from "react";
import TwModal from "../modal/modal";
import TwButton from "../tw-button/tw-button";
import TwInput from "../tw-input/tw-input";
import type {Credentials} from "../../hooks/useAuth";
import useAuth from "../../hooks/useAuth";
import LoadingSpinner from "../Loading/loading-spinner";
import {useNavigate} from "react-router-dom";
import {useUserContext} from "../../context/userContext";
import axios from "../../apiProvider/axios";


const googleIconColors = {
    background: "conic-gradient(from -45deg, #ea4335 110deg, #4285f4 90deg 180deg, #34a853 180deg 270deg, #fbbc05 270deg) 73% 55%/150% 150% no-repeat",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    WebkitTextFillColor: "transparent"
}
export const twitterIcon = <svg width={32} viewBox="0 0 24 24" aria-label="Twitter" role="img">
    <g>
        <path
            d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
    </g>
</svg>

const INITIAL_VALUE: Credentials = {
    username: "",
    password: ""
}
export default function Login() {
    const [show, setShow] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const [loginData, setLoginData] = useState(INITIAL_VALUE);
    const {response, isLoading, setCredentials} = useAuth();
    const navigate = useNavigate();
    const {userInfo, setUserInfo} = useUserContext()

    const isFormValid = () => {
        const form = document.forms["loginForm"];
        setIsDisabled(!form.checkValidity())
    }
    const handelSubmit = (event: FormEvent) => {
        event.preventDefault()
        setCredentials({username: loginData?.username, password: loginData?.password})
        response.then(e => {
            console.log("after login", e.data);
            navigate('/', {replace: true});
        })
    }
    const togglePasswordVisibility = () => setShow(!show);
    return (
        <div>
            {JSON.stringify(userInfo)}
            {isLoading
                ? <LoadingSpinner/>
                : (
                    <TwModal id={"login-modal"} modalStyle={"modal-dialog-scrollable"}>
                        <TwModal.Header classes={"text-dark text-center w-100"} title={twitterIcon}/>
                        <TwModal.Body>
                            <div className="d-flex flex-column align-items-center login-Form">
                                <h2 className=""><b>Sign in to Twitter</b></h2><br/>
                                <div className={"w-75 d-flex flex-column justify-content-center align-items-stretch"}>
                                    <TwButton
                                        btnStyle={"outline-dark"}
                                        classes={"rounded-5 py-2 my-4"}
                                    >
                                        <i className="fab fa-google fa-1x mx-2" style={googleIconColors}></i>
                                        Sign in with Google
                                    </TwButton>

                                    <TwButton
                                        btnStyle={"outline-dark"}
                                        classes={"rounded-5 py-2"}
                                    >
                                        <i className="bi bi-apple text-dark mx-2"></i>
                                        Sign in with Apple
                                    </TwButton>
                                </div>

                                <div className={"d-flex my-3 w-75 justify-content-center align-items-center"}>
                                    <div className={"w-100 border border-secondary border-bottom border-0"}></div>
                                    <div className={"px-2"}>or</div>
                                    <div className={"w-100 border border-secondary border-bottom border-0"}></div>
                                </div>

                                {/* input box */}
                                <form
                                    onChange={isFormValid}
                                    name={"loginForm"}
                                    onSubmit={handelSubmit}
                                    className="gy-4 w-75 row row-cols-1 justify-content-center align-items-center"
                                >
                                    <div className="col">
                                        <TwInput
                                            id="username"
                                            labelText={"Username"}
                                            className="form-control py-3"
                                            other={{
                                                name: "username",
                                                required: true,
                                                minLength: 8,
                                                pattern: "(\\w{1,15})",
                                                onChange: (e) => {
                                                    setLoginData({...loginData, username: e?.target?.value})
                                                }
                                            }}
                                        />
                                    </div>
                                    <div className="col">
                                        <div className={"position-relative"}>
                                    <span
                                        className="p-0 fs-6 fw-light text-secondary"
                                    >
                                        Make sure it’s 8 characters or more.
                                    </span>
                                            <TwInput
                                                labelText={"Password"}
                                                className="form-control py-3"
                                                type={show ? "text" : "password"}
                                                other={{
                                                    name: "password",
                                                    required: true,
                                                    minLength: 8,
                                                    onChange: (e) => {
                                                        setLoginData({...loginData, password: e?.target?.value})
                                                    }
                                                }}
                                                id="password"
                                            />
                                            <i
                                                style={{
                                                    position: "absolute",
                                                    top: "50%",
                                                    right: "3%"
                                                }}
                                                className={!show ? "bi bi-eye" : "bi bi-eye-slash"}
                                                onClick={togglePasswordVisibility} id="PasswordShowing"
                                            ></i>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <TwButton
                                            btnStyle={"outline-dark"}
                                            classes={"rounded-5 w-100"}
                                            other={{
                                                type: "submit",
                                                disabled: isDisabled
                                            }}
                                        >
                                            Login
                                        </TwButton>
                                    </div>
                                    <div>
                                        <TwButton
                                            btnStyle={"outline-dark"}
                                            classes={"rounded-5 py-2 w-100"}
                                        >
                                            Forget Password ?
                                        </TwButton>
                                    </div>
                                    <div className={"mt-5 my-5 pt-3"}>
                                        <p className="text-secondary-emphasis fw-light ">
                                            Don't have an account ? {" "}
                                            <TwModal.ModalButton
                                                targetId={"signup-modal"}
                                                btnStyle={"btn-link p-2 border-none"}
                                                classes={"text-primary fw-light"}
                                                title={"Sign up"}
                                            />
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </TwModal.Body>
                    </TwModal>
                )
            }

        </div>
    );
}
