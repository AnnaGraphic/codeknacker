// Game.jsx
import React, { useState, useEffect } from "react";
import FieldForRiddle from "./field-for-riddle.jsx";

const Game = () => {
  const [currentLevel, setCurrentLevel] = useState(0);

  const renderLetterButtons = () => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZßÜÄÖ";
    const rows = [];

    for (let i = 0; i < alphabet.length; i += 7) {
      const row = alphabet.slice(i, i + 7);
      rows.push(row);
    }

    return rows.map((row, rowIndex) => (
      <div key={rowIndex}>
        {row.split("").map((letter) => (
          <button key={letter}>Guess {letter}</button>
        ))}
      </div>
    ));
  };

  const handleNextLevel = () => {
    setCurrentLevel((prevLevel) => prevLevel + 1);
  };

  useEffect(() => {
    setCurrentLevel(0); // Setze das Anfangslevel
  }, []);

  return (
    <div>
      <h1>Game Component</h1>
      <p>Score: 0</p>
      {/* Hier wird die FieldForRiddle-Komponente platziert */}
      <FieldForRiddle currentLevel={currentLevel} />
      {/* Hier werden die generierten Buchstaben-Buttons platziert */}
      {renderLetterButtons()}
      <button onClick={handleNextLevel}>Next Level</button>
    </div>
  );
};

export default Game;
