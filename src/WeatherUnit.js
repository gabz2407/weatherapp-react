import React, { useState } from "react";

import "./WeatherUnit.css";

export default function WeatherUnit(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return Math.round((props.celsius * 9) / 5 + 32);
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherUnit">
        <span className="temp">{props.celsius}</span>
        <span className="unit">
          ˚C |{" "}
          <a href="/" onClick={showFahrenheit}>
            ˚F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherUnit">
        <span className="temp">{fahrenheit()}</span>
        <span className="unit">
          ˚F |
          <a href="/" onClick={showCelsius}>
            ˚C
          </a>{" "}
        </span>
      </div>
    );
  }
}
