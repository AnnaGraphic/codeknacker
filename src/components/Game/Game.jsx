// Game.jsx
import React, { useState, useEffect } from "react";
import FieldForRiddle from "./field-for-riddle.jsx";
import "./game.css";

const Game = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [score, setScore] = useState(0);
  const [showNextLevelButton, setShowNextLevelButton] = useState(false);

  const handleNextLevel = () => {
    setCurrentLevel((prevLevel) => prevLevel + 1);
    setUserInput("");
    setShowNextLevelButton(false);
  };

  const handleCheckSolution = (input) => {
    setUserInput(input.toUpperCase());
  };

  const handleWordGuessed = () => {
    setScore((prevScore) => prevScore + 10);
    setShowNextLevelButton(true);
  };

  const handleResetRevealedLetters = () => {
    setShowNextLevelButton(false);
  };

  useEffect(() => {
    setCurrentLevel(0);
    setScore(0);
    setShowNextLevelButton(false);
  }, []);

  return (
    <div className="content">
      <h1>Game</h1>
      <p>Score: {score}</p>
      <FieldForRiddle
        currentLevel={currentLevel}
        userInput={userInput}
        onCheckSolution={handleCheckSolution}
        onWordGuessed={handleWordGuessed}
        onResetRevealedLetters={handleResetRevealedLetters}
        onNextLevel={handleNextLevel}
        showNextLevelButton={showNextLevelButton}
      />
    </div>
  );
};

export default Game;
