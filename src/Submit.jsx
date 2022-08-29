import React from 'react';
import logo from './images/illustration-thank-you.svg';

import { useLocation } from 'react-router-dom';

const Submit = () => {
  const location = useLocation();

  return (
    <div className="thanks-container">
      <img src={logo} alt="Thank you"/>
      <h1>You selected {location.state.rating} out of 5</h1>
      <h2>Thank You!</h2>
      <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
    </div>
  );
}

export default Submit;