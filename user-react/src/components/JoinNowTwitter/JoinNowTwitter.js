import React from "react";
import Modal from "react-bootstrap/Modal";

import "./JoinNowTwitter.css"
import TwModal from "../modal/modal";

function JoinNowTwitterModal(props) {
  return (<Modal
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

        <div className="col-md-2">
          <i class="bi bi-twitter text-primary fs-1"></i>
        </div>


        <Modal.Title id="contained-modal-title-vcenter">

        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-dialog-scrollable" style={{maxHeight: "calc(105vh - 180px)", overflowY: "auto"}}>
        <div className="d-flex flex-column  NowTwitter-signup">
          <h2 className="card-title me-4 my-3"><b>Join Twitter today</b></h2>

          <a href="#!" className="btn btn-outline-dark  py-2 my-3 rounded-5 col-md-6 col-7"><i
            class="fab fa-google fa-1x "></i> Sign in with Google</a>
          <a href="#!" className="btn btn-outline-dark  px-5 py-2 my-3 rounded-5 col-md-6 col-7"><i
            class="bi bi-apple text-dark "></i> Sign in with Apple</a>

          <hr className="hrLoginForm my-4"/>
          <a href="#!" className="btn btn-outline-dark  px-5 py-2 my-3 rounded-5 col-md-6 col-7"> <b>Create Account</b></a>

          <br/>
          <p className="h6 ms-3 col-md-6 my-3">By signing up, you agree to the <a a
                                                                                  href="https://twitter.com/en/tos"> Terms
            of Service</a>and <a href="https://twitter.com/en/privacy"> Privacy Policy</a>, including <a
            href="https://help.twitter.com/en/rules-and-policies/twitter-cookies">Cookie Use.</a></p>

          <p className="my-4 me-5 mb-5">Have an account already?
            <div className={"mt-5 my-5 pt-3"}>
              <p className="text-secondary-emphasis fw-light ">
                Don't have an account ? {" "}
                <TwModal.ModalButton
                  targetId={"login-modal"}
                  btnStyle={"btn-link p-2 border-none"}
                  classes={"text-primary fw-light"}
                  title={"Log in "}
                />
              </p>
            </div>
          </p>
          <br/>
          <br/>


        </div>
      </Modal.Body>
      {/* </Modal.Dialog> */}
    </Modal>
  );
}

function JoinNowTwitter() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>


      <a className="btn btn-light rounded-5" onClick={() => setModalShow(true)}><b>Sign up</b></a>

      <JoinNowTwitterModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default JoinNowTwitter;
