import {Link} from "react-router-dom";
import './floatingMessages.style.scss'
import {useRef, useState} from "react";
import ChatList from "./chatList";

export default function FloatingMessages() {
  const messagesRef = useRef(null);
  const [arrow, setArrow] = useState('bi-chevron-up')

  const toggleMessages = () => {

    if (messagesRef.current.classList.toggle('active')) {
      setArrow('bi-chevron-down')
    } else {
      setArrow('bi-chevron-up')
    }
  }

  return (
    <div className="position-relative w-100">
      <div ref={messagesRef} className="messages-container bg-light d-flex  flex-column rounded-top-4 shadow">
        <div className={'d-flex justify-content-between'}>
          <h1 style={{fontSize: "20px", fontWeight: "700"}}>Messages</h1>
          <div className="d-flex" style={{height: 'fit-content'}}>
            <Link className="icon-button text-dark" to="#">
              <div className={"icon-bg i-bg-primary"}>
                <i className="bi bi-envelope"></i>
              </div>
            </Link>
            <Link
              onClick={toggleMessages}
              className="text-dark icon-button" to="#"
            >
              <div className={"icon-bg i-bg-primary"}>
                <i className={`bi ${arrow}`}></i>
              </div>
            </Link>
          </div>
        </div>
        <div className={'messages-details'}>
          <ChatList/>
        </div>
      </div>
    </div>
  )

}
