import React from 'react';
import cat3 from './cat 3.png';


const Contact = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <h1>Coasdasds</h1>
      <img src={cat3} className="slide-right" alt="logo" />
    </div>
  );
};

export default Contact;
