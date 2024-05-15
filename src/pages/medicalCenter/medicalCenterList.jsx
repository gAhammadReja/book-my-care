import React, { useState } from 'react';
import './mcStyle.css'
const MedicalCenterList = ({ centers }) => {
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
          <h3>{center.name}</h3>
          <p>{center.address}</p>
          <button onClick={() => setSelectedCenter(center)}>Visit Us</button>
        </div>
      ))}

      {selectedCenter && (
        <div className="popup">
          <div className='popup-div'>
          <h2>{selectedCenter.name}</h2>
          <p>{selectedCenter.address}</p>
          <br />

          <h3>Doctors Available:</h3>
          <ul>
            {selectedCenter.doctors.map((doctor, index) => (
              <li key={index}>{doctor.name} - {doctor.specialty}</li>
            ))}
          </ul>
          <h3>Timetable:</h3>
          <ul>
            {selectedCenter.timetable.map((time, index) => (
              <li key={index}>{time.day}: {time.hours}</li>
            ))}
          </ul>
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

export default MedicalCenterList;
