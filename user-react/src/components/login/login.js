import React from "react";
import TwModal from "../modal/modal";
import TwButton from "../tw-button/tw-button";


const googleIconColors = {
    background: "conic-gradient(from -45deg, #ea4335 110deg, #4285f4 90deg 180deg, #34a853 180deg 270deg, #fbbc05 270deg) 73% 55%/150% 150% no-repeat",
    webkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    webkitTextFillColor: "transparent"
}

export const twitterIcon = <svg width={32} viewBox="0 0 24 24" aria-label="Twitter" role="img">
    <g>
        <path
            d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
    </g>
</svg>

export default function Login() {
    return (
        <div>
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
                        <form onSubmit={(e) => e.preventDefault()} className="gy-4 w-75 row row-cols-1 justify-content-center align-items-center">
                            <div className="col">
                                <input
                                    placeholder={"Email,Phone or Username"}
                                    type="email"
                                    className="form-control py-3"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                />
                            </div>
                            <div className="col">
                                <TwButton
                                    btnStyle={"dark"}
                                    classes={"rounded-5 py-2 w-100"}
                                >
                                    Next
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
                                        targetId={'signup-modal'}
                                        btnStyle={'btn-link p-2 border-none'}
                                        classes={'text-primary fw-light'}
                                        title={'Sign up'}
                                    />
                                </p>
                            </div>
                        </form>
                    </div>
                </TwModal.Body>
            </TwModal>
        </div>
    );
}
