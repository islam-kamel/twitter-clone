import React, {useState} from "react";
import TwModal from "../modal/modal";
import useMultiStepForm from "../../hooks/useMultiStepForm";
import FormStepOne from "./forms/FormStepOne";
import TwButton from "../tw-button/tw-button";
import FormStepTwo from "./forms/FormStepTwo";
import FormStepThird from "./forms/FormStepThird";
import FormStepFifth from "./forms/FormStepFifth";
import LoadingSpinner from "../Loading/loading-spinner";
import axios from "../../apiProvider/axios";
import useAuth from "../../hooks/useAuth";
import {useDate} from "../../hooks/useDate";


const initialData = {
  fullname: "",
  email: "",
  birthdate: {
    day: "",
    month: "",
    year: ""
  },
  password: ""
}

// export function formatDate(data) {
//     const {year, month, day} = data.birthdate
//     return `${year}-${month}-${day}`;
// }

export default function SignUp() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [data, setData] = useState(initialData)
  const [loading, setLoading] = useState(false)
  const {login} = useAuth();
  const {formatDate} = useDate();

  const updateDate = (newData) => {
    setData({...data, ...newData})
  }
  const goto = (index) => {
    goTo(index)
  }

  const {
    step,
    steps,
    currenStepIndex,
    isFirstStep,
    isLastStep,
    back,
    next,
    goTo,
  } = useMultiStepForm([
    <FormStepOne updateData={updateDate} data={data}/>,
    <FormStepTwo/>,
    <FormStepThird data={data} goto={goto}/>,
    <FormStepFifth data={data} updateData={updateDate}/>
  ])

  const getHeader = () => {
    return (
      <div className={"fs-5 fw-bolder"}>
        {isFirstStep
          ? (
            <TwModal.ModalButton targetId={"signup-modal"} withOutButton={true}>
              <i style={{WebkitTextStroke: 1}} role={"button"} className={"bi bi-x me-4"}></i>
            </TwModal.ModalButton>
          ) : (
            <i role={"button"} onClick={back} className={"bi bi-arrow-left me-4"}></i>
          )}
        <span>Step {currenStepIndex + 1}</span> of <span>{steps.length}</span>
      </div>
    );
  }

  const isFormValid = () => {
    const form = document.forms["signInForm"];
    setIsDisabled(!form.checkValidity())
  }

  const handelSubmit = (event) => {
    event.preventDefault();
    if (isLastStep) {
      const date = formatDate(data.birthdate);
      setLoading(true)
      console.log(date)
      axios.post("/api/user/register", {...data, birthdate: date})
        .then(async res => {
          await login({username: data.username, password: data.password})
        })
        .catch(error => {
          console.log(error.message)
        })
        .finally(() => setLoading(false));
    }
    next();
  }

  return (
    <form
      onChange={isFormValid}
      name={"signInForm"}
      className={"has-validation "}
      onSubmit={handelSubmit}
    >
      <TwModal id={"signup-modal"} modalStyle={"modal-dialog-scrollable"}>
        <div className={"mt-3"}>
          <TwModal.Header> {getHeader()} </TwModal.Header>
        </div>
        <TwModal.Body classes={"mx-5"}>
          {loading ? <LoadingSpinner/> : (
            <>
              {step}
              {isLastStep ? (
                <TwButton
                  btnStyle={"outline-dark"}
                  classes={"rounded-5 w-100"}
                  other={{
                    type: "submit",
                    disabled: isDisabled
                  }}
                >
                  Finish
                </TwButton>
              ) : (
                <TwButton
                  btnStyle={"outline-dark"}
                  classes={"rounded-5 w-100"}
                  other={{
                    type: "submit",
                    disabled: isDisabled
                  }}
                >
                  Next
                </TwButton>
              )
              }
            </>
          )}

        </TwModal.Body>
      </TwModal>

    </form>
  );
}
