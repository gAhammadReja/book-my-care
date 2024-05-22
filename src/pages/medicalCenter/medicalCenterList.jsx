
import React from 'react'
import Navbar from '../../navbar/navbar'
import Footer from '../../footer/footer'
import MedicalCenter from './medicalCenter';
import image from './download.jpg'
const medicalCenters = [
  {   img:image,
    name: 'MediCare Clinic',
    address: '123 Health St, Wellness City',
    doctors: [
      { name: 'Dr. Smith', specialty: 'Cardiology', day: 'Monday', time: '8am - 4pm'  },
      { name: 'Dr. Jones', specialty: 'Pediatrics', day: 'Tuesday', time: '10am - 6pm' }
    ],
  },{   img:image,
    name: 'MediCare Clinic',
    address: '123 Health St, Wellness City',
    doctors: [
      { name: 'Dr. Smith', specialty: 'Cardiology', day: 'Monday', time: '8am - 4pm'  },
      { name: 'Dr. Jones', specialty: 'Pediatrics', day: 'Tuesday', time: '10am - 6pm' }
    ],
  },{   img:image,
    name: 'MediCare Clinic',
    address: '123 Health St, Wellness City',
    doctors: [
      { name: 'Dr. Smith', specialty: 'Cardiology', day: 'Monday', time: '8am - 4pm'  },
      { name: 'Dr. Jones', specialty: 'Pediatrics', day: 'Tuesday', time: '10am - 6pm' }
    ],
  },{   img:image,
    name: 'MediCare Clinic',
    address: '123 Health St, Wellness City',
    doctors: [
      { name: 'Dr. Smith', specialty: 'Cardiology', day: 'Monday', time: '8am - 4pm'  },
      { name: 'Dr. Jones', specialty: 'Pediatrics', day: 'Tuesday', time: '10am - 6pm' }
    ],
  },{   img:image,
    name: 'MediCare Clinic',
    address: '123 Health St, Wellness City',
    doctors: [
      { name: 'Dr. Smith', specialty: 'Cardiology', day: 'Monday', time: '8am - 4pm'  },
      { name: 'Dr. Jones', specialty: 'Pediatrics', day: 'Tuesday', time: '10am - 6pm' }
    ],
  },{   img:image,
    name: 'MediCare Clinic',
    address: '123 Health St, Wellness City',
    doctors: [
      { name: 'Dr. Smith', specialty: 'Cardiology', day: 'Monday', time: '8am - 4pm'  },
      { name: 'Dr. Jones', specialty: 'Pediatrics', day: 'Tuesday', time: '10am - 6pm' }
    ],
  },
    // ... other centers
  ]; 

const MedicalCenterList = ()=>{
    return(<>
    <>
    <Navbar></Navbar>
    <MedicalCenter centers={medicalCenters} />
    <Footer></Footer>
    </>
    </>)
}
export default MedicalCenterList;
