import React, { useState } from "react";

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
      <div>
        <span>{props.celsius}</span>
        <span>
          ˚C |{" "}
          <a href="/" onClick={showFahrenheit}>
            ˚F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span>{fahrenheit()}</span>
        <span>
          ˚F |
          <a href="/" onClick={showCelsius}>
            ˚C
          </a>{" "}
        </span>
      </div>
    );
  }
}
