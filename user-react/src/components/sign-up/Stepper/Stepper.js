import {useState} from "react";
import {Form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Stepper.css"
import {Birthdate} from "./Bithdata";
import {Link} from "react-router-dom";
import TwButton from "../../tw-button/tw-button";

function SignupForm() {
    const [step, setStep] = useState(1);
    const [validated, setValidated] = useState(false);
    const [checked, setChecked] = useState(true);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        if (form.checkValidity() === true) {
            setStep(step + 1);
        }
    };
    const handleChange = () => {
        setChecked(!checked);
    };
    const handlePrev = () => {
        setStep(step - 1);
    };

    return (
        <div className={"p-4"}>
            <p className={"h6 fw-bold"}>
                <i
                    className={step > 1 ? `bi bi-arrow-left px-4` : ""}
                    onClick={handlePrev}
                ></i>
                {`Step ${step} of 5`}
            </p>

            <div className="row gy-4 w-100 row-cols-1 mx-auto justify-content-start text-start align-items-center">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    {step === 1 && (
                        <form className="mt-3 row row-cols-1 gy-4" onSubmit={handleSubmit}>
                            <h2 className="fw-bold">Create your account</h2>
                            <div className="">
                                <input
                                    placeholder={"Name"}
                                    type="text"
                                    className="form-control py-3"
                                    id="name"
                                />
                            </div>
                            <div className="">
                                <input
                                    placeholder={"Email"}
                                    type="email"
                                    className="form-control py-3"
                                    id="email"
                                />
                            </div>

                            <Birthdate/>

                        </form>
                    )}

                    {step === 2 && (
                        <form className="row text-start align-items-center justify-content-center">
                            <h2 className="fw-bold">Customize your experience</h2>
                            <h5 className="fw-bold mt-4">
                                Track where you see Twitter content across the web
                            </h5>
                            <div className="row align-items-start justify-content-start text-start">
                                <div className={"col-10 p-0"}>
                                    <h5 className="p-0 fw-light col-10 fs-6">
                                        Twitter uses this data to personalize your experience.
                                        This web browsing history will never be stored with your name, email, or phone
                                        number.
                                    </h5>
                                </div>

                                <div className={"col p-0"}>
                                    <input
                                        type="checkbox"
                                        checked={checked}
                                        className="form-check-input text-primary"
                                        // style={{height: 20}}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="row row-cols-1 gy-4 w-100">
                                <p
                                    className="p-0 fs-6 fw-light text-secondary"
                                >
                                    By signing up, you agree to our
                                    <Link to="#">Terms</Link> ,
                                    <Link to="#">Privacy Policy</Link>
                                    and <Link to="#">Cookie Use</Link>.
                                    Twitter may use your contact information,
                                    including your email address and phone number for purposes
                                    outlined in our Privacy Policy.
                                    <Link to="#">Learn more</Link>
                                </p>
                            </div>
                        </form>
                    )}

                    {step === 3 && (
                        <form className="mt-3" onSubmit={handleSubmit}>
                            <h2 className="mb-5"><b>Create your account</b></h2>
                            <div className="my-1">
                                <label htmlFor="inputName" className="form-label">
                                    Name
                                </label>
                                <input type="text" className="form-control py-2" id="inputName" disabled value="safaa"/>
                            </div>
                            <div className="mb-3 ">
                                <label htmlFor="inputEmail" className="form-label">
                                    Email
                                </label>
                                <input type="email" className="form-control input-lg py-2" id="inputEmail"
                                       value="safaa@gmail.com" disabled/>
                            </div>
                            <div className="mb-3 ">
                                <label htmlFor="inputBrithData" className="form-label">
                                    Date of Birth</label>

                                <input type="text" className="form-control input-lg py-2" id="inputBrithData"
                                       value="17/01/2202" disabled/>

                            </div>
                            <div className="col">
                                <div class="modal-footer">
                                    <h6>By signing up, you agree to the <a href="#!">Terms</a> of Service and <a
                                        href="#!">Privacy
                                        Policy</a> .</h6>
                                </div>
                            </div>
                        </form>
                    )}
                    {step === 4 && (


                        <form className="mt-3" onSubmit={handleSubmit}>
                            <h2 className="mb-3"><b>We sent you a code</b></h2>
                            <h6 className="mb-5">Enter it below to verify safaaaabdelnaser66@gmail.com</h6>

                            <div className="mb-3 ">

                                <input type="text" className="form-control py-2 h-75" id="verify"
                                       placeholder="Verification Code"/>
                            </div>

                            <div className="mb-5" style={{paddingBottom: 100}}>
                                <a href="#!" style={{textDecoration: "none"}}>Didn't receive email?</a>
                            </div>

                        </form>
                    )}

                    {step === 5 && (

                        <form className="mt-3" onSubmit={handleSubmit}>
                            <h2 className="mb-3"><b>Thanks for register</b></h2>
                        </form>
                    )}
                    {step === 1 && (
                        <TwButton
                            type="button"
                            btnStyle={"outline-dark w-100"}
                            classes={"rounded-5 mt-4"}
                        >
                            Next
                        </TwButton>
                    )}
                    {step > 1 && step < 3 && (
                        <TwButton
                            type="submit"
                            btnStyle={"outline-dark w-100"}
                            classes={"rounded-5"}
                        >
                            Next
                        </TwButton>

                    )}
                    {step === 3 && (

                        <TwButton
                            type="submit"
                            btnStyle={"outline-dark w-100"}
                            classes={"rounded-5"}
                        >
                            Sign Up
                        </TwButton>
                    )}
                    {step === 4 && (
                        <TwButton
                            type="submit"
                            btnStyle={"outline-dark w-100"}
                            classes={"rounded-5"}
                        >
                            Next
                        </TwButton>
                    )}
                    {step === 5 && (
                        <TwButton
                            type="submit"
                            btnStyle={"outline-dark w-100"}
                            classes={"rounded-5"}
                        >
                            Finish
                        </TwButton>

                    )}
                </Form>
            </div>
        </div>);
}

export default SignupForm;
