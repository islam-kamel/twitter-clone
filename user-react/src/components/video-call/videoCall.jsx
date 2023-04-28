import io from "socket.io-client";
import Peer from "simple-peer";
import {useEffect, useRef, useState} from "react";
import {socket} from "../../utility/utils";
// const socket = io.connect("http://192.168.1.10:3008")

export default function VideoCall() {
  // const [me, setMe] = useState("")
  // const [stream, setStream] = useState()
  // const [receivingCall, setReceivingCall] = useState(false)
  // const [caller, setCaller] = useState("")
  // const [callerSignal, setCallerSignal] = useState()
  // const [callAccepted, setCallAccepted] = useState(false)
  // const [idToCall, setIdToCall] = useState("")
  // const [callEnded, setCallEnded] = useState(false)
  // const [name, setName] = useState("")
  //
  // const myVideo = useRef(null)
  // const userVideo = useRef()
  // const connectionRef = useRef()
  //
  //
  // useEffect(() => {
  //
  //   navigator.mediaDevices.getUserMedia({audio: true}).then((stream) => {
  //     setStream(stream)
  //     if (myVideo.current) {
  //       myVideo.current.srcObject = stream;
  //     }
  //   });
  //
  //   socket.on("me", (id) => {
  //     setMe(id)
  //   })
  //
  //   socket.on("callUser", (data) => {
  //     setReceivingCall(true)
  //     setCaller(data.from)
  //     setName(data.name)
  //     setCallerSignal(data.signal)
  //   })
  //
  // }, [])
  //
  // const callUser = (id) => {
  //   const peer = new Peer({
  //     initiator: true,
  //     trickle: false,
  //     stream: stream
  //   })
  //
  //   peer.on("signal", (data) => {
  //     socket.emit("callUser", {
  //       userToCall: id,
  //       signalData: data,
  //       from: me,
  //       name: name
  //     })
  //   })
  //
  //   peer.on("stream", (incomingStream) => {
  //     userVideo.current.srcObject = incomingStream
  //     // myVideo.current.srcObject = stream;
  //   })
  //
  //   socket.on("callAccepted", (signal) => {
  //     setCallAccepted(true)
  //     peer.signal(signal)
  //   })
  //
  //   connectionRef.current = peer
  // }
  //
  // const answerCall = () => {
  //   setCallAccepted(true)
  //
  //   const peer = new Peer({
  //     initiator: false,
  //     trickle: false,
  //     stream: stream
  //   })
  //
  //   peer.on("signal", (data) => {
  //     socket.emit("answerCall", {signal: data, to: caller})
  //   })
  //
  //   peer.on("stream", (stream) => {
  //     userVideo.current.srcObject = stream
  //   })
  //
  //   peer.signal(callerSignal)
  //   connectionRef.current = peer
  // }
  //
  // const leaveCall = () => {
  //   setCallEnded(true)
  //   connectionRef.current.destroy()
  // }
  //
  // return (
  //   <>
  //     <h1 style={{textAlign: "center", color: "#fff"}}>Zoomish</h1>
  //     <div className="container">
  //       <div className="video-container">
  //         <div className="video">
  //           {stream && <audio controls playsInline  muted ref={myVideo} autoPlay style={{width: "300px"}}/>}
  //         </div>
  //         <div className="video">
  //           {callAccepted && !callEnded ?
  //             <audio controls playsInline ref={userVideo} autoPlay style={{width: "300px"}}/> :
  //             null}
  //
  //         </div>
  //       </div>
  //       <div className="myId">
  //         <input
  //           id="filled-basic"
  //           value={name}
  //           onChange={(e) => setName(e.target.value)}
  //           style={{marginBottom: "20px"}}
  //         />
  //         <div>{me}</div>
  //         <input
  //           id="filled-basic"
  //           value={idToCall}
  //           onChange={(e) => setIdToCall(e.target.value)}
  //         />
  //         <div className="call-button">
  //           {callAccepted && !callEnded ? (
  //             <button className="btn btn-secondary" onClick={leaveCall}>
  //               End Call
  //             </button>
  //           ) : (
  //             <button className="btn btn-primary" aria-label="call" onClick={() => callUser(idToCall)}>
  //               Call
  //             </button>
  //           )}
  //           {idToCall}
  //         </div>
  //       </div>
  //       <div>
  //         {receivingCall && !callAccepted ? (
  //           <div className="caller">
  //             <h1>{name} is calling...</h1>
  //             <button className={"btn btn-primary"} onClick={answerCall}>
  //               Answer
  //             </button>
  //           </div>
  //         ) : null}
  //       </div>
  //     </div>
  //   </>
  // )
}
