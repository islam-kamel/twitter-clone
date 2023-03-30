import React from 'react';
import { Link } from 'react-router-dom';
import './Message.css'
import OneMessage from './OneMessage';
const Message = () => {
    return (
        <>
            <div className="container ">
                <div className="row">


                    <div className="col-12 col-md-6 col-lg-5 border-end message">


                        <nav className="navbar navbar-light ">
                            <div className="container-fluid">
                                <span className="navbar-brand">Message</span>
                                <div className="d-flex">
                                    <Link className="nav-link  me-2 p-2" to="#" title="Settings"><i className="bi bi-gear"></i></Link>
                                    <Link className="nav-link p-2" href="#" title="New Message"><i className="bi bi-envelope-plus"></i></Link>
                                </div>
                            </div>
                        </nav>

                        <div className="form-group">
                            <input type="search" id="form1" className="form-control search" placeholder="&#61442; Search Direct Messages" />
                            <div className="trysearch text-center pt-5">Try searching for people, groups, or messages</div>
                        </div>
                        <br />


                        <div className="Message">
                            <OneMessage />
                            <OneMessage />
                            <OneMessage />
                            <OneMessage />

                        </div>
                    </div>


                    <div className="col-12  col-md-5 col-lg-7 newmessage p-5">
                        <p className=" ps-5">
                            <h3 className=" mt-5 ps-5">Select a message</h3>
                            <h6 className=" ps-5">Choose from your existing conversations, start<br /> new one, or just keep swimming.</h6>
                            <button type="button" className="btn btn-primary rounded-5 ms-5 mt-5" data-bs-toggle="modal"
                                data-bs-target="#newMesseageModel">New Message</button>
                        </p>
                    </div>


                    <div className="modal fade" id="newMesseageModel" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                        aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header row">

                                    <button type="button" className="btn-close col-sm-1 pt-4" data-bs-dismiss="modal"
                                        aria-label="Close"></button>

                                    <h1 className="modal-title fs-5 col-sm-9 ps-3" id="staticBackdropLabel"> New Message</h1>

                                    <button type="button" className="btn btn-light col-sm-2">Next</button>


                                    <div className="form-group  row">
                                        <input type="text" id="form1" className="form-control search border-0 text-left"
                                            placeholder="&#61442; Search People" />
                                    </div>
                                </div>

                                <div className="modal-body">
                                    <a href="#"> <i className="bi bi-people p-1"></i><span> Create a group</span></a>
                                </div>
                                <div className="modal-footer ">
                                    <div className="searchpeople">
                                        <span className="ps-3"><i className="bi bi-person-fill"></i> You follow each other</span>
                                        <span className="row ">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrZNG2V1kv_IH_8aTfCrLyEYKVDuCeuKoHaQ&usqp=CAU" className="col-2 col-md-2" />
                                            <span className="col-9 col-md-9">Engy<br />@engy123 </span>
                                        </span>
                                    </div>

                                    <div className="searchpeople">
                                        <span className="row ">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrZNG2V1kv_IH_8aTfCrLyEYKVDuCeuKoHaQ&usqp=CAU" className="col-2 col-md-2" />
                                            <span className="col-9 col-md-9 pe-5">aya<br />@aya3883 </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>
            </div>

        </>
    );
}

export default Message;
