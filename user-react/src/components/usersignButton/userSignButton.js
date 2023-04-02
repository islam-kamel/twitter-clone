import React from 'react';
import './userSignButton.scss';
import high from "../../Image/high.jpg";
import {UserSignDropdown} from '../TrendsOpenion/trendsOpenion';


    const UserSignButton = () => {
        return ( <>
        <div className=' ' style={{paddingTop:'3'}}>
                 <div className='user-box  '>
                 <img
                        src={high}
                        width="50"
                        height="50"
                        className="rounded-circle float-start"
                        alt="..."
                      />
                <div className='mt-1'>
                    <h5 className=''>moustafa</h5>
                    <small class="text-body-secondary">@moustaf37510</small>
                </div>
                <div class=" dropstart d-flex flex-column align-items-end mt-2">

            <UserSignDropdown className='trends-option fw-bolder ' addAccount='Add an existing account' logOut='Log out @moustaf37510 '   ></UserSignDropdown>
                 
              
            </div>
                 </div>
        </div>
        </> );
    }
     
    export default UserSignButton;
