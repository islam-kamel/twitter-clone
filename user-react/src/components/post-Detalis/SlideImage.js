import React, { useState } from 'react';
import Avatare from "../../Image/avatar.png";
import "./SlideImage.scss"
import Card, { BuildMedia } from '../card/card';
import TweetDetails from '../showTweet/TweetDetails ';

export default function SlideImage({updateState,tweet}) {
    console.log(tweet?.media);

    var elements = document.getElementsByClassName("container-Item");
    function clossCommponint()
    {
        document.getElementsByTagName("*")[0].style.overflow = "auto";
        for(var i = 0; i < elements.length; i++)
        {
            elements[i].style.display = "none";
            updateState(false)
        }
    }

  return (
    <>
        <div className="container-Item" id="media-modal">
            <div className="row row-item">
                <div className="col-lg-9 py-5 border border-bottom-0 border-start-0 border-top-0  item-Image">
                    <div className='ms-5'>
                        <span className='btn' onClick={clossCommponint}>
                            <i className="bi bi-x fs-3 text-white"></i>
                        </span>
                    </div>
                    <div id="carouselExample" className="carousel slide ">
                        <div className="carousel-inner">
                            
                            {tweet?.media.map((media,i)=><div key={i} className="carousel-item vh-100  active">
                                <BuildMedia item={media} key={i} classes={'h-75 w-75 mx-auto d-block rounded'} style={{'objectFit': 'contain'}} ></BuildMedia>
                                {/*<img src={process.env.REACT_APP_MEDIA_BASE_URL+media.file} className="d-block mx-auto h-75 w-75" style={{objectFit: 'contain'}} alt="..."/>*/}
                                </div> 
                            )}

                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="bi bi-arrow-left fs-4" aria-hidden="true"></span>
                            <span className="visually-hidden ">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="bi bi-arrow-right fs-4" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="col-lg-3 bg-white">
                    <div className='vh-100 overflow-y-auto'>
                        <TweetDetails tweet={tweet}/>
                    </div>
                </div>
            </div>
        </div>

      
    </>
  );
}
