import React from "react";
import TwModal from "../modal/modal";
import {twitterIcon} from "../login/login";
import SignupForm from "../../safaa/Stepper/Stepper";

export default function SignUp() {
    return (
        <>
            <TwModal id={"signup-modal"} modalStyle={"modal-dialog-scrollable"}>
                <TwModal.Header classes={"text-dark text-center w-100"} title={twitterIcon}/>
                <TwModal.Body>
                    <SignupForm/>
                </TwModal.Body>
            </TwModal>
        </>
    );
}
