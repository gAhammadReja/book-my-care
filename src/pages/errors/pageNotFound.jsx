import React from 'react';
import { useNavigate } from 'react-router-dom';
import './errors.css'

const NotFoundPage = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate('/'); // Redirect to the home page
  };

  const goBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="not-found-container">
      <h1>404 - Page Not Found</h1>
      <p>Oops! Looks like you're lost in the universe.</p>
      <button onClick={goToHomePage}>Go to Home Page</button>
      <button onClick={goBack}>Back</button>
    </div>
  );
};

export default NotFoundPage;
