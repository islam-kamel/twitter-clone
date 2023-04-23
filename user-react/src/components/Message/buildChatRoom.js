import {useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import Header from "../header/header";
import Chat from "../chat/Chat";


function BuildChatRoom(props) {
  const navigate = useNavigate();
  const params = props.params;
  const location = useLocation()

  const receiver = useSelector(state => {
    if (location.state?.key) {
      return state.chatV2.usersProfiles[location.state?.key]
    }
    return state.chatV2.usersProfiles.filter(user => user.username === params.username)[0]
  })
  const handleBack = () => {
    if (props?.onBack) {
      return props.onBack()
    }
    navigate("/Message")
  }
  return (
    <div className={"w-100 "}>
      <div className={" position-sticky top-0 z-1"}>
        <Header noBorder>
          <Header.Top>
            <div className="d-flex p-2 justify-content-between w-100">
              <div className={"d-flex align-items-center "}>
                <i onClick={handleBack}
                   role={"button"}
                   className="bi bi-arrow-left cursor-pointer bi-fw-bolder fs-4"
                ></i>
                <div className={"d-flex flex-column ms-3"}>
                  <span className={"fs-6 fw-blod"}>{receiver?.fullname}</span>
                  <span className={"text-muted fw-light fs-6"}>@{receiver?.username}</span>
                </div>

              </div>
              <div className="icon-button">
                <div className="icon-bg i-bg-primary">
                  <i className="bi bi-exclamation-circle"></i>
                </div>
              </div>
            </div>
          </Header.Top>
        </Header>
      </div>

      <div>
        <div className="bg-hover py-3 d-flex justify-content-center align-items-center flex-column">
          <img
            className={"tw-profile-image rounded-circle"}
            src={`${receiver?.profile?.image ? process.env.REACT_APP_MEDIA_BASE_URL + receiver?.profile.image : "https://picsum.photos/200/300?grayscale"}`}
            alt="avatar"
          />
          <div className={"d-flex flex-column align-items-center justify-content-center mt-2"}>
            <h6 className="m-0"> {receiver?.fullname}</h6>
            <span className={"text-muted"}>@{receiver?.username}</span>
          </div>
          <p className={"text-center fs-6 fw-light text-muted"}>
            {receiver?.profile?.bio}
          </p>
          <div className={"d-flex align-items-center justify-content-center"}>
          <span
            style={{fontSize: 12}}
            className={"bg-secondary-subtle px-2 rounded-pill  fw-light me-3"}
          >
            Followers: {receiver?.followers?.length}
          </span>
            <span
              style={{fontSize: 12}}
              className={"bg-secondary-subtle px-2 rounded-pill  fw-light "}
            >
            Following: {receiver?.following?.length}
          </span>
          </div>
        </div>
        <div className={"p-3 h-100 position-relative"}>
          <Chat username={params.username}/>
        </div>
      </div>
    </div>
  );

}

export default BuildChatRoom;
