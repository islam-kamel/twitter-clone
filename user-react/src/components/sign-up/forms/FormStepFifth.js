import {useState} from "react";
import TwInput from "../../tw-input/tw-input";

function FormStepFifth() {
    const [show, setShow] = useState(false);
    const togglePasswordVisibility = () => setShow(!show);

    return (

        <div className="mt-3">
            <h2 className="mb-3"><b>You'll need a password</b></h2>
            <span className="p-0 fs-6 fw-light text-secondary mb-5"> Make sure it’s 8 characters or more. </span>
            <TwInput
                labelText={"Password"}
                className="form-control py-3"
                type={show ? "text" : "password"}
                other={{
                    name: "password",
                    required: true,
                    pattern: /[\w|\W]{8,}/g
                }}
                id="password"
            />
            <i
                className={!show ? "bi bi-eye " : "bi bi-eye-slash"}
                onClick={togglePasswordVisibility} id="PasswordShowing"
            ></i>
        </div>
    );
}

export default FormStepFifth;
