import React, { useState } from 'react';

const TrafficLight = () => {
  const [activeLight, setActiveLight] = useState(null);

  const handleClick = (color) => {
    setActiveLight(color);
  };

  const lightStyle = (color) => {
    const lightColors = {
      red: 'red',
      yellow: 'yellow',
      green: 'green',
    };
    return {
      backgroundColor: activeLight === color ? lightColors[color] : 'grey',
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      margin: '5px',
    };
  };

  return (
    <div className="traffic-light-container">
      <div className="traffic-top"></div>
      <div className="light-container">
        <div style={lightStyle('red')} onClick={() => handleClick('red')} />
        <div style={lightStyle('yellow')} onClick={() => handleClick('yellow')} />
        <div style={lightStyle('green')} onClick={() => handleClick('green')} />
      </div>
    </div>
  );
};

export default TrafficLight;
