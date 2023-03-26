import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import SignupForm from '../Stepper/Stepper';

function SignUpModal(props) {
  return (
    <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered

        >
            {/* <Modal.Dialog > */}
            <Modal.Header>

                <div className="col-md-2">
                    <button type="button" className="btn-close" onClick={props.onHide}></button>
                </div>


                <Modal.Title id="contained-modal-title-vcenter">

                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-dialog-scrollable"
                        style={{maxHeight: "calc(105vh - 180px)", overflowY: "auto"}}>
               

               <SignupForm/>
            </Modal.Body>
            {/* </Modal.Dialog> */}
        </Modal>
  );
}


function SignUp(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      {(
          props['customText']
              ? <a className='btn btn-light rounded-5' onClick={() => setModalShow(true)}><b>{props['customText']}</b></a>
              : <a className='btn btn-light rounded-5' onClick={() => setModalShow(true)}><b>{props['customText']}</b></a>)}

      {/* <a href="#!" className='btn btn-outline-light mx-3 rounded-5' onClick={() => setModalShow(true)}>Log in</a> */}

      <SignUpModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}


export default SignUp;


