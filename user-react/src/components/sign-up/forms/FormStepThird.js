import {Link} from "react-router-dom";
import TwInput from "../../tw-input/tw-input";
import FormWrapper from "../FormWrapper";

type FormData = {
    fullname: string,
    email: string,
    birthdate: string,
    password: string
}

function FormStepThird(props: { data: FormData, goto: Function }) {
    return (
        <FormWrapper title={"Create your account"}>
            <div id="growth" className={"row row-cols-1 gx-0 gy-3"}>
                <div>
                    <TwInput
                        id="inputName"
                        labelText={"Name"}
                        classes={"is-valid"}
                        other={{
                            value: props?.data?.fullname,
                            type: "text",
                            readOnly: true,
                            onClick: () =>  props?.goto(0)
                        }}
                    />

                </div>
                <div>
                    <TwInput
                        className="form-control input-lg py-2"
                        id="inputEmail"
                        labelText={"Email"}
                        classes={"is-valid"}
                        other={{
                            value: props?.data?.email,
                            type: "email",
                            readOnly: true,
                            onClick: () =>  props?.goto(0)
                        }}
                    />
                </div>
                <div>
                    <TwInput
                        id="inputBirthDate"
                        labelText={"Birth Date"}
                        classes={"is-valid"}
                        other={{
                            value: props?.data?.birthdate,
                            type: "text",
                            name: "birthdate",
                            readOnly: true,
                            onClick: () =>  props?.goto(0)
                        }}
                    />
                </div>
            </div>
            <div className="col">
                <div className="modal-footer">
                    <h6>By signing up, you agree to the <Link to="#">Terms of Service</Link> and <Link
                        to="#">Privacy Policy</Link>, including <Link to="#">Cookie Use</Link>. Twitter
                        may use your contact information, including your email address and phone number
                        for purposes outlined in our Privacy Policy, like keeping your account secure
                        and personalizing our services, including ads. <Link to="#">Learn more</Link>.
                        Others will be able to find you by email or phone number, when provided, unless
                        you choose otherwise <Link to="#">here</Link>.</h6>
                </div>
            </div>
        </FormWrapper>
    );
}

export default FormStepThird;
