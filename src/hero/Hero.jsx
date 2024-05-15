import React from 'react'
import Navbar from '../navbar/navbar';
import './style.css'
import logo2 from './favicon.jpg' 

const Hero = (props)=>{
    return(
    <>
    <div className="App">    
    <Navbar></Navbar>
  
    <div className='mainHero' >
        <div className='animation logo'>
            <img src={logo2} alt="" />
        </div>
        <div>
            <h1 className='animation titleHead'>BOOK MY CARE</h1>
        </div>
        <div className='animation2 aboutUs'>
            <h1>আপনাদের সেবায় আমাদের উদ্দেশ্য</h1>
            <h2>তাই যেকোনো ধরণের রোগের চিকিৎসার জন্য আপনার নিকটবর্তি চিকিৎসালয়ে আপনাদের প্রিয় ডাক্তারবাবুর কাছে চিকিৎসালাভের সুবিধা পেতে নাম লেখানোর জন্য নীচে দেওয়া BUTTON এ CLICK (ক্লিক) করুন !</h2>
            <a href='/doctors' className='none'><button className='btn size15 bold' style={{padding:'10px', borderRadius:'10px',cursor:'pointer',display:'block',margin:'2rem auto',fontFamily:'cursive'}}>BOOK MY NAME</button></a>
        </div>
    </div>
       </div>

    </>
       );
}
export default Hero;