import React from 'react'
import './footer.css'
import '../index.css'

import { NavLink } from 'react-router-dom';
const Footer = ()=>{
return(
    <div className="wrapfooter bgGrey">
    <div className=' mainFooter display-flex p-10'>
        <div className="leftFoot">
<h2>ABOUT US</h2><br />
<div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At ratione inventore quaerat consequuntur officiis iusto dolorem error labore vel laudantium atque, exercitationem magnam maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quod sint distinctio dicta? Vero tempora voluptatem delectus quo esse facilis maiores, at officiis odio eligendi iste.</div>
<br /><br />
<h3>JOIN US ON</h3>
<div className="social display-flex">
    <i className="fa fa-facebook" aria-hidden="true"></i>
    <i className="fa fa-instagram" aria-hidden="true"></i>
    <i className="fa fa-youtube" aria-hidden="true"></i>
    <i className="fa fa-linkedin" aria-hidden="true"></i>

</div>
        </div>
        <div className="rightFoot display-flex">
            <div className="links">
            <h2><div className="blinks">IMPORTANTE LINKS</div></h2>
                <ul className='p-10 footer'>
                  <li><NavLink to='/h'>Important Link</NavLink></li>
                  <li><NavLink to='/'>Important Link</NavLink></li>
                  <li><NavLink to='/'>Important Link</NavLink></li>
                  <li><NavLink to='/'>Important Link</NavLink></li>
                </ul>
            </div>
            <div className="helpDesk p-10">
                 <div className='p-10'>
                    <form action="">
                        <label htmlFor="name">NAME : </label>
                        <input type="text" name='name' placeholder='Enter Your Name' />

                        <label htmlFor="email">E-MAIL : </label>
                        <input type="email" name='email' placeholder='user123@email.com' style={{
                                   border: '2px solid white',
                                   padding: '8px',
                                   borderRadius: '4px',
                                   flex: '1',
                                   margin: '2px'
                        }} />

                        <label htmlFor="question">FEEL FREE TO ASK : </label>
                        <textarea name='question' placeholder='Your Question Here' maxLength={200} />

                        <div  style={{
                            display:'flex',
                            justifyContent:'space-between'
                        }}>
                            <input type="reset" value="RESET" />
                        <input type="submit" value="SUBMIT" style={{
                            backgroundColor:'blueviolet'
                        }} />
                        </div>
                    </form>
                 </div>
            </div>
        </div>
    </div>
    </div>
);
}
export default Footer;