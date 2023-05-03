import React, {useCallback} from "react";
import {useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import Header from "../header/header";
import Chat from "../chat/Chat";
import { useTranslation } from "react-i18next";


function BuildChatRoom(props) {
  const navigate = useNavigate();
  const params = props.params;
  const location = useLocation()

  // const {getChatId} = useMessages();
  // const chatsObj = useSelector(state => state.chatV2.chatsObj)
  // const dispatch = useDispatch();

  const receiver = useSelector(state => {
    if (location.state?.key) {
      return state.chatV2.usersProfiles[location.state?.key]
    }
    return state.chatV2.usersProfiles[params.username]
  })

  const mainBack = useCallback(() => {
    navigate("/Message", {replace: true})
  }, [navigate])

  const handleBack = () => {
    if (props?.onBack) {
      return props.onBack({mainBack})
    }
    navigate("/Message", {replace: true})
  }
  const [t,setT] = useTranslation();

  // const handleStartCall = useCallback(() => {
  //   const {chatId} = getChatId({value: params.username, targetList: Object.values(chatsObj)})[0] || {}
  //   dispatch(setCallId(chatId))
  // }, [chatsObj, dispatch, getChatId, params.username])

  return (
    <div className={"w-100 "}>
      <div className={" position-sticky top-0 z-1"}>
        <Header noBorder>
          <Header.Top>
            <div dir="auto" className="d-flex p-2 justify-content-between w-100">
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
              {/*<AudioCall handleStartCall={handleStartCall}/>*/}
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
            {t('message.Followers')} : {receiver?.followers?.length}
          </span>
            <span
              style={{fontSize: 12}}
              className={"bg-secondary-subtle px-2 rounded-pill  fw-light "}
            >
            {t('message.Following')}: {receiver?.following?.length}
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


// const ringtone = require("../../assets/audio/ringtone.mp3");
//
// const modalId = "audio-modal";
//
//
// socket.on("connect_error", (err) => {
//   console.log(`connect_error due to ${err.message}`);
// });
//
// export function AudioCallModal() {
//
//   const {callId} = useSelector(state => state.audioCall);
//   const [stream, setStream] = useState()
//   const [receivingCall, setReceivingCall] = useState(false)
//   const [callerSignal, setCallerSignal] = useState()
//   const [callAccepted, setCallAccepted] = useState(false)
//   const [callEnded, setCallEnded] = useState(false)
//   const [name, setName] = useState("")
//
//   const userAudioRef = useRef()
//   const myAudioRef = useRef();
//   const ringtoneRef = useRef();
//   const connectionRef = useRef()
//
//   const getUserMedia = useCallback(async () => {
//     return navigator.mediaDevices.getUserMedia({audio: true});
//   }, [])
//
//   useEffect(() => {
//     if (receivingCall) {
//       ringtoneRef.current.play()
//     }
//   }, [receivingCall])
//
//   useEffect(() => {
//     if (callId) {
//       getUserMedia().then(stream => {
//         setStream(stream);
//          myAudioRef.current.srcObject = stream;
//       });
//
//       socket.emit('join', callId);
//     }
//
//     socket.on("callUser", (data) => {
//       setReceivingCall(true)
//       setName(data.name)
//       setCallerSignal(data.signal)
//     })
//
//   }, [callId, getUserMedia])
//
//   const callUser = (id) => {
//     const peer = new Peer({
//       initiator: true,
//       trickle: false,
//       stream: stream
//     })
//
//     peer.on("signal", (data) => {
//       socket.emit("callUser", {
//         userToCall: callId,
//         signalData: data,
//         from: callId,
//         name: 'Static name'
//       })
//     })
//
//     peer.on("stream", (incomingStream) => {
//       userAudioRef.current.srcObject = incomingStream
//     })
//
//     socket.on("callAccepted", (signal) => {
//       setCallAccepted(true)
//       peer.signal(signal)
//     })
//
//     connectionRef.current = peer
//   }
//
//   const answerCall = () => {
//     setCallAccepted(true)
//
//     const peer = new Peer({
//       initiator: false,
//       trickle: false,
//       stream: stream
//     })
//
//     peer.on("signal", (data) => {
//       socket.emit("answerCall", {signal: data, to: callId})
//     })
//
//     peer.on("stream", (stream) => {
//       userAudioRef.current.srcObject = stream
//     })
//
//     peer.signal(callerSignal)
//     connectionRef.current = peer
//   }
//
//   const leaveCall = () => {
//     setCallEnded(true)
//     connectionRef.current.destroy()
//   }
//
//
//   return (
//     <TwModal id={modalId} modalStyle={"modal-dialog-scrollable"}>
//       <TwModal.Header classes={"text-dark"} defaultHeader={true}/>
//       <TwModal.Body>
//         <audio ref={myAudioRef} playsInline controls muted autoPlay></audio>
//         <audio ref={userAudioRef} playsInline controls autoPlay></audio>
//         <audio ref={ringtoneRef} src={ringtone} playsInline hidden></audio>
//         <span>Hi</span>
//
//         <div className="call-button">
//           {callAccepted && !callEnded ? (
//             <button className="btn btn-secondary" onClick={leaveCall}>
//               End Call
//             </button>
//           ) : (
//             <button className="btn btn-primary" aria-label="call" onClick={callUser}>
//               Call
//             </button>
//           )}
//         </div>
//
//         <div>
//           {receivingCall && !callAccepted ? (
//             <div className="caller">
//               <h1>{name} is calling...</h1>
//               <button className={"btn btn-primary"} onClick={answerCall}>
//                 Answer
//               </button>
//             </div>
//           ) : null}
//         </div>
//       </TwModal.Body>
//     </TwModal>
//   )
// }
//
// function AudioCall(props) {
//
//   const handleStartCall = () => {
//     const fn = props?.handleStartCall || function () {
//     }
//     fn();
//   }
//
//   return (
//     <div>
//       <TwModal.ModalButton
//         withOutButton={true}
//         targetId={modalId}
//         btnStyle={"p-2 border-none"}
//         classes={"text-primary fw-light"}
//       >
//         <div
//           onClick={handleStartCall}
//           className="icon-button"
//         >
//           <div className="icon-bg i-bg-primary">
//             <i className="bi bi-mic"></i>
//           </div>
//         </div>
//       </TwModal.ModalButton>
//     </div>
//   )
//
// }
