import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import OneMessage from "./OneMessage";
import NewMessageModal from "./NewMessageModal";
import ChatRoom from "./ChatRoom";

const Message = () => {

    const [activeChat, setActiveChat] = useState(null)



    return (
        <>


            <div className="container ">
                <div className="row">

                    {/* one message */}
                    <div className="col-12 col-md-6 col-lg-5 border-end message">


                        <nav className="navbar navbar-light ">
                            <div className="container-fluid">
                                <span className="navbar-brand">Message</span>
                                <div className="d-flex">
                                    <Link className="nav-link  me-2 p-2" to="#" title="Settings"><i
                                        className="bi bi-gear"></i></Link>
                                    <Link className="nav-link p-2" to="#" title="New Message"><i
                                        className="bi bi-envelope-plus"></i></Link>
                                </div>
                            </div>
                        </nav>

                        <div className="form-group">
                            <input type="search" id="form1" className="form-control search Message-Search"
                                placeholder="&#61442; Search Direct Messages" />
                            <div className="trysearch text-center pt-5">Try searching for people, groups, or messages
                            </div>
                        </div>
                        <br />
                        <div >

                            <div className="Message">


                                <OneMessage chatId="Chat1" setActiveChat={setActiveChat} />
                                <OneMessage chatId="Chat2" setActiveChat={setActiveChat} />
                                <OneMessage chatId="Chat3" setActiveChat={setActiveChat} />
                                <OneMessage chatId="Chat4" setActiveChat={setActiveChat} />

                            </div>
                        </div>
                    </div>

                    {activeChat ? <ChatRoom chatId={activeChat} /> : <NewMessageModal />}

                </div>
            </div>




        </>
    );
}

export default Message;
