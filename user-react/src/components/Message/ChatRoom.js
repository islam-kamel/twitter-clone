import React from "react";
import "./ChatRoom.css"
import "../Message/Message.css"

const ChatRoom = (props) => {
  return (
    <>

      <div className="col-12  col-md-10 col-lg-7 mt-2">
        <div>
          <div class="">
            <div class="chat">
              <div class="chat-header clearfix">
                <div class="row">
                  <div class="col-lg-11">
                    <a href="#i" data-toggle="modal" data-target="#view_info">
                      <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar"/>
                    </a>
                    <div class="chat-about">
                      <h6 class="m-b-0"> {props.chatId} </h6>
                      <small>Last seen: 2 hours ago</small>
                    </div>
                  </div>
                  <div class="col-lg-1 mt-2">
                    <a href="#!" class="text-dark "><i class="bi bi-exclamation-circle "></i></a>
                  </div>
                </div>
              </div>
              <div class="chat-history">
                <ul class="m-b-0">
                  <li class="clearfix ">

                    <div class="message other-message float-right "> Hi Aiden, how are you? How is the project coming
                      along?
                    </div>
                    <div class="message-data">
                      <span class="message-data-time float-right">10:10 AM,Yesterday</span>
                    </div>

                  </li>

                  <li class="clearfix">

                    <div class="message my-message">Are we meeting today?</div>
                    <div class="message-data">
                      <span class="message-data-time">10:12 AM</span>
                    </div>
                  </li>
                  <li class="clearfix">

                    <div class="message my-message">Project has been already finished and I have results to show you.
                    </div>
                    <div class="message-data">
                      <span class="message-data-time">10:15 AM, Today</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div class="input-group mt-3 rounded">
                                <span class="input-group-text ">

                                    <a className="ms-1 text-muted" href="#!"><i class="fas fa-paperclip"></i></a>
                                    <a className="ms-3 text-muted" href="#!"><i className="bi bi-emoji-smile-fill"></i></a>

                                </span>

                <input type="text" className="form-control w-75 form-control-lg "
                       placeholder="Start a new message"/>

                <span class="input-group-text "><a href="#!"><i className="bi bi-send-fill"></i></a></span>
              </div>


            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default ChatRoom;
