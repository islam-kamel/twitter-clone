import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";

function SignUpModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    SignUp
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


function SignUp(props) {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            {(
                props["customText"]
                    ? <a className="btn btn-light rounded-5"
                         onClick={() => setModalShow(true)}><b>{props["customText"]}</b></a>
                    : <a className="btn btn-light rounded-5" onClick={() => setModalShow(true)}><b>Sign up</b></a>)}

            <a href="#!" className="btn btn-outline-light mx-3 rounded-5" onClick={() => setModalShow(true)}>Log in</a>

            <SignUpModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}


export default SignUp;


