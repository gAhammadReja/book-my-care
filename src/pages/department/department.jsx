import React from 'react'
import './style.css'
import Navbar from '../../navbar/navbar';
import Footer from '../../footer/footer';

const Department = ()=>{
let departments=[
    {
        department:'Physical illness',
        doctors:['lorem iugpug','Epsum yufg','ergretreqt er', 'ertert erte'],
        photo:'/logo192.png',
        medicalCenter:['iujhgofighreo','ueyqrgtreigt']
    },{
        department:'Mental illness',
        doctors:['lorem iugpug','Epsum yufg','ergretreqt er', 'ertert erte'],
        photo:'/logo192.png',
        medicalCenter:['iujhgofighreo','ueyqrgtreigt']
    },{
        department:'Infectious illness',
        doctors:['lorem iugpug','Epsum yufg','ergretreqt er', 'ertert erte'],
        photo:'/logo192.png',
        medicalCenter:['iujhgofighreo','ueyqrgtreigt']
    },{
        department:'Non-infectious illness',
        doctors:['lorem iugpug','Epsum yufg','ergretreqt er', 'ertert erte'],
        photo:'/logo192.png',
        medicalCenter:['iujhgofighreo','ueyqrgtreigt']
    },{
        department:'Deficiency illness',
        doctors:['lorem iugpug','Epsum yufg','ergretreqt er', 'ertert erte'],
        photo:'/logo192.png',
        medicalCenter:['iujhgofighreo','ueyqrgtreigt']
    },{
        department:'Inherited illness',
        doctors:['lorem iugpug','Epsum yufg','ergretreqt er', 'ertert erte'],
        photo:'/logo192.png',
        medicalCenter:['iujhgofighreo','ueyqrgtreigt']
    },{
        department:'Degenerative illness',
        doctors:['lorem iugpug','Epsum yufg','ergretreqt er', 'ertert erte'],
        photo:'/logo192.png',
        medicalCenter:['iujhgofighreo','ueyqrgtreigt']
    },{
        department:'Pregnancy Related',
        doctors:['lorem iugpug','Epsum yufg','ergretreqt er', 'ertert erte'],
        photo:'/logo192.png',
        medicalCenter:['iujhgofighreo','ueyqrgtreigt']
    },{
        department:'Dentist ',
        doctors:['lorem iugpug','Epsum yufg','ergretreqt er', 'ertert erte'],
        photo:'/logo192.png',
        medicalCenter:['iujhgofighreo','ueyqrgtreigt']
    }
]; 
    return(
        <div>
    <Navbar/>
  <div className="wrapper">
    <div className='heading' style={{
        textAlign:'center',
        color:'blueviolet',
        fontFamily:'cursive',
        fontSize:'1.5rem',
        fontWeight:'700'
    }}> DIFFERENT TYPES OF DISEASES AND RESPECTED DOCTORS </div><br />
  <div className="department-list">
        {departments.map((dept, index) => (
          <div key={index} className="department-item">
            <h3>{dept.department}</h3>
            <img src={dept.photo} alt={dept.department} />
            <h4>Appointed Doctors Are:</h4>
            <ul className='d-flex'>
              {dept.doctors.map((doctor, docIndex) => (
                <li key={docIndex}> {doctor}</li>
              ))}
            </ul>
            <br />
            <h4>Doctors Are Available On: </h4>
            <ul className='d-flex'>
              {dept.medicalCenter.map((center, centerIndex) => (
                <li key={centerIndex}>{center}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
  </div>
    <Footer/>
        </div>
    );
}
export default Department;