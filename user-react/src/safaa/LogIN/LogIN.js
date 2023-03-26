import React from 'react';
import {Modal} from "react-bootstrap";
import './LogIN.css'
function LogINModal(props) {
    return (<Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered

    >
        {/* <Modal.Dialog > */}
        <Modal.Header >

            <div className='col-md-2'><button type="button" className="btn-close" onClick={props.onHide}></button></div>

            <div className='col-md-2'>
                <i class="bi bi-twitter text-primary fs-1"></i>
            </div>


            <Modal.Title id="contained-modal-title-vcenter" >

            </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-dialog-scrollable" style={{ maxHeight: 'calc(105vh - 180px)', overflowY: 'auto' }}>
            <div className='d-flex flex-column  login-Form'>
                <h2 className=''><b>Sign in to Twitter</b></h2><br />
                <a href="#!" className='btn btn-outline-secondary   py-2 my-3 rounded-5 col-md-4 col-7'><i class="fab fa-google fa-1x "></i> Sign in with Google</a>
                <a href="#!" className='btn btn-outline-secondary  px-5 py-2 my-3 rounded-5 col-md-4 col-7'><i class="bi bi-apple text-dark "></i> Sign in with Apple</a>


                <hr  className='hrLoginForm my-4' />
                {/* <p style={{ bottom: '0' ,position:'absolute'}} >or</p> */}

                <br />
                 {/* input box */}
                 <form className='px-5'>
                 <div className="mb-3 col-md-12  col-12 ms-3" >
                        <label for="exampleInputEmail1" class="form-label">Email , Phone or Username</label>
                        <input type="email" className="form-control px-5" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                <div className='mb-3 col-md-12  col-12 ms-3 '>
                        <a href="#!" className='btn btn-dark  px-5 py-2 my-3 rounded-5 col-md-12 col-12'><b>Next</b></a>
                        <br />
                        <a href="#!" className='btn btn-outline-secondary  px-5 py-2 my-3 rounded-5 col-md-12 col-12'>Forget Password?</a>
                        <br/>
                        <div className='col-md-10'>
                            <p className="my-4">Don't have an account? <a href="#!" className="text-primary-50">Sign Up</a>
                            </p>
                            <br/>
                        </div>
                    </div>
                    </form>




            </div>
        </Modal.Body>
        {/* </Modal.Dialog> */}
    </Modal>
    );
}

function LogIN() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>

            <a href="#!" className='btn btn-outline-light mx-3 rounded-5' onClick={() => setModalShow(true)}>Log in</a>

            <LogINModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default LogIN;
