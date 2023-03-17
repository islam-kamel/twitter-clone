import {io} from "socket.io-client";
export default function Chat() {
    const socket = io("http://localhost:3008")

    socket.on("message", args => {
        console.log(args)
    })
    function handleConnect() {
        socket.emit("message", "hello")
    }
    return (
        <button className="btn btn-primary" onClick={handleConnect}>Connect</button>
    )
}