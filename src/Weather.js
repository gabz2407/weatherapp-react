import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather container">
      <form>
        <div className="row">
          <div className="col-10">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <input
            type="submit"
            value="Search"
            className="btn btn-secondary col-2"
          />
        </div>
      </form>
      <h1>City</h1>
      <ul>
        <li>todays day and time</li>
        <li>Weather description</li>
      </ul>
      <div className="row">
        <div className="col-6">🌻 10˚C</div>
        <div className="col-6">
          <ul>
            <li>Precipitation: %</li>
            <li>Humidity: %</li>
            <li>Wind speed: km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
