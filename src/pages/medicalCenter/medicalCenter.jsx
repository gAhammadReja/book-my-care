import React, { useState } from 'react';
import './mcStyle.css'
const MedicalCenter = ({ centers }) => {
  const [selectedCenter, setSelectedCenter] = useState(null);

  const handleClose = () => {
    setSelectedCenter(null);
  };

  return (
    <div className='mainMCList' style={{
        position:'relative'
    }}>
      {centers.map((center, index) => (
        <div key={index} className="center-listing">
          <div>
          <img src={center.img} alt="" />
          </div>
          <h3>{center.name}</h3>
          <p>{center.address}</p>
          <button onClick={() => setSelectedCenter(center)}>Visit Us</button>
        </div>
      ))}

      {selectedCenter && (
        <div className="popup">
          <div className='popup-div container'>
                      <div className="backgroundImg" style={{backgroundImage:`url(${selectedCenter.img})`}}>
    <div> 
    <h1 style={{textTransform:'uppercase'}}>{selectedCenter.name}</h1><br />
    <h3>KANAPUKUR, BHAGAWANGOLA, MURSHIDABAD, 742135</h3>
    </div>
</div>

<br /><br />
<h2 style={{
  textAlign:'center'
      }}>DOCTORS  TIME TABLE</h2>

<table>
<thead>
                <tr>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Day</th>
                    <th>Time</th>
                </tr>
            </thead>
            <tbody>
  
            {selectedCenter.doctors.map((doctor, index) => (
<tr key={index}>
<td>{doctor.name}</td>
<td>{doctor.specialty}</td>
<td>{doctor.day}</td>
<td>{doctor.time}</td>
</tr>
))}
            </tbody>
          
</table>
          <br /><br />
          <div className='display-flex'>
          <button onClick={handleClose} style={{
            backgroundColor:'white',
            position:'absolute',
            top:'1rem',
            right:'2rem',
            fontSize:'1.4rem'
          }}>❌</button>
          <button onClick={() => alert('Booking appointment...')}>Book Appointment</button>
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MedicalCenter;
