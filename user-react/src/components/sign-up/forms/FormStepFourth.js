import TwInput from "../../tw-input/tw-input";
import {Link} from "react-router-dom";

function FormStepFourth(props: { email: string }) {
  return (
    <div className="mt-3">
      <h2 className="mb-3"><b>We sent you a code</b></h2>
      <h6 className="mb-5">Enter it below to verify {props?.email}</h6>

      <div className="mb-3 ">

        <TwInput
          type="text"
          id="verify"
          labelText="Verification Code"
        />
      </div>

      <div className="mb-5" style={{paddingBottom: 100}}>
        <Link to="#" style={{textDecoration: "none"}}>Didn't receive email?</Link>
      </div>

    </div>
  );
}

export default FormStepFourth;
