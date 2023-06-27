import "./styles/First.css";
import { useState, useEffect } from "react";

export default function First(props) {
  let [isWaiting, setIsWaiting] = useState(true);

  useEffect(function () {
    setTimeout(function () {
      setIsWaiting(false);
    }, 1500);
  });

  return (
    <div className="hero">
      <h1>
        <span className="hero-heading bold">Quizzical</span>
      </h1>
      <p className="hero-para">
        Unleash Your Knowledge, Embrace the Quizvolution!
      </p>
      <button
        onClick={props.onClick}
        disabled={isWaiting}
        className="hero-button bold"
      >
        {isWaiting ? "Please Wait..." : "Start Quiz"}
      </button>
    </div>
  );
}
