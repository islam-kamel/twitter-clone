import React from "react";
import "./NewToTwitter.css";


const NewToTwitter = () => {

    return (
        <>
            <div className="me-3 New-to-Twitter">
                <div className="card">
                    <div className="card-body">
                        <div className="card-text">

                            <div className="d-flex flex-column createAccount-button">
                                <h5 className="card-title me-5"><b>New to Twitter?</b></h5>
                                <h6 className="card-subtitle my-3 text-muted ">Sign up now to get your own personalized
                                    timeline!</h6>

                                <a href="#!" className="btn btn-outline-dark  py-2 my-3 rounded-5 col-md-11 col-7"><i
                                    class="fab fa-google fa-1x "></i> Sign in with Google</a>
                                <a href="#!" className="btn btn-outline-dark  px-5 py-2 my-3 rounded-5 col-md-11 col-7"><i
                                    class="bi bi-apple text-dark "></i> Sign in with Apple</a>

                                <a href="#!" className="btn btn-outline-dark  px-5 py-2 my-3 rounded-5 col-md-11 col-7">
                                    <b>Create Account</b></a>

                                <p className="h6 ms-3">By signing up, you agree to the <a a
                                                                                          href="https://twitter.com/en/tos"> Terms
                                    of Service</a>and <a href="https://twitter.com/en/privacy"> Privacy Policy</a>,
                                    including <a href="https://help.twitter.com/en/rules-and-policies/twitter-cookies">Cookie
                                        Use.</a></p>
                            </div>


                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}

export default NewToTwitter;
