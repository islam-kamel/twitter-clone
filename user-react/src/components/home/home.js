import Card from '../card/card';
// import '../card/card.style.css';
import './home.style.css';

const profileImage = require('../../assets/profile.image.jpg');

export default function Home() {
    return (
        <main class="">
        <div class="col-12  position-sticky top-0 z-1 main-div border-bottom">
           <div class="d-flex flex-row justify-content-between p-4">
               <h1 style={{fontSize:'20px',fontWeight:'600'}}>Home</h1>
               <i class="material-icons-outlined"> 
                   auto_awesome
               </i>
            </div>
           <div class="d-flex flex-row justify-content-around">
               <h3 style={{fontSize:'18px',fontWeight:'400'}}>For you </h3>
               <h3 style={{fontSize:'18px',fontWeight:'400'}}>Following </h3>
           </div>
        </div>
        <div class="card new_tweet border-0 col-12">
            <div class="d-flex flex-row ">
               <img src={profileImage} alt="img" class="img_profile"/>
               <div class="new_tweet_details">
               <input type="search" placeholder="What's happening?"/>
               <div class="new_tweet_actions">
                   <ul>
                       <li>
                           <i class="material-icons-outlined">
                               image
                           </i>
                       </li>
                       <li>
                           <i class="material-icons-outlined">
                               gif_box
                           </i>
                       </li>
                       <li>
                           <i class="material-icons-outlined">
                               poll
                           </i>
                       </li>
                       <li>
                           <i class="material-icons-outlined">
                               sentiment_satisfied
                           </i>
                       </li>
                       <li>
                           <i class="material-icons-outlined">
                               event
                           </i>
                       </li>
                   </ul>
                   <button class="tweet_button p-4 rounded-pill me-4 border-0 ">Tweet</button>
               </div>
           </div>
            </div>
        </div>
        <Card name=' Engy Mo' text='The simple truths hurt the most. One must have been very optimistic investing in Tesla, even being considered as a tech company in 2021. The company is great and run well. It has just been overvalued and supported by macro trends.' username='@engy5821 .2h' img={profileImage}/>
        <Card name=' Engy Mo' text='The simple truths hurt the most. One must have been very optimistic investing in Tesla, even being considered as a tech company in 2021. The company is great and run well. It has just been overvalued and supported by macro trends.' username='@engy5821 .2h' img={profileImage}/>
        <Card name=' Engy Mo' text='The simple truths hurt the most. One must have been very optimistic investing in Tesla, even being considered as a tech company in 2021. The company is great and run well. It has just been overvalued and supported by macro trends.' username='@engy5821 .2h' img={profileImage}/>
        <Card name=' Engy Mo' text='The simple truths hurt the most. One must have been very optimistic investing in Tesla, even being considered as a tech company in 2021. The company is great and run well. It has just been overvalued and supported by macro trends.' username='@engy5821 .2h' img={profileImage}/>
        <Card name=' Engy Mo' text='The simple truths hurt the most. One must have been very optimistic investing in Tesla, even being considered as a tech company in 2021. The company is great and run well. It has just been overvalued and supported by macro trends.' username='@engy5821 .2h' img={profileImage}/>
        <Card name=' Engy Mo' text='The simple truths hurt the most. One must have been very optimistic investing in Tesla, even being considered as a tech company in 2021. The company is great and run well. It has just been overvalued and supported by macro trends.' username='@engy5821 .2h' img={profileImage}/>
        <Card name=' Engy Mo' text='The simple truths hurt the most. One must have been very optimistic investing in Tesla, even being considered as a tech company in 2021. The company is great and run well. It has just been overvalued and supported by macro trends.' username='@engy5821 .2h' img={profileImage}/>
        <Card name=' Engy Mo' text='The simple truths hurt the most. One must have been very optimistic investing in Tesla, even being considered as a tech company in 2021. The company is great and run well. It has just been overvalued and supported by macro trends.' username='@engy5821 .2h' img={profileImage}/>
        <Card name=' Engy Mo' text='The simple truths hurt the most. One must have been very optimistic investing in Tesla, even being considered as a tech company in 2021. The company is great and run well. It has just been overvalued and supported by macro trends.' username='@engy5821 .2h' img={profileImage}/>
        <Card name=' Engy Mo' text='The simple truths hurt the most. One must have been very optimistic investing in Tesla, even being considered as a tech company in 2021. The company is great and run well. It has just been overvalued and supported by macro trends.' username='@engy5821 .2h' img={profileImage}/>
        
       </main>
    );
}