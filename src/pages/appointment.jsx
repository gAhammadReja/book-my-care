import React from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import './appointment.css'

const Appointment = () => {
 
  return (
    <div>
      <Navbar></Navbar>
      <div className="main">
      <h2 className="bgGrey p-5">Doctor Appointment Form</h2>
      </div>
      <div className="formBox">
        <form action="http://localhost:8000/appointment" method="get">
          <fieldset>
            <legend><strong>doctors details</strong></legend>
            <div className="doctor-detail">
              <div>
                <label htmlFor="DoctorsName">Choose Doctor's Name: </label>
                <select name="doctor" id="">
                <optgroup>
                  <option defaultValue="">--Select Doctor's Name--</option>
                  <option value="Mr Lorem Epsum">Lorem, ipsum dolor.</option>
                  <option value="Hello MS iuhhguy ">Lorem, ipsum dolor.</option>
                </optgroup>
                </select>
             </div>
              <div>
                <label htmlFor="MedicalCenter">Choose Medical Center: </label>
                <select name="medicalCenter" id="">
                <optgroup>
                  <option value="" defaultValue>--Select Doctor's Name--</option>
                  <option value=" Oh Wow Awsome">Lorem, ipsum dolor.</option>
                  <option value="Its Not A Joke">Lorem, ipsum dolor.</option>
                </optgroup>
                </select>
              </div>
            </div>
            <div id="FetxhTime">Fetching Available Time.....</div>
          </fieldset>
          {/* 
           */}
<fieldset>
<legend><strong>patient information</strong></legend>
<div>
<div>
  <label htmlFor="patient">Full Name Of The Patient</label>
  <input type="text" name="patient" />
</div>
<div>
<label htmlFor="gurdian">Gurdian's Name Of The Patient</label>  
<input type="text" name="gurdian"/>
</div>
<div>
  <label htmlFor="phone">Phone Number</label>  
  <input type="number" name="phone" id="" />
</div>
<div>
  <label htmlFor="dob">Date Of Birth</label>  
  <input type="date" name="dob" id="" />
</div>
<div>
  <label htmlFor="villCity">Village or City's Name</label>  
  <input type="text" name="villCity" id="" />
</div>
<div>
  <label htmlFor="pin">PIN Number</label>  
  <input type="number" name="pin" id="" />
</div>
<div>
  <label htmlFor="address">Full Address</label>  
  <textarea name="" id="" rows="4"></textarea>
</div>
</div>
</fieldset>
<fieldset>
  <legend><strong>about the illness</strong></legend>
  <div>
  <div>
  <label htmlFor="type">What Kind Of Problems Do The Patient Face:</label>  
  <ul className="display-flex"> 
    <li><input type="checkbox" name="type[]" id="physical_illness" />Physical illness</li>
    <li><input type="checkbox" name="type[]" id="mental_illness" />Mental illness</li>
    <li><input type="checkbox" name="type[]" id="infectious_illness" />Infectious illness</li>
    <li><input type="checkbox" name="type[]" id="non_infectious_illness" />Non-infectious illness</li>
    <li><input type="checkbox" name="type[]" id="deficiency_illness" />Deficiency illness</li>
    <li><input type="checkbox" name="type[]" id="inherited_illness" />Inherited illness</li>
    <li><input type="checkbox" name="type[]" id="degenerative_illness" />Degenerative illness</li>
    <li><input type="checkbox" name="type[]" id="others" />Others</li>
  </ul>
</div>
  </div>
</fieldset>
<fieldset className="display-flex" style={{justifyContent:'space-evenly'}}>
<input type="reset" style={{backgroundColor:'red'}} className="btn" />
  <input type="submit" className="btn"/>
</fieldset>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Appointment;
