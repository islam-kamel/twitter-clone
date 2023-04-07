import React, {useEffect, useRef, useState} from "react";
import "./profile";
import TwModal from "../modal/modal";
import TwButton from "../tw-button/tw-button";
import TwInput from "../tw-input/tw-input";
import {Birthdate} from "../sign-up/Stepper/Bithdata";
import {formatDate} from "../sign-up/SignUp";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import axios from "axios";


type BirthDate = { year: number, month: number, day: number }
const initialDate: BirthDate = {}

const ProfileModal = (props) => {
    const [date, setDate] = useState(initialDate)
    const [toggleState, setToggleState] = useState(false);
    const form = useRef();
    const axiosPrivate = useAxiosPrivate();
    const imageInput = useRef();
    const coverImageInput = useRef();

    const extractDate = () => {
        const date = new Date(props?.userInfo?.birthdate);
        return {day: date.getUTCDate(), year: date.getUTCFullYear(), month: date.getUTCMonth() + 1}
    }

    useEffect(() => {
        setDate(extractDate);
    }, [props.userInfo.birthdate])

    const updateProfile = (data) => {
        const url = `${process.env.REACT_APP_BASE_URL}/api/user/profile/${props?.userInfo?.username}`
        axiosPrivate.put(url, data, {headers: {"Content-Type": "multipart/form-data"}})
            .then(res => {
                console.log(res.data)
            })
    }


    const handelClickToggle = () => {
        setToggleState(!toggleState);
    }

    const handelSubmit = () => {
        const data = new FormData(form.current)
        const userInfo = {
            'fullname': data.get("fullname"),
            'birthdate': formatDate({birthdate: date}),
            'profile.bio': data.get("bio"),
            'profile.image': data.get("profileImage"),
            'profile.cover_image': data.get("coverImage"),
            'profile.location': data.get("location"),
        }
        updateProfile(userInfo);
    }

    return (
        <>
            <TwModal.ModalButton
                targetId={"editProfileModal"}
                btnStyle={"light"}
                title={"Edit Profile"}
                classes={"rounded-5 border"}
            />
            <TwModal id={"editProfileModal"} modalStyle={"rounded-4"}>
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
                        <TwButton other={{type: "submit", onClick: handelSubmit}} btnStyle={"dark btn-sm"}
                                  classes={"rounded-5 mt-1"}>Save</TwButton>
                    </div>
                </TwModal.Header>
                <TwModal.Body classes={"overflow-scroll"}>
                    <form  ref={form} className="d-flex flex-column justify-content-center">
                        <div className="card border-0">
                            <input ref={coverImageInput} name={"coverImage"} type={"file"} hidden={true}/>
                            <img
                                onClick={() => coverImageInput.current?.click()}
                                name={"image"}
                                src={`${process.env.REACT_APP_BASE_URL}/api${props?.userInfo?.profile?.cover_image}`}
                                className="card-img-top profile-photo"
                                alt="..."
                                width="100"
                            />
                            <div className="card-body d-flex justify-content-between  ">
                                <input ref={imageInput} name={"profileImage"} type={"file"} hidden={true}/>
                                <img
                                    onClick={() => imageInput?.current?.click()}
                                    src={`${process.env.REACT_APP_BASE_URL}/api${props?.userInfo?.profile?.image}`}
                                    className=" person-image mt-5"
                                    alt="..."
                                />
                            </div>
                        </div>
                        <div className="row row-cols-1 mt-5  gy-4 gx-0">
                            <TwInput id={"fullname"} labelText={"Name"} other={{
                                name: "fullname",
                                defaultValue: props?.userInfo?.fullname,
                                onChange: () => {
                                }
                            }
                            }/>

                            <TwInput id={"bio"} labeltext={"Bio"} textarea={true} other={{
                                name: "bio",
                                defaultValue: props?.userInfo?.profile?.bio,
                                onChange: () => {
                                }
                            }
                            }>
                                <label htmlFor={"bio"}>Bio</label>
                            </TwInput>

                            <TwInput id={"location"} labelText={"Location"} other={{
                                name: "location",
                                defaultValue: props?.userInfo?.profile?.location,
                            }
                            }/>

                            <TwInput id={"website"} labelText={"Website"} other={{
                                defaultValue: props?.userInfo?.profile?.website, onChange: () => {
                                }
                            }}/>

                            <div className="mt-4">
                                {toggleState ? (
                                    <div>
                                        <i
                                            role={"button"}
                                            onClick={handelClickToggle}
                                            className={"bi bi-arrow-left"}
                                        ></i>
                                        <Birthdate
                                            updateData={(value) => setDate({...value.birthdate})}
                                            data={{birthdate: {...date}}}
                                        />
                                    </div>
                                ) : (
                                    <div role={"button"}>
                                        <p className="text-muted mb-2">Birth date.</p>
                                        <p
                                            onClick={handelClickToggle}
                                            className="fs-5"
                                        >
                                            {new Date(date.year, date.month, date.day).toLocaleString(true, {dateStyle: "medium"})}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </form>
                </TwModal.Body>
            </TwModal>
        </>
    );


}

export default ProfileModal;
