import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Doctors from './pages/doctors'; 
import './index.css'
import './App.css'
import Appointment from './pages/appointment';
import NotFoundPage from './pages/errors/pageNotFound';
import Department from './pages/department/department'; 
import MedicalCenter from './pages/medicalCenter/medicalCenter';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/department" element={<Department />} />
        <Route path="/medical-center" element={<MedicalCenter />} />
        
        <Route path="*" element={<NotFoundPage />} />

      </Routes>
    </Router>
  );
};

export default App;
