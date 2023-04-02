import React, {useState} from "react";
import "./profile";
import TwModal from "../modal/modal";
import TwButton from "../tw-button/tw-button";
import TwInput from "../tw-input/tw-input";

const ProfileModal = (props) => {

    const [text, setText] = useState(() => {
        const storedBio = sessionStorage.getItem("text");
        return storedBio !== null ? JSON.parse(storedBio) : "..";
    });

    const [name, setName] = useState(() => {
        const storedName = sessionStorage.getItem("name");
        return storedName !== null ? JSON.parse(storedName) : "..";
    });

    function handleName(name) {
        setName(name.target.value);
    }

    function handleBio(event) {
        setText(event.target.value);
    }


    console.log(props);

    return (
        <>
            <TwModal.ModalButton
                targetId={"editProfileModal"}
                btnStyle={"light"}
                title={"Edit Profile"}
                classes={"rounded-5 border"}
            />
            <TwModal id={"editProfileModal"}>
                <TwModal.Header>
                    <div className={"d-flex w-100 mt-2 align-items-center justify-content-between"}>
                        <div className={"d-flex align-items-center"}>
                            <i
                                role={"button"}
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                className={"bi bi-x fs-4 me-3"}
                            ></i>
                            <span className={"fw-bold"}>Edit Profile</span>
                        </div>
                        <TwButton btnStyle={"dark btn-sm"} classes={"rounded-5 mt-1"}>Save</TwButton>
                    </div>
                </TwModal.Header>
                <TwModal.Body classes={"overflow-scroll"}>
                    <form className="d-flex flex-column justify-content-center">
                        <div className="card border-0">
                            <img
                                src="https://th.bing.com/th/id/OIP.nPKODoaHaadqnZgghUxH4wHaEK?pid=ImgDet&rs=1"
                                className="card-img-top profile-photo"
                                alt="..."
                                width="100"
                            />
                            <div className="card-body d-flex justify-content-between  ">
                                <img
                                    src="https://th.bing.com/th/id/OIF.mAtJExIDFFm2zNDsIaVirA?pid=ImgDet&rs=1"
                                    className=" person-image mt-5"
                                    alt="..."
                                />
                            </div>
                        </div>
                        <div className="row row-cols-1 mt-5  gy-4 gx-0">
                            <TwInput id={"username"} labelText={"Name"}/>

                            <TwInput id={"bio"} labeltext={"Bio"} textarea={true}>
                                <label htmlFor={"bio"}>Bio</label>
                            </TwInput>

                            <TwInput id={"location"} labelText={"Location"} />

                            <TwInput id={"website"} labelText={"Website"} />

                            <div className="mt-4">
                                <p className="text-secondary ">Birth date.</p>
                                <p className="fs-5 ">June 28, 1997</p>
                            </div>

                        </div>
                    </form>
                </TwModal.Body>
            </TwModal>
        </>
    );


}

export default ProfileModal;
