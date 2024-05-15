import React, { useState } from 'react'
import './card.css'
import { NavLink } from 'react-router-dom'

const Card=(props)=>{
    const [btnStyle,setBtnStyle]=useState({
        backgroundColor:'#620bff',textAlign:'center',borderRadius:'0.3rem'
    })
    const click=()=>{ 
        setBtnStyle({
            boxShadow:'0 0 2px black',
        backgroundColor:'#990bff',textAlign:'center',borderRadius:'0.4rem'
        })
    }
return(<>
<div className='card'>
    <img src={props.img} alt="" />
    <div className="title"><h2>{props.title} || {props.department}</h2></div>
    <div className="desc"><span>{props.desc} </span>
    <div className='btn' style={btnStyle} onClick={click}
    ><NavLink to={props.Action}><h3>{props.btn}</h3></NavLink></div>
    </div>
</div>
</>)
}
export default Card;