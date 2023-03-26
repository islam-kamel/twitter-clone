import { useState } from 'react';
import { Form, Button, ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Stepper.css'
import { Birthdate } from './Bithdata';
function SignupForm() {
  const [step, setStep] = useState(1);
  const [validated, setValidated] = useState(false);
  const [checked, setChecked] = useState(true);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
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

  return (<>
    <h5 ><i class={step > 1 ? `bi bi-arrow-left px-4` : ''} onClick={handlePrev}></i><b>{`Step ${step} of 5`}</b></h5>
    <div className='d-flex flex-column stepper'>
      <Form noValidate validated={validated} onSubmit={handleSubmit} >


        {step === 1 && (


          <form className='mt-3' onSubmit={handleSubmit}>
            <h2 className="mb-5"><b>Create your account</b></h2>
            <div className="my-1">
              <label htmlFor="inputName" className="form-label">
                Name
              </label>
              <input type="text" className="form-control py-2" id="inputName" />
            </div>
            <div className="mb-3 ">
              <label htmlFor="inputEmail" className="form-label">
                Email
              </label>
              <input type="email" className="form-control input-lg py-2" id="inputEmail" />
            </div>
            <div className="mb-3 ">
              <Birthdate />

            </div>

          </form>
        )}

        {step === 2 && (
          <form className='row'>
            <div className='d-flex flex-column  stepper1'>
            

              <h2 className="mb-5 my-3"><b>Customize your experience</b></h2>
              <div className="my-1 me-5 ">
                <h4 className="me-3 "><b>Track where you see Twitter content across <br />the web</b></h4>
              </div>

              <div className="my-1 row ms-5">
                <h5 className='col-md-9 ms-5'>Twitter uses this data to personalize your experience. This web browsing history will never be stored with your name, email, or phone number.</h5>

                <input type="checkbox" checked={checked} className='h-25 col-md-1' onChange={handleChange} />


              </div>
              <div className="mb-3 my-1 row ms-5">
                <p className='col-md-8 ms-5'>By signing up, you agree to our <a href='#!'>Terms</a> ,<a href='#!'>Privacy Policy</a> and <a href='#!'>Cookie Use</a> . Twitter may use your contact information, including your email address and phone number for purposes outlined in our Privacy Policy. <a href='#!'>Learn more</a></p>
              </div>
            </div>
          </form>
        )}

        {step === 3 && (
          <form className='mt-3' onSubmit={handleSubmit}>
            <h2 className="mb-5"><b>Create your account</b></h2>
            <div className="my-1">
              <label htmlFor="inputName" className="form-label">
                Name
              </label>
              <input type="text" className="form-control py-2" id="inputName" disabled value="safaa" />
            </div>
            <div className="mb-3 ">
              <label htmlFor="inputEmail" className="form-label">
                Email
              </label>
              <input type="email" className="form-control input-lg py-2" id="inputEmail"
                value="safaa@gmail.com" disabled />
            </div>
            <div className="mb-3 ">
              <label htmlFor="inputBrithData" className="form-label">
                Date of Birth</label>

              <input type="text" className="form-control input-lg py-2" id="inputBrithData"
                value='17/01/2202' disabled />

            </div>
            <div className="col">
              <div class="modal-footer">
             <h6>By signing up, you agree to the <a href="#!">Terms</a> of Service and <a href="#!">Privacy Policy</a> .</h6>
             {/* <p>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use. Twitter may use your contact information, including your email address and phone number for purposes outlined in our Privacy Policy, like keeping your account secure and personalizing our services, including ads. Learn more. Others will be able to find you by email or phone number, when provided, unless you choose otherwise here.</p> */}
              </div>
            </div>
          </form>
        )}
{step === 4 && (


<form className='mt-3' onSubmit={handleSubmit}>
  <h2 className="mb-3"><b>We sent you a code</b></h2>
  <h6 className="mb-5">Enter it below to verify safaaaabdelnaser66@gmail.com</h6>
  
  <div className="mb-3 ">
    
    <input type="text" className="form-control py-2 h-75" id="verify" placeholder='Verification Code'/>
  </div>
  
  <div className="mb-5" style={{paddingBottom:100}}>
    <a href='#!' style={{textDecoration:'none'}}>Didn't receive email?</a>
  </div>
  
  
</form>
)}

{step === 5 && (


<form className='mt-3' onSubmit={handleSubmit}>
  <h2 className="mb-3"><b>Thanks for register</b></h2>
  
  
</form>
)}
        {step === 1 && (
          <Button variant="secondary" type="submit" className='btn btn-outline-dark  py-2 my-4 rounded-5 col-md-12 col-7 mt-5' >
            Next
          </Button>
        )}
        {step > 1 && step < 3 && (
          <>

            <div className='row'>
              <div className='col-md-1'></div>
              <div className='ms-5 ps-5 col-md-9'><Button variant="secondary" type="submit" className='btn btn-outline-dark  py-2 my-4 rounded-5  col-10 mt-5 px-5'>
                Next
              </Button></div>
            </div>


          </>
        )}
        {step === 3 && (
          <>
            <Button variant="primary" type="submit" className='btn btn-outline-ligth  py-2 my-4 rounded-5 col-md-12 col-7 mt-5' >
            Sign up
          </Button>
          
          </>
        )}
         {step === 4 && (
          <Button variant="secondary" type="submit" className='btn btn-outline-dark  py-2 my-4 rounded-5 col-md-12 col-7 mt-5' >
            Next
          </Button>
        )}
          {step === 5&& (
          <Button variant="secondary" type="submit" className='btn btn-outline-dark  py-2 my-4 rounded-5 col-md-12 col-7 mt-5' >
            Finsh
          </Button>
        )}
      </Form>
    </div> </>);
}

export default SignupForm;
