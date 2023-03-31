import {useEffect, useState} from "react";
import TwButton from "../../tw-button/tw-button";
import FormStepOne from "../forms/FormStepOne";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Stepper.css"
import FormStepTwo from "../forms/FormStepTwo";
import FormStepThird from "../forms/FormStepThird";
import FormStepFourth from "../forms/FormStepFourth";
import FormStepFifth from "../forms/FormStepFifth";


/**
 * {
 *   "username": "islam.kamel",
 *   "email": "islam.kamel@agr.svu.edu.eg",
 *   "date_of_birth": "1998-07-13",
 *   "password": "islamkamel"
 * }
 *
 * */

function SubmitButton(props: { callback: Function, title: string, disabled: boolean }) {
    console.log(props.disabled)
    return <TwButton
        type="submit"
        btnStyle={"outline-dark w-100"}
        classes={"rounded-5"}
        other={{
            onClick: props?.callback,
            disabled: props?.disabled
        }}
    >
        {props?.title}
    </TwButton>
}


function SignupForm() {
    const [step, setStep] = useState(1);
    const [validated, setValidated] = useState(true);
    const [data, setData] = useState({});
    const [formState, setFormState] = useState(false);

    const handleNext = () => {};

    const handlePrev = () => {};

    const getMonthName = (i) => new Date(`${i}/1/1970`).toLocaleString("default", {month: "short"})

    const saveMainData = () => {}

    const handelSubmit = (event) => {

    }

    return (
        <div className={"p-4"}>
            <p className={`h6 fw-bold position-fixed  mb-5  ${step >= 1 && step <= 5 ? "d-block" : "d-none"}`}>
                <i
                    className={step > 1 && step < 5 ? `bi bi-arrow-left px-4` : ""}
                    onClick={handlePrev}
                ></i>
                {`Step ${step} of 5`}
            </p>

            <div className="row gy-4 w-100 row-cols-1 mx-auto justify-content-start text-start align-items-center">
                <div>
                    {step === 1 && (
                        <FormStepOne
                            handelSubmit={handelSubmit}
                            formState={setFormState}
                        >
                            <SubmitButton callback={handleNext} title={'Next'} disabled={formState}></SubmitButton>
                        </FormStepOne>
                    )}

                    {step === 2 && <FormStepTwo/>}
                    {step === 3 &&
                        <FormStepThird fullname={data.fullname} email={data.email} birthdate={data.birthdate}/>}
                    {step === 4 && <FormStepFourth email={data?.email}/>}
                    {step === 5 && <FormStepFifth handleSubmit={() => console.log("Step 5")}/>}
                    <br/>
                    {(step >= 2 && step < 3) && (
                        <TwButton
                            type="button"
                            btnStyle={"outline-dark w-100"}
                            classes={"rounded-5"}
                            other={{
                                onClick: handleNext
                            }}

                        >
                            Next
                        </TwButton>

                    )}
                    {step === 3 && (

                        <TwButton
                            type="submit"
                            btnStyle={"primary w-100"}
                            classes={"rounded-5"}
                            other={{onClick: handleNext}}
                        >
                            Sign Up
                        </TwButton>
                    )}
                    {step === 4 && (
                        <TwButton
                            type="button"
                            btnStyle={"outline-dark w-100"}
                            classes={"rounded-5"}
                            other={{onClick: handleNext}}
                        >
                            Next
                        </TwButton>
                    )}
                    {step === 5 && (
                        <TwButton
                            type="submit"
                            btnStyle={"outline-dark w-100"}
                            classes={"rounded-5"}
                            other={{
                                onClick: () => {}
                            }}
                        >
                            Finish
                        </TwButton>
                    )}
                </div>
            </div>
        </div>);
}

export default SignupForm;
