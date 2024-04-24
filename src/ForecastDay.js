import React from "react";

export default function ForecastDay(props) {
  let max = Math.round(props.forecast.temperature.maximum);
  let min = Math.round(props.forecast.temperature.minimum);

  function day() {
    let date = new Date(props.forecast.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="ForecastDay ">
      <div>{day()}</div>
      <img
        src={props.forecast.condition.icon_url}
        alt={props.forecast.condition.description}
      />
      <div>
        <span className="forecast-max-temp"> {max}˚</span>
        <span>{min}˚</span>
      </div>
    </div>
  );
}
