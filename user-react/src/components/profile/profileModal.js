import React, {useEffect, useRef, useState} from "react";
import "./profile";
import TwModal from "../modal/modal";
import TwButton from "../tw-button/tw-button";
import TwInput from "../tw-input/tw-input";
import {Birthdate} from "../sign-up/Stepper/Bithdata";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import {useUserContext} from "../../context/userContext";
import LoadingSpinner from "../Loading/loading-spinner";
import {useDate} from "../../hooks/useDate";


const ProfileModal = () => {
  const {userInfo, setUserInfo} = useUserContext();
  const [toggleState, setToggleState] = useState(false);
  const form = useRef();
  const axiosPrivate = useAxiosPrivate();
  const imageInput = useRef();
  const coverImageInput = useRef();
  const [loading, setLoading] = useState(false);

  const {date, shortDate, setDate, formatDate, fromStringToObject} = useDate({})


  useEffect(() => {
    setDate(fromStringToObject(userInfo?.birthdate));
    // eslint-disable-next-line
  }, [setDate, userInfo?.birthdate])

  const updateProfile = (data) => {
    setLoading(true);
    const url = `${process.env.REACT_APP_BASE_URL}/api/user/profile/${userInfo?.username}`
    axiosPrivate.put(url, data, {headers: {"Content-Type": "multipart/form-data"}})
      .then(res => {
        if (res.status >= 200) {
          setUserInfo(res.data);
        }
      })
      .finally(() => setLoading(false))

  }


  const handelClickToggle = () => {
    setToggleState(!toggleState);
  }

  const handelSubmit = () => {
    const data = new FormData(form.current)
    const userInfo = {
      "fullname": data.get("fullname"),
      "birthdate": formatDate(),
      "profile.bio": data.get("bio"),
      "profile.image": data.get("profileImage"),
      "profile.cover_image": data.get("coverImage"),
      "profile.location": data.get("location"),
      "profile.website": data.get("website"),
    }
    updateProfile(userInfo);
  }

  return (
    loading ? <LoadingSpinner/> : <>
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
          <form ref={form} className="d-flex flex-column justify-content-center">
            <div className="card border-0">
              <input ref={coverImageInput} name={"coverImage"} type={"file"} hidden={true}/>
              <img
                role={"button"}
                onClick={() => coverImageInput.current?.click()}
                name={"image"}
                src={`${process.env.REACT_APP_BASE_URL}/api${userInfo?.profile?.cover_image}`}
                className="card-img-top profile-photo"
                alt="..."
                width="100"
              />
              <div className="card-body d-flex justify-content-between  ">
                <input ref={imageInput} name={"profileImage"} type={"file"} hidden={true}/>
                <img
                  role={"button"}
                  onClick={() => imageInput?.current?.click()}
                  src={`${process.env.REACT_APP_BASE_URL}/api${userInfo?.profile?.image}`}
                  className=" person-image mt-5"
                  alt="..."
                />
              </div>
            </div>
            <div className="row row-cols-1 mt-5  gy-4 gx-0">
              <TwInput id={"fullname"} labelText={"Name"} other={{
                name: "fullname",
                defaultValue: userInfo?.fullname,
              }
              }/>

              <TwInput id={"bio"} labeltext={"Bio"} textarea={true} other={{
                name: "bio",
                defaultValue: userInfo?.profile?.bio,
              }
              }>
                <label htmlFor={"bio"}>Bio</label>
              </TwInput>

              <TwInput id={"location"} labelText={"Location"} other={{
                name: "location",
                defaultValue: userInfo?.profile?.location,
              }
              }/>

              <TwInput id={"website"} labelText={"Website"} other={{
                name: "website",
                type: "url",
                defaultValue: userInfo?.profile?.website
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
                      updateData={(value) => {
                        setDate({...value.birthdate})
                      }}
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
                      {shortDate(fromStringToObject(userInfo.birthdate))}
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
