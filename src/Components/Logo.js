import React from 'react';
import './Logo.css'; 

const HeaderComponent = () => {
  return (
    <div className="logo">
      <div className="phone">
        <p id="call">Call - 123-456-7890</p>
      </div>
      <div className="LogoImg">
        <img src="./images/logo.svg" alt="logo" />
      </div>
      <div className="Reserv">
        <p id="reservation">Reservation</p>
      </div>
    </div>
  );
};

export default HeaderComponent;
