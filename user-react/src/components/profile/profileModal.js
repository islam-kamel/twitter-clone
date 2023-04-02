import React, { useState ,useEffect} from 'react';
import './profile';
import Profile from './profile';

const ProfileModal = (props) => {

    const [text, setText] = useState(()=>{
        const storedBio = sessionStorage.getItem('text');
        return storedBio !== null ? JSON.parse(storedBio) : '..';
    });

    const [name, setName] = useState(()=>{
        const storedName = sessionStorage.getItem('name');
        return storedName !== null ? JSON.parse(storedName) : '..';
    });

    function handleName(name){
        setName(name.target.value);
      }

    function handleBio(event) {
        setText(event.target.value);
      }


console.log(props);

return(<>
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
                

</>);


}

export default ProfileModal;