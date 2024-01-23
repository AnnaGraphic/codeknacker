// Game.jsx
import React, { useState, useEffect } from "react";
import FieldForRiddle from "./field-for-riddle";
import riddles from "./riddle";

const Game = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [revealedLetters, setRevealedLetters] = useState([]);
  const [score, setScore] = useState(0);

  const handleLetterGuess = (letter) => {
    if (currentWord.includes(letter)) {
      setRevealedLetters((prevLetters) => [...prevLetters, letter]);
      setScore((prevScore) => prevScore + 10);
    }
  };

  const handleNextLevel = () => {
    setCurrentLevel((prevLevel) => prevLevel + 1);
    setRevealedLetters([]);
    // Set the current word for the new level
    setCurrentWord(riddles[currentLevel + 1].word);
  };

  useEffect(() => {
    // Sicherheitsüberprüfung für currentLevelData und currentPuzzle
    const currentLevelData = riddles[currentLevel];
    if (currentLevelData && currentLevelData.puzzles) {
      const currentPuzzle = currentLevelData.puzzles[0];
      // Hier kannst du weitere Logik mit currentPuzzle durchführen, wenn nötig
    }

    // Check if the word is completely guessed
    if (
      revealedLetters.length === currentWord.length &&
      currentLevel < riddles.length - 1
    ) {
      // Player has guessed the word and there are more levels
      handleNextLevel();
    } else if (revealedLetters.length === currentWord.length) {
      // Player has guessed the word in the last level
      // You can add additional logic here
    }
  }, [currentWord, currentLevel, revealedLetters]);

  useEffect(() => {
    // Set the initial word for the first level
    setCurrentWord(riddles[currentLevel].word);
  }, [currentLevel]);

  return (
    <div>
      <h1>Game Component</h1>
      <p>Score: {score}</p>
      <p>Level: {currentLevel + 1}</p>
      <p>
        Gesuchtes Wort:{" "}
        {currentWord
          .split("")
          .map((letter) => "_ ")
          .join("")}
      </p>
      <div>
        {riddles[currentLevel].puzzles.map((puzzle, index) => (
          <div key={index}>
            <p>
              Hinweis {index + 1}: {puzzle.question} ={" "}
              {currentWord
                .split("")
                .map((letter) => "_ ")
                .join("")}
            </p>
          </div>
        ))}
      </div>
      {/* Render additional components or buttons */}
      <button onClick={() => handleLetterGuess("H")}>Guess H</button>
      <button onClick={() => handleNextLevel()}>Next Level</button>
    </div>
  );
};

export default Game;
