import io from "socket.io-client";
import Peer from "simple-peer";
import {useEffect, useRef, useState} from "react";

const socket = io.connect("http://localhost:3008")

export default function VideoCall() {
  const [me, setMe] = useState("");
  const [stream, setStream] = useState(null);
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState("");
  const [callerSignal, setCallerSignal] = useState(null);
  const [callAccepted, setCallAccepted] = useState(false);
  const [idToCall, setIdToCall] = useState("");
  const [callEnded, setCallEnded] = useState(false);
  const [name, setName] = useState("");

  const myVideo = useRef(null);
  const userVideo = useRef(null);
  const connectionRef = useRef(null);

  const cameraNumber = 0


  const getListOfVideoInputs = async () => {
    // Get the details of audio and video output of the device
    const enumerateDevices = await navigator.mediaDevices.enumerateDevices();

    //Filter video outputs (for devices with multiple cameras)
    return enumerateDevices.filter((device) => device.kind === "videoinput");
  };

  const initializeMedia = async () => {
    // this.setState({imageDataURL: null});

    if (!("mediaDevices" in navigator)) {
      navigator.mediaDevices = {};
    }

    if (!("getUserMedia" in navigator.mediaDevices)) {
      navigator.mediaDevices.getUserMedia = function (constraints) {
        var getUserMedia =
          navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.mediaDevices;

        if (!getUserMedia) {
          return Promise.reject(new Error("getUserMedia Not Implemented"));
        }

        return new Promise((resolve, reject) => {
          getUserMedia.call(navigator, constraints, resolve, reject);
        });
      };
    }

    //Get the details of video inputs of the device
    const videoInputs = await getListOfVideoInputs();

    //The device has a camera
    if (videoInputs.length) {
      navigator.mediaDevices
        .getUserMedia({
          video: {
            deviceId: {
              exact: videoInputs[cameraNumber].deviceId,
            },
          },
        })
        .then((stream) => {
          myVideo.current.srcObjcet = stream;
          setStream(stream)
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      alert("The device does not have a camera");
    }
  };


  useEffect(() => {
    // navigator.mediaDevices.getUserMedia({audio: true})
    //   .then((stream) => {
    //     setStream(stream);
    //     myVideo.current.srcObject = stream;
    //   });
    initializeMedia()
    socket.on("me", (id) => {
      setMe(id)
    });

    socket.on("callUser", (data) => {
      setReceivingCall(true);
      setCaller(data.from);
      setName(data.name);
      setCallerSignal(data.signal);
    });
  }, [])

  const callUser = (id) => {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: stream
    });

    peer.on("signal", (data) => {
      socket.emit("callUser", {
        userToCall: id,
        signalData: data,
        from: me,
        name: name
      })
    })

    peer.on("stream", (stream) => {
      // userVideo.current.srcObject = stream;
    })

    socket.on("callAccepted", (signal) => {
      setCallAccepted(true);
      peer.signal(signal);
    })

    connectionRef.current = peer;
  }

  const answerCall = () => {
    setCallAccepted(true);
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: stream
    });

    peer.on("signal", (data) => {
      socket.emit("answerCall", {signal: data, to: caller});
    });

    peer.on("stream", (stream) => {
      userVideo.current.srcObject = stream
    })

    peer.signal(callerSignal);
    connectionRef.current = peer;
  }

  const leaveCall = () => {
    setCallEnded(true);
    connectionRef.current.destroy()
  }

  return (
    <div className={"container mt-5 "}>
      <div className={"alert alert-primary border-primary-subtle"}>
        <span className={"text-primary-emphasis"}>{me}</span>
      </div>
      <div className={"d-flex justify-content-center align-items-center"}>
        <div className={"card"}>
          <div className={"card-body"}>
            {stream && myVideo.current?.srcObjcet && <video playsInline ref={myVideo} autoPlay className={"card-image"}/>}
          </div>
        </div>
        <div className={"card"}>
          <div className={"card-body"}>
            {callAccepted && !callEnded ?
              <video controls playsInline ref={userVideo} autoPlay className={"card-image"}/> : null}
          </div>
        </div>
      </div>
      <div className={"card"}>
        <div className={"card-body"}>
          <input value={name} className={"form-control"} placeholder={"Name"}
                 onChange={(e) => setName(e.target.value)}/>
          <input value={idToCall} className={"form-control"} placeholder={"Id to Call"}
                 onChange={(e) => setIdToCall(e.target.value)}/>
          <div className={"d-flex"}>
            {callAccepted && !callEnded ? (
                <button className={"btn btn-danger"} onClick={leaveCall}>EndCall</button>
              )

              : (
                <button className={"btn btn-primary"} onClick={() => callUser(idToCall)}>Call</button>
              )
            }
          </div>
        </div>
        <div className={"card-header"}>{idToCall}</div>
      </div>
      <div className={"card"}>
        {receivingCall && !callAccepted ? (
          <div className={"card-body"}>
            <h1>{name} is calling....</h1>
            <button className={"btn btn-success"} onClick={answerCall}>AnswerCall</button>
          </div>
        ) : null}
      </div>
    </div>
  )
}
