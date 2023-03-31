import {io} from "socket.io-client";
import api, {login} from "api_sdk";

export default function Chat() {
    const socket = io("http://localhost:3008")

    socket.on("message", args => {
        console.log(args)
    })
    function handleConnect() {
        // login('islam.admin', '123')
        //     .then(res => console.log(res.data))
        //     .catch(err => console.log(err.message))
        api.get('/api/is_auth').then(res => {
            console.log(res.data)
        })

        socket.emit("message", "hello")
    }
    return (
        <button className="btn btn-primary" onClick={handleConnect}>Connect</button>
    )
}
