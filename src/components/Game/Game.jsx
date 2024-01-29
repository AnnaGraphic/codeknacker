// Game.jsx
import React, { useState, useEffect } from "react";
import FieldForRiddle from "./field-for-riddle.jsx";
import "./game.css"; // Importiere die CSS-Datei
import { useUserContext } from "../../contexts/UserContext";

const Game = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [wordGuessed, setWordGuessed] = useState(false);
  const [showNextLevelButton, setShowNextLevelButton] = useState(false);
  const { userState, dispatch } = useUserContext();
  const { score } = userState;

  const handleNextLevel = () => {
    setCurrentLevel((prevLevel) => prevLevel + 1);
    setUserInput("");
    setWordGuessed(false);
    setShowNextLevelButton(false);
  };

  const handleCheckSolution = (input) => {
    setUserInput(input.toUpperCase());
  };

  const handleWordGuessed = () => {
    dispatch({
      type: "raiseScore",
      value: score + 10,
    });
    setWordGuessed(true);
    setShowNextLevelButton(true);
  };

  const handleResetRevealedLetters = () => {
    setShowNextLevelButton(false);
  };

  useEffect(() => {
    setCurrentLevel(0);

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
        wordGuessed={wordGuessed}
        onResetRevealedLetters={handleResetRevealedLetters}
      />
      {showNextLevelButton && (
        <button onClick={handleNextLevel}>Next Level</button>
      )}
    </div>
  );
};

export default Game;
