import TwInput from "../../tw-input/tw-input";
import FormWrapper from "../FormWrapper";
import {useState} from "react";
import {Birthdate} from "../Stepper/Bithdata";
import {FormData} from "../SignUp";

const initialErrors = {
  email: {
    message: "Email is not valid",
    hasError: false
  },
  fullname: {
    message: "Name is required",
    hasError: false,
  }
}

function FormStepOne(props: { updateData: Function , data:FormData}) {
  const [errors, setErrors] = useState(initialErrors);

  const isValid = (name, input) => {
    setErrors(prev => {
      prev[name] = {...prev[name], hasError: !input?.checkValidity()}
      return {...prev}
    });
  }
  return (
    <FormWrapper title={"Create your account"}>
      <div className={"row row-cols-1 gx-1 gy-3"}>
        <TwInput
          id={"fullname"}
          labelText={"Name"}
          classes={errors.fullname.hasError ? "is-invalid" : ""}
          errorMessage={errors.fullname.message}
          other={{
            required: true,
            name: "fullname",
            value: props?.data.fullname,
            onBlur: (e) => isValid("fullname", e.target),
            onChange: (e) => {
              props?.updateData({fullname: e?.target.value})
            }
          }}
        />
        <TwInput
          id={"email"}
          labelText={"Email"}
          classes={errors.email.hasError ? "is-invalid" : ""}
          errorMessage={errors.email.message}
          other={{
            required: true,
            type: "email",
            pattern: "([a-zA-Z0-9].{3,})(@)([a-zA-Z0-9].{4,})\\.com",
            name: "email",
            value: props?.data.email,
            onBlur: (e) => isValid("email", e.target),
            onChange: (e) => {
              props?.updateData({email: e?.target.value})
            }
          }}
        />
        <div className={"mt-4"}>
          <Birthdate updateData={props?.updateData} data={props?.data}/>
        </div>
      </div>
    </FormWrapper>
  );
}

export default FormStepOne;
