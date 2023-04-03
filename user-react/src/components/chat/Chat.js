import {io} from "socket.io-client";
import {useEffect, useState} from "react";
import TwInput from "../tw-input/tw-input";
import TwButton from "../tw-button/tw-button";

export default function Chat() {
    const socket = io("http://localhost:3008", {autoConnect: false})

    // Require date to start private chat
    const [message, setMessage] = useState("");
    const [username, setUsername] = useState(false);
    const [room, setRoom] = useState(false);
    const [received, setReceived] = useState(false)

    useEffect(() => {
        socket.connect()
    }, [socket])

    useEffect(() => {
        if (room) {
            socket.emit("joinChat", room);
        }
    }, [room, socket])

    socket.on("newMessage", message => {
        setReceived(message)
    })

    function handleSend(event: InputEvent) {
        socket.emit("sendMessage", {content: message, username: username, room: room})
    }

    return (
        <div className={"container mt-5"}>
            <div className={'row row-cols-1 gy-3'}>
                <div className={""}>
                    <div className={"text-primary-emphasis jumbotron bg-body-emphasis bg-secondary-subtle p-4 border mb-2 rounded"}>
                        <p>{received?.content}</p>
                    </div>
                    <div className={" mb-3 gx-0  row row-cols-2"}>
                        <TwInput
                            id={"room"}
                            labelText={"Room Name"}
                            other={{
                                onBlur: (e) => setRoom(e?.target?.value)
                            }}
                        />
                        <TwInput
                            id={"username"}
                            labelText={"Name"}
                            other={{
                                onBlur: (e) => setUsername(e?.target?.value)
                            }}
                        />
                    </div>
                    <TwInput
                        labelText={"Message"}
                        id={"message"}
                        type={"text"}
                        other={{
                            onChange: (e) => {
                                setMessage(e?.target?.value);
                            }
                        }}
                    />
                </div>
                <div>
                    <TwButton
                        btnStyle={"primary"}
                        classes={"rounded-pill w-100"}
                        other={{onClick: handleSend}}
                    >
                        Send
                    </TwButton>
                </div>
            </div>
        </div>
    )
}
