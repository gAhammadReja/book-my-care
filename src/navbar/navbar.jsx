import React from 'react'
import logo from '../logo.jpg' 
import './NavStyle.css'
import { NavLink } from 'react-router-dom';

const bars = ()=>{
   const ulList = document.getElementById('ulList').style;
   const bars = document.getElementById('bars');

   if (ulList.display==='none') {
        ulList.display='block'
        ulList.visibility='1'
        ulList.minHeight = '100vh'
        ulList.top='0'
        ulList.left='0'
        ulList.position='fixed'
        bars.classList.add('cross');
    }else{
        ulList.display='none'
        bars.classList.remove('cross');

    }
}



const Navbar = (props)=>{
    return(
        <>
    <nav id='nav'>
        <img src={logo} width={80} alt="" style={{borderRadius:'90%'}} /><h1 style={{padding:'2px 15px',color:'white'}}>BOOK MY CARE</h1>
        <ul id='ulList'>
            <li><NavLink to="/">HOME</NavLink></li>
            <li><NavLink to="/department">DEPARTMENT</NavLink></li>
            <li><NavLink to="/medical-center">MEDICAL CENTER</NavLink></li>
            <li><NavLink to='/doctors'>DOCTORS</NavLink></li>
            <li><NavLink to="/contact">CONTACT</NavLink></li> 
        </ul>
        <div id='bars' onClick={bars}>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
        </div>
        </nav>
    </>
    );
}
export default Navbar;