import {io} from "socket.io-client";
import {useEffect} from "react";

function useMessage() {
    const socket = io("http://localhost:3008")

    useEffect(() => {
        socket.emit("connect")
    }, [socket])

}