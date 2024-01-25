// Game.jsx
import React, { useState, useEffect } from "react";
import FieldForRiddle from "./field-for-riddle.jsx";

const Game = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [userInput, setUserInput] = useState("");

  const handleNextLevel = () => {
    setCurrentLevel((prevLevel) => prevLevel + 1);
    setUserInput("");
  };

  const handleCheckSolution = (input) => {
    setUserInput(input.toUpperCase());
  };

  useEffect(() => {
    setCurrentLevel(0);
  }, []);

  return (
    <div>
      <h1>Game</h1>
      <p>Score: 0</p>
      <FieldForRiddle
        currentLevel={currentLevel}
        userInput={userInput}
        onCheckSolution={handleCheckSolution}
      />
      <button onClick={handleNextLevel}>Next Level</button>
    </div>
  );
};

export default Game;
