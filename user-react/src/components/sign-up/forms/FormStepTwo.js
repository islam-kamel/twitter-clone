import {Link} from "react-router-dom";

function FormStepTwo() {

    return (

        <form className="row text-start align-items-center justify-content-center">
            <h2 className="fw-bold my-3">Customize your experience</h2>
            <h5 className="fw-bold mt-4 mb-4">
                Track where you see Twitter content across the web
            </h5>
            <div className="row align-items-start justify-content-start text-start">
                <div className={"col-10 p-0"}>
                    <h5 className="p-0 fw-light col-12 fs-6">
                        Twitter uses this data to personalize your experience.
                        This web browsing history will never be stored with your name, email, or phone
                        number.
                    </h5>
                </div>

                <div className={"mx-4 col p-0"}>
                    <input
                        type="checkbox"
                        // checked={true}
                        className="form-check-input text-light bg-primary"
                        style={{width: 20, height: 20}}
                    />
                </div>
            </div>
            <div className="row row-cols-1 gy-4 w-100">
                <p
                    className="p-0 fs-6 fw-light text-secondary mb-5"
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
    );
}

export default FormStepTwo;
