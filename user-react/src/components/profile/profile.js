import React, { useState ,useEffect} from 'react';
import Avatare from "../../Image/avatar.png";
import high from "../../Image/high.jpg";
import media from "../../Image/media.png";
import "./profile.scss";


export default function Profile() {

    const [text, setText] = useState(()=>{
        const storedBio = sessionStorage.getItem('text');
        return storedBio !== null ? JSON.parse(storedBio) : '..';
    });

    const [name, setName] = useState(()=>{
        const storedName = sessionStorage.getItem('name');
        return storedName !== null ? JSON.parse(storedName) : '..';
    });


    useEffect(() => {
        sessionStorage.setItem('text', JSON.stringify(text));

        sessionStorage.setItem('name', JSON.stringify(name));
      }, [text,name]);

      function handleName(name){
        setName(name.target.value);
      }

    function handleBio(event) {
        setText(event.target.value);
      }

  return (
    <>
      <section>
        <div>
          <div className="d-flex justify-content-between align-items-center mt-1 py-1 w-25">
            <div className="mx-2">
              <i class="bi bi-arrow-left cursor-pointer bi-fw-bolder fs-4"></i>
            </div>
            <div className="mx-2">
              <h6 className="fs-5 fw-2">mostafa</h6>
              <p className="text-secondary">2 tweets</p>
            </div>
          </div>

          <div class="card mt-3 border-0">
            <img
              src="https://th.bing.com/th/id/OIP.nPKODoaHaadqnZgghUxH4wHaEK?pid=ImgDet&rs=1"
              className="card-img-top profile-photo"
              alt="..."
            />
            <div className="card-body d-flex justify-content-between  ">
              <div>
                <img
                  src="https://th.bing.com/th/id/OIF.mAtJExIDFFm2zNDsIaVirA?pid=ImgDet&rs=1"
                  className=" person-image"
                  alt="..."
                />
              </div>

              <div>
                <button
                  type="button"
                  className="btn btn-white border rounded-pill fs-6 fw-bold px-4 me-3 edit-button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
              
                >
                  Edit profile
                  </button>
                  {/* <!-- Modal --> */}
                  <div
                    className="modal fade py-0"
                    id="exampleModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header w-100 ">
                          <div className="d-flex  align-items-center w-100 ">
                            <button
                              type="button"
                              width="50"
                              className="btn-close fw-4 pe-4 "
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                            <div className="d-flex justify-content-between align-items-center w-100 mt-1 " id="staticBackdropLabel">
                              <h5
                                className=" fs-5 fw-4 ms-3"
                                id="staticBackdropLabel"
                              >
                                Edit profile
                              </h5>
                              <button
                                type="button"
                                className="btn btn-dark rounded-pill fs-6 fw-bold px-3 me-3"
                              >
                                Save
                              </button>
                            </div>
                          </div>
                        </div>
                        <div
                          className="modal-body py-0 w-100 px-0"
                          style={{}}
                        >
                          <div className="w-100  ">
                            <div class="card  border-0">
                              <img
                                src="https://th.bing.com/th/id/OIP.nPKODoaHaadqnZgghUxH4wHaEK?pid=ImgDet&rs=1"
                                className="card-img-top profile-photo"
                                alt="..."
                                width="100"
                              />
                              <div className="card-body d-flex justify-content-between  ">
                                <img
                                  src="https://th.bing.com/th/id/OIF.mAtJExIDFFm2zNDsIaVirA?pid=ImgDet&rs=1"
                                  className=" person-image mt-5"
                                  alt="..."
                                />
                              </div>
                            </div>
                          </div>
                          <div className=" pt-2 ms-3 mt-5  w-100">
                          <div class="form-floating mb-3 " style={{width:'95%',}}>
                            <input type="text" class="form-control" id="floatingInput" placeholder="User name" value={name} onChange={handleName} required />
                             <label for="floatingInput">Name</label>
                        </div>
                        <div class="form-floating" style={{width:95+'%',}}>
                        <textarea class="form-control" placeholder="Enter Bio" id="floatingTextarea2" style={{height:'100px'}} value={text} onChange={handleBio}></textarea>
                         <label for="floatingTextarea2">Bio</label>
                        </div>
                        <div class="form-floating mt-3" style={{width:95+'%',}}>
                        <textarea class="form-control" placeholder="Enter Location" id="floatingTextarea2" ></textarea>
                         <label for="floatingTextarea2">Location</label>
                        </div>
                        <div class="form-floating mt-3" style={{width:95+'%',}}>
                        <textarea class="form-control" placeholder="Enter Website" id="floatingTextarea2" ></textarea>
                         <label for="floatingTextarea2">Website</label>
                        </div>
                            <div className='mt-4'>
                            <p className='text-secondary '>Birth date.</p>
                            <p className='fs-5 '>June 28, 1997</p>    
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                
              </div>
            </div>
          </div>

          <div className="px-3 mx-2 ">
            <h4 class="card-title">name:{name}</h4>
            <p class="card-text">
              <small class="text-body-secondary">@moustaf37510</small>
            </p>
            <p>Bio: {text}</p>
            <i class="bi bi-github fs-4 bi-link-hover"></i>
            <div>
              <small>Joined February 2023</small>
            </div>
            <div className="">
              <small className="following-N">
                <span className=" mx-1">59</span>
                <span className="me-1 text-body-secondary">Following</span>
              </small>
              <small className="following-N">
                <span className=" mx-1">99</span>
                <span className="ms-12 text-body-secondary">Followers</span>
              </small>
            </div>
          </div>

          <div>
            <div
              className="btn-group trend-bar  justify-content-around align-items-center d-flex w-100 fs-6 fw-5 text-center "
              id="explore-group"
              role="group"
            >
              <ul
                className="nav nav-pills  mt-1 col-10 w-100 fs-6 fw-5  d-flex justify-content-center align-items-center"
                id="pills-tab explore-group"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    class="nav-link  nav-links trend-bar nav-tabs border-color  active focus "
                    id="pills-Tweets-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Tweets"
                    type="button"
                    role="tab"
                    aria-controls="pills-Tweets"
                    aria-selected="false"
                    style={{ paddingLeft: 40, paddingRight: 40 }}
                  >
                    Tweets
                  </button>
                </li>

                <li className="nav-item" role="presentation">
                  <button
                    class="nav-link  nav-links trend-bar nav-tabs border-color "
                    id="pills-Replies-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Replies"
                    type="button"
                    role="tab"
                    aria-controls="pills-Replies"
                    aria-selected="false"
                    style={{ paddingLeft: 40, paddingRight: 40 }}
                  >
                    Replies
                  </button>
                </li>

                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link  nav-links trend-bar nav-tabs border-color "
                    id="pills-Media-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Media"
                    type="button"
                    role="tab"
                    aria-controls="pills-Media"
                    aria-selected="false"
                    style={{ paddingLeft: 40, paddingRight: 40 }}
                  >
                    Media
                  </button>
                </li>

                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link  nav-links trend-bar  nav-tabs-border-color "
                    data-bs-toggle="pill"
                    id="pills-Likes-tab"
                    data-bs-target="#pills-Likes"
                    type="button"
                    role="tab"
                    aria-controls="pills-Likes"
                    aria-selected="false"
                    style={{ paddingLeft: 40, paddingRight: 40 }}
                  >
                    Likes
                  </button>
                </li>
              </ul>
            </div>
            <div className=" bg-dark-subtle w-100" style={{ height: 1 }}></div>
          </div>

          <div className="tab-content show" id="pills-tabContent">
            {/* <!--------------------- Tweets ---------> */}

            <div
              className="tab-pane fade   pt-2 show active"
              id="pills-Tweets"
              role="tabpanel"
              aria-labelledby="pills-Tweets-tab"
              tabindex="0"
            >
              <div className="row">
                <div className="col-12 border-bottom py-2">
                  <h3 className=" ms-4">How To Follow</h3>
                  <div className="trend-card mt-1 d-flex justify-content-between align-items-center">
                    <div className="followers ms-3 d-flex align-items-center ">
                      <img
                        src={high}
                        width="50"
                        height="50"
                        className="rounded-circle float-start"
                        alt="..."
                      />
                      <div className="followers ms-3 mt-4">
                        <h5>Eslam Kamel</h5>
                        <h6 className="text-secondary">@Eslam</h6>
                        <h6 className="mt-1">Web Develober-Frontend</h6>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn btn-dark rounded-pill fs-6 fw-bold px-2 me-3"
                    >
                      Follow
                    </button>
                  </div>
                </div>
                <div className="col-12 border-bottom py-2">
                  <div className="trend-card mt-1 d-flex justify-content-between align-items-center">
                    <div className="followers ms-3 d-flex align-items-center ">
                      <img
                        src={high}
                        width="50"
                        height="50"
                        className="rounded-circle float-start"
                        alt="..."
                      />

                      <div className="followers ms-3 mt-4">
                        <h5>Ahmed Khaled</h5>
                        <h6 className="text-secondary">@Ahmed</h6>
                        <h6 className="mt-1">Web Develober-Frontend</h6>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn btn-dark rounded-pill fs-6 fw-bold px-2 me-3"
                    >
                      Follow
                    </button>
                  </div>
                </div>
                <div className="col-12 border-bottom py-2">
                  <div className="trend-card mt-1 d-flex justify-content-between align-items-center">
                    <div className="followers ms-3 d-flex align-items-center ">
                      <img
                        src={high}
                        width="50"
                        height="50"
                        className="rounded-circle float-start"
                        alt="..."
                      />
                      <div className="followers ms-3 mt-4">
                        <h5>Eslam Kamel</h5>
                        <h6 className="text-secondary">@Eslam</h6>
                        <h6 className="mt-1">Web Develober-Frontend</h6>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn btn-dark rounded-pill fs-6 fw-bold px-2 me-3"
                    >
                      Follow
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* <!--------------------- Replies ---------> */}

            <div
              className="tab-pane fade"
              id="pills-Replies"
              role="tabpanel"
              aria-labelledby="pills-Replies-tab"
              tabindex="0"
            >
              <div className="row">
                <div className="col-12 border-bottom py-2">
                  <h3 className=" ms-4">How To Follow</h3>
                  <div className="trend-card mt-1 d-flex justify-content-between align-items-center">
                    <div className="followers ms-3 d-flex align-items-center ">
                      <img
                        src={high}
                        width="50"
                        height="50"
                        className="rounded-circle float-start"
                        alt="..."
                      />
                      <div className="followers ms-3 mt-4">
                        <h5>Eslam Kamel</h5>
                        <h6 className="text-secondary">@Eslam</h6>
                        <h6 className="mt-1">Web Develober-Frontend</h6>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn btn-dark rounded-pill fs-6 fw-bold px-2 me-3"
                    >
                      Follow
                    </button>
                  </div>
                </div>
                <div className="col-12 border-bottom py-2">
                  <div className="trend-card mt-1 d-flex justify-content-between align-items-center">
                    <div className="followers ms-3 d-flex align-items-center ">
                      <img
                        src={high}
                        width="50"
                        height="50"
                        className="rounded-circle float-start"
                        alt="..."
                      />

                      <div className="followers ms-3 mt-4">
                        <h5>Ahmed Khaled</h5>
                        <h6 className="text-secondary">@Ahmed</h6>
                        <h6 className="mt-1">Web Develober-Frontend</h6>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn btn-dark rounded-pill fs-6 fw-bold px-2 me-3"
                    >
                      Follow
                    </button>
                  </div>
                </div>
                <div className="col-12 border-bottom py-2">
                  <div className="trend-card mt-1 d-flex justify-content-between align-items-center">
                    <div className="followers ms-3 d-flex align-items-center ">
                      <img
                        src={high}
                        width="50"
                        height="50"
                        className="rounded-circle float-start"
                        alt="..."
                      />
                      <div className="followers ms-3 mt-4">
                        <h5>Eslam Kamel</h5>
                        <h6 className="text-secondary">@Eslam</h6>
                        <h6 className="mt-1">Web Develober-Frontend</h6>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn btn-dark rounded-pill fs-6 fw-bold px-2 me-3"
                    >
                      Follow
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* <!---------------------  Media  --------------> */}

            <div
              className="tab-pane fade "
              id="pills-Media"
              role="tabpanel"
              aria-labelledby="pills-Media-tab"
              tabindex="0"
            >
              <div className=" ">
                <div className="col-12 border-bottom py-3">
                  <div className="trend-card mt-1 d-flex flex-column justify-content-center align-items-center">
                    <img
                      src={media}
                      style={{ width: "70%", height: "80%" }}
                      className="rounded-circle "
                      alt="..."
                    />

                    <div className="followers d-flex justify-content-center w-100  ">
                      <h3 className=" fw-bold w-50 ms-4">
                        
                        Lights, camera … attachments!
                      </h3>
                    </div>
                    <p className="w-50 fs-6 text-secondary">
                      When you send Tweets with photos or videos in them, they
                      will show up here.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* <!---------------------  Likes  --------------> */}

            <div
              className="tab-pane fade"
              id="pills-Likes"
              role="tabpanel"
              aria-labelledby="pills-Likes-tab"
              tabindex="0"
            >
              <div className="row">
                <div className="col-12 border-bottom py-3">
                  <div className="trend-card mt-1 d-flex flex-column justify-content-center align-items-center">
                    <div className="followers d-flex justify-content-center w-100  ">
                      <h3 className=" fw-bold w-50 ms-4">
                        {" "}
                        You don’t have any likes yet
                      </h3>
                    </div>
                    <p className="w-50 fs-6 text-secondary">
                      Tap the heart on any Tweet to show it some love. When you
                      do, it’ll show up here.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
