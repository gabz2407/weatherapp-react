import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/gabriela-agostinho24/"
            target="_blank"
            rel="noreferrer"
          >
            Gabriela Agostinho
          </a>{" "}
          and it is open-sourced on{" "}
          <a
            href="https://github.com/gabz2407/weatherapp-react"
            target="_blank"
            rel="noreferrer"
          >
            GitHub.
          </a>
        </footer>
      </div>
    </div>
  );
}
