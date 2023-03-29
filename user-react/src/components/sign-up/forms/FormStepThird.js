import {Link} from "react-router-dom";
import TwInput from "../../tw-input/tw-input";

function FormStepThird(props: { fullname: string, email: string, birthdate: string}) {
    console.log(props)
    return (
        <form className="mt-3">
            <div id="growth" className={"row row-cols-1 g-3"}>
                <h2 className="mb-5"><b>Create your account</b></h2>
                <div>
                    <TwInput
                        id="inputName"
                        labelText={"Name"}
                        other={{
                            value: props?.fullname,
                            type: "text",
                            disabled: true
                        }}
                    />

                </div>
                <div>
                    <TwInput
                        className="form-control input-lg py-2"
                        id="inputEmail"
                        labelText={"Email"}
                        other={{
                            value: props?.email,
                            type: "email",
                            disabled: true
                        }}
                    />
                </div>
                <div>
                    <TwInput
                        id="inputBirthDate"
                        labelText={"Birth Date"}
                        other={{
                            value: props?.birthdate,
                            type: "text",
                            name: 'birthdate',
                            disabled: true,
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
        </form>
    );
}

export default FormStepThird;
