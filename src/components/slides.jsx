import React from 'react'
import './slides.css'

const Slide=(props)=>{
return(<>
<div className='slide'>
    <img src={props.img} alt="" />
    <div className="title"><h2>{props.title}</h2></div>
    <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum porro eveniet possimus ab iure ad, quo delectus temporibus aut illo ipsum amet sit accusamus ullam perspiciatis eius, vitae ipsam aliquid.</div>
</div>
</>)
}
export default Slide;