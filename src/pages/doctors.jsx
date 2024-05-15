// DoctorList.js

import React from 'react';
import Navbar from '../navbar/navbar';
import Card from '../components/cards';
import MySearch from '../components/searchBar'
import './doctors.css'
import Footer from '../footer/footer';
const Doctors = () => {
  // Dummy data for the list of doctors
  const doctors = [
    { id: 1, name: 'Dr. John Doe', department: 'Cardiologist', img:'/logo192.png'},
    { id: 2, name: 'Dr. SomeOne Sah', department: 'Cardiologist', img: '/logo192.png'
  },
  ];

  return (
    <>
    <div className=''>
    <Navbar/>
    <div className='p-10 animation2' style={{
      width:'1200px',
      margin:'auto',
      maxWidth:'96vw'
    }}>
      <h1>HOW WE APPOINT DOCTOR FOR YOU ?</h1>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='size20'>B</span>ook my care , are taking the responsibility to complete the process of taking appointment of your desire Doctors.
      <br></br> Our Goal is giving a quick and easy appointment to your nearby health care centers or doctors so that <b>YOU CAN GATE CHECK UP YOUR HEADACHE WITHOUT ANY EXTRA HEADACHE</b>
      <div><br />
      <MySearch placeholder='Search A Doctor'></MySearch>
      </div>
    </div>
 
      <div className='wrapper display-flex animation'>

        {doctors.map(doctor => (
           <Card img={doctor.img} title={doctor.name} department={doctor.department} Action='/appointment' btn='Click For Appointment' desc='Expert in oidhffj have experioyenifm pojgroihmd wpjg 20 dhfid'/> 
        ))}
      </div>
    </div>
<div style={{borderTop:'1px solid red', boxShadow:'0px -5px 10px rgb(255,80,0)'}}>
<Footer></Footer>
</div>
    </>
  );
};

export default Doctors;
