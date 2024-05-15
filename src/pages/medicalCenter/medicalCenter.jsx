import React from 'react'
import MedicalCenterList from './medicalCenterList'
import Navbar from '../../navbar/navbar'
import Footer from '../../footer/footer'

const medicalCenters = [
    {
        name: 'MediCare Clinic',
        address: '123 Health St, Wellness City',
        doctors: [
          { name: 'Dr. Smith', specialty: 'Cardiology' },
          { name: 'Dr. Jones', specialty: 'Pediatrics' }
        ],
        timetable: [
          { day: 'Monday', hours: '8am - 4pm' },
          { day: 'Tuesday', hours: '10am - 6pm' }
        ]
      },{
        name: 'MediCare Clinic',
        address: '123 Health St, Wellness City',
        doctors: [
          { name: 'Dr. Smith', specialty: 'Cardiology' },
          { name: 'Dr. Jones', specialty: 'Pediatrics' }
        ],
        timetable: [
          { day: 'Monday', hours: '8am - 4pm' },
          { day: 'Tuesday', hours: '10am - 6pm' }
        ]
      },{
        name: 'MediCare Clinic',
        address: '123 Health St, Wellness City',
        doctors: [
          { name: 'Dr. Smith', specialty: 'Cardiology' },
          { name: 'Dr. Jones', specialty: 'Pediatrics' }
        ],
        timetable: [
          { day: 'Fryday', hours: '8am - 4pm' },
          { day: 'Sunday', hours: '10am - 6pm' }
        ]
      },{
        name: 'MediCare Clinic',
        address: '123 Health St, Wellness City',
        doctors: [
          { name: 'Dr. Smith', specialty: 'Cardiology' },
          { name: 'Dr. Jones', specialty: 'Pediatrics' }
        ],
        timetable: [
          { day: 'Monday', hours: '8am - 4pm' },
          { day: 'Tuesday', hours: '10am - 6pm' }
        ]
      },{
        name: 'MediCare Clinic',
        address: '123 Health St, Wellness City',
        doctors: [
          { name: 'Dr. Smith', specialty: 'Cardiology' },
          { name: 'Dr. Jones', specialty: 'Pediatrics' }
        ],
        timetable: [
          { day: 'Monday', hours: '8am - 4pm' },
          { day: 'Tuesday', hours: '10am - 6pm' }
        ]
      },{
        name: 'MediCare Clinic',
        address: '123 Health St, Wellness City',
        doctors: [
          { name: 'Dr. Smith', specialty: 'Cardiology' },
          { name: 'Dr. Jones', specialty: 'Pediatrics' }
        ],
        timetable: [
          { day: 'Monday', hours: '8am - 4pm' },
          { day: 'Tuesday', hours: '10am - 6pm' }
        ]
      },{
        name: 'MediCare Clinic',
        address: '123 Health St, Wellness City',
        doctors: [
          { name: 'Dr. Smith', specialty: 'Cardiology' },
          { name: 'Dr. Jones', specialty: 'Pediatrics' }
        ],
        timetable: [
          { day: 'Monday', hours: '8am - 4pm' },
          { day: 'Tuesday', hours: '10am - 6pm' }
        ]
      },
    // ... other centers
  ]; 

const MedicalCenter = ()=>{
    return(<>
    <>
    <Navbar></Navbar>
    <MedicalCenterList centers={medicalCenters} />
    <Footer></Footer>
    </>
    </>)
}
export default MedicalCenter;
