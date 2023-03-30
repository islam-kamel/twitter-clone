import {useState} from "react";
import TwInput from "../../tw-input/tw-input";
import FormWrapper from "../FormWrapper";
import {FormData} from "../SignUp";


function FormStepFifth(props: { data: FormData, updateData: Function }) {
    const [show, setShow] = useState(false);

    const togglePasswordVisibility = () => setShow(!show);

    return (

        <FormWrapper title={"You'll need a password"}>
            <span className="p-0 fs-6 fw-light text-secondary mb-5"> Make sure it’s 8 characters or more. </span>
            <div className={"position-relative"}>

                <TwInput
                    labelText={"Password"}
                    className="form-control py-3"
                    type={show ? "text" : "password"}
                    other={{
                        name: "password",
                        required: true,
                        minLength: 8,
                        onChange: (e) => {
                            props?.updateData({...props?.data, password: e?.target.value})
                        }
                    }}
                    id="password"
                />
                <i
                    style={{
                        position: "absolute",
                        top: "30%",
                        right: "3%"
                    }}
                    className={!show ? "bi bi-eye" : "bi bi-eye-slash"}
                    onClick={togglePasswordVisibility} id="PasswordShowing"
                ></i>
            </div>
        </FormWrapper>
    );
}

export default FormStepFifth;
