import TwInput from "../../tw-input/tw-input";
import {Birthdate} from "../Stepper/Bithdata";

function FormStepOne(props: { validState: Function }) {

    const handleChange = (event) => {
        props.validState(allIsValid())
        console.log(allIsValid())

    }

    const allIsValid = () => {
        let fullname = document.querySelector('#fullname');
        let email = document.querySelector('#email');

        return email?.checkValidity() && fullname?.checkValidity();
    }
    return (
        <div className="mt-3 row row-cols-1 gy-4">
            <h2 className="fw-bold">Create your account</h2>
            <div className="">
                <TwInput
                    type="text"
                    id="fullname"
                    labelText={"Name"}
                    other={{
                        name: "fullname",
                        required: true,
                        onChange: handleChange
                    }}
                />
            </div>
            <div>
                <TwInput
                    type="email"
                    id="email"
                    labelText={"Email"}
                    other={{
                        name: "email",
                        required: true,
                        onChange: handleChange
                    }}
                />
            </div>
            <Birthdate/>
        </div>
    );
}

export default FormStepOne;
