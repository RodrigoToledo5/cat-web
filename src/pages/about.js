import React from 'react';
import cat1 from './cat 1.png';

const About = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <h2>About</h2>
      <div>
      <p>
      </p>
      </div>
      <img src={cat1} className="slide-right" alt="logo" />

    </div>
  );
};

export default About;