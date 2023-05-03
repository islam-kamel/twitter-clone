import React from "react";
import {Link} from "react-router-dom";

const NewMessageModal = () => {
  return (
    <>
      <div className="col-12  col-md-5 col-lg-7 newmessage p-5">
        <p className=" ps-5">
          <h3 className=" mt-5 ps-5">Select a message</h3>
          <h6 className=" ps-5">Choose from your existing conversations, start<br/> new one, or just
            keep swimming.</h6>
          <button type="button" className="btn btn-primary rounded-5 ms-5 mt-5" data-bs-toggle="modal"
                  data-bs-target="#newMesseageModel">New Message
          </button>
        </p>
      </div>


      <div className="modal fade" id="newMesseageModel" data-bs-backdrop="static" data-bs-keyboard="false"
           tabIndex="-1"
           aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header border-0">

              <button type="button" className="btn-close col-sm-1 pt-4" data-bs-dismiss="modal"
                      aria-label="Close"></button>

              <h1 className="modal-title fs-5 col-sm-9 ps-3" id="staticBackdropLabel"> New Message</h1>

              <button type="button" className="btn btn-light col-sm-2">Next</button>
            </div>
            <div className="form-group d-flex flex-row">
              <i className="bi bi-search mx-2 mt-3"></i>
              <input type="text" id="form1" className="form-control search border-0 text-left "
                     placeholder="Search People"/>
            </div>

            <div className="modal-body border-top">
              <Link to="#"> <i className="bi bi-people p-1"></i><span> Create a group</span></Link>
            </div>
            <div className="modal-footer">
              <span className="col-12"><i className="bi bi-person-fill"></i> You follow each other</span>
              <div className="me-5 d-flex flex-column  ">
                <div className="row searchpeople">
                  <img
                    alt={"..."}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrZNG2V1kv_IH_8aTfCrLyEYKVDuCeuKoHaQ&usqp=CAU"
                    className="col-2 col-md-2"/>
                  <span className="col-9 col-md-9">Engy<br/>@engy123 </span>
                </div>

                <div className="row mt-3 searchpeople">
                  <img
                    alt={".."}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrZNG2V1kv_IH_8aTfCrLyEYKVDuCeuKoHaQ&usqp=CAU"
                    className="col-2 col-md-2"/>
                  <span className="col-9 col-md-9 pe-5">aya<br/>@aya3883 </span>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>


    </>
  );
}

export default NewMessageModal;
