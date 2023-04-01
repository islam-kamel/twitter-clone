import React from 'react';
import './RightSidebar.scss'
// import './card'
import Cardtrandy from './card';
import CardDown from './cardDown';
import Links from './links';
const RightSidebar = () => {
    return (
        <>
          <aside className="w-100 h-100">
            <div className="position-sticky top-0 z-1 search-details">
                <div className="d-flex justify-content-around">
                    <input className="form-control form-control-md rounded-pill search-div" type="search"
                           placeholder="Search Twitter" aria-label=".form-control-lg example"/>
                </div>
            </div>
            <div className="p-0 mt-3 ms-3">
                <div className="maindiv">
                    <h1 style={{fontSize:'20px',fontWeight:'700',padding:'13px 12px',margin:'0'}}>What's happening</h1>
                    <Cardtrandy trindname='Trending in Egypt' trindy='World Cup' tweetnumber='100000k tweets'/>
                    <Cardtrandy trindname='Trending in Egypt' trindy='World Cup' tweetnumber='100000k tweets'/>
                    <Cardtrandy trindname='Trending in Egypt' trindy='World Cup' tweetnumber='100000k tweets'/>
                    <Cardtrandy trindname='Trending in Egypt' trindy='World Cup' tweetnumber='100000k tweets'/>
                    <a href="#" class="show_more">Show more</a>
                </div>
                <div class="follow d-flex flex-column  card border-0 mt-3">
                    <h1 style={{fontSize:'20px',fontWeight:'700',padding:'13px 12px',margin:'0'}}>Who to follow</h1>
                     <CardDown img='' name='Engy Mo' username='@engy5821'/>
                     <CardDown img='' name='Engy Mo' username='@engy5821'/>
                     <CardDown img='' name='Engy Mo' username='@engy5821'/>
                    <a href="#" class="show_more">Show more</a>
                </div>
            </div>
             <div class="ends">
                <div class="end d-flex flex-row">
                    <Links url='https://twitter.com/en/tos' name='Terms of Service'/>
                    <Links url='https://help.twitter.com/en/resources/accessibility' name='Privacy Policy'/>
                    <Links url='https://help.twitter.com/en/rules-and-policies/twitter-cookies' name='Cookie Policy'/>
                </div>
                <div class="end-1 d-flex flex-row ">
                        <Links url='#' name='Accessibility' />
                        <Links url='#' name='Ads info' />
                        <Links url='#' name='More...' />
                </div>
                <p class="copywrite">&copy; 2023 Twitter, Inc.</p>
            </div>
            <div class="masseg ms-5">
                <div class="masseg-details d-flex justify-content-between flex-row rounded-top-4 shadow">
                    <h1 style={{fontSize:'20px',fontWeight:'700'}}>Masseges</h1>
                    <div class="icon-massege d-flex flex-row">
                        <a className='a-icon' href="#"><i class="fa-regular fa-envelope"></i></a>
                        <a className='a-icon' href="#"><i class="fa-solid fa-chevron-up"></i></a>
                    </div>
                </div>
            </div> 
        </aside>  
        </>
    );
}

export default RightSidebar;
