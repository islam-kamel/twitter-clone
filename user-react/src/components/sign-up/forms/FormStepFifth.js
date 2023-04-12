import {useState} from "react";
import TwInput from "../../tw-input/tw-input";
import FormWrapper from "../FormWrapper";
import {FormData} from "../SignUp";


function FormStepFifth(props: { data: FormData, updateData: Function }) {
  const [show, setShow] = useState(false);

  const togglePasswordVisibility = () => setShow(!show);

  return (

    <FormWrapper title={"You'll need a @username and password"}>
      <div className={"row row-cols-1 gx-0 gy-4"}>
        <div>
          <TwInput
            id="username"
            labelText={"Username"}
            className="form-control py-3"
            other={{
              name: "username",
              placeholder: "start with @ ex. @username",
              required: true,
              minLength: 8,
              pattern: "(\\w{1,15})",
              onChange: (e) => {
                props?.updateData({...props?.data, username: e?.target.value})
              }
            }}
          />
        </div>
        <div className={"position-relative"}>
                    <span
                      className="p-0 fs-6 fw-light text-secondary"> Make sure it’s 8 characters or more. </span>
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
              top: "50%",
              right: "3%"
            }}
            className={!show ? "bi bi-eye" : "bi bi-eye-slash"}
            onClick={togglePasswordVisibility} id="PasswordShowing"
          ></i>
        </div>
      </div>
    </FormWrapper>
  );
}

export default FormStepFifth;
