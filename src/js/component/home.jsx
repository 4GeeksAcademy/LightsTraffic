import React, { useState } from "react";
import TrafficLight from "./trafficlight"; // Assuming TrafficLight.js is in the same directory

export default function Home() {
  const [clickedLight, setClickedLight] = useState(null);

  const handleClick = (color) => {
    setClickedLight(color);
  };

  return (
    <div>
      <div id="trafficTop"></div>
      <div id="container">
        <TrafficLight color="red" onClick={() => handleClick('red')} />
        
      </div>
    </div>
  );
}
