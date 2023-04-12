import React from "react";
import "./NewToTwitter.css";
import {GithubButton, GoogleButton} from "../tw-button/tw-button";
import TwModal from "../../components/modal/modal";
import {Link} from "react-router-dom";
import noneLoginRequire from "../../guards/noneLoginRequire";

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
                  <Link to="https://twitter.com/en/tos"> Terms of Service </Link>
                  and
                  <Link to="https://twitter.com/en/privacy"> Privacy Policy</Link>
                  , including
                  <Link to="https://help.twitter.com/en/rules-and-policies/twitter-cookies">Cookie Use.</Link>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default noneLoginRequire(NewToTwitter);
