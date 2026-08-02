import React, { useState } from "react";
import { coachesData } from "./data";
import ProfileCard from "./components/ProfileCard";
import "./App.css";

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentCoach = coachesData[currentIndex];

  return (
    <div className="profile-container">
      <div className="selector-bar">
        {coachesData.map((c, idx) => (
          <button
            key={c.id}
            onClick={() => setCurrentIndex(idx)}
            className={currentIndex === idx ? "active-btn" : ""}
          >
            {c.name}
          </button>
        ))}
      </div>
      <ProfileCard coach={currentCoach} />
    </div>
  );
}