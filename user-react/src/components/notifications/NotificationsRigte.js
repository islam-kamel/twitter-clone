import React from "react";
import "./Notifications.css"

export default function NotificationsRigte() {
  return (
    <>
      <div className="pt-5">
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search Twitter" aria-label="Search"/>
        </form>

        <div className="mt-3 rounded-2 py-2 bg-secondary-subtle ">
          <h4 className="ms-3">What’s happening</h4>
          <div className="aler-Notfic d-flex justify-content-around my-3">
            <p>Trending in Egypt</p>
            <div className="position-relative ">
              <i className="fa-solid fa-ellipsis position-absolute end-0"></i>
              <h6 className=" mt-4">انهارده الخميس</h6>
            </div>
          </div>
          <div className="aler-Notfic d-flex justify-content-around my-3">
            <p>Trending in Egypt</p>
            <div className="position-relative ">
              <i className="fa-solid fa-ellipsis position-absolute end-0"></i>
              <h6 className=" mt-4">انهارده الخميس</h6>
            </div>
          </div>
          <div className="aler-Notfic d-flex justify-content-around my-3">
            <p>Trending in Egypt</p>
            <div className="position-relative ">
              <i className="fa-solid fa-ellipsis position-absolute end-0"></i>
              <h6 className=" mt-4">انهارده الخميس</h6>
            </div>
          </div>
          <div className="aler-Notfic d-flex justify-content-around my-3">
            <p>Trending in Egypt</p>
            <div className="position-relative ">
              <i className="fa-solid fa-ellipsis position-absolute end-0"></i>
              <h6 className=" mt-4">انهارده الخميس</h6>
            </div>
          </div>
          <div className="aler-Notfic d-flex justify-content-around my-3">
            <p>Trending in Egypt</p>
            <div className="position-relative ">
              <i className="fa-solid fa-ellipsis position-absolute end-0"></i>
              <h6 className=" mt-4">انهارده الخميس</h6>
            </div>
          </div>
          <div className="aler-Notfic d-flex justify-content-around my-3">
            <p>Trending in Egypt</p>
            <div className="position-relative ">
              <i className="fa-solid fa-ellipsis position-absolute end-0"></i>
              <h6 className=" mt-4">انهارده الخميس</h6>
            </div>
          </div>

          <div className="ms-3"><a className="text-decoration-none" href="#"> Show More</a></div>
        </div>
      </div>
    </>
  );
}
