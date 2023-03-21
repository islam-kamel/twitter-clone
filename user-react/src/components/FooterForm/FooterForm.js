import React from 'react';
import './FooterForm.css';

import JoinNowTwitter from './../JoinNowTwitter/JoinNowTwitter';
import LogIN from './../LogIN/LogIN';


const FooterForm = () => {
    return (
        <>
            <div className='container-fluid container-footer-form'>
                <div className='row'>
                    <div className='col-md-3'></div>
                    <div className='col-md-7 my-1 col-lg-6 footer-par'>
                        <h3><b>Don’t miss what’s happening</b></h3>
                        <h5>People on Twitter are the first to know.</h5>
                    </div>
                    <div className='col-md-2 my-3 col-6 col-lg-3'>
                        <LogIN/>
                        <JoinNowTwitter/>
                    </div>
                </div>

            </div>
        </>
    );
}

export default FooterForm;
