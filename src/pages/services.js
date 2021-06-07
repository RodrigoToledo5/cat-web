import React from 'react';
import cat2 from './cat 2.png';

const services = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <h1>Services</h1>
      <img src={cat2} className="slide-right" alt="logo" />
    </div>
  );
};

export default services;