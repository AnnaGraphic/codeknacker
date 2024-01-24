// field-for-riddle.jsx
import React from "react";
import { riddles } from "./riddle";

const FieldForRiddle = ({ currentLevel, revealedLetters, usedLetters }) => {
  const currentPuzzle = riddles[currentLevel]?.puzzles[0] || {};
  const solution = currentPuzzle.solution || "";

  const getDisplayWord = () => {
    return solution
      .toString()
      .split("")
      .map((letter) => {
        const isRevealed = revealedLetters.includes(letter);
        const displayLetter = isRevealed ? letter : "_";
        const number =
          usedLetters && usedLetters.hasOwnProperty(letter)
            ? usedLetters[letter]
            : "";

        return (
          <span key={letter}>
            {displayLetter}
            {isRevealed && <sup>{number}</sup>}
          </span>
        );
      })
      .join(" ");
  };
  return (
    <div>
      <p>Level: {currentLevel + 1}</p>
      <p>Gesuchtes Wort: {getDisplayWord()}</p>
      {riddles[currentLevel]?.puzzles.map((puzzle, index) => (
        <div key={index}>
          <p>
            Hinweis {index + 1}: {puzzle?.question}
          </p>
          <p>Lösung: {getDisplayWord()}</p>
        </div>
      ))}
    </div>
  );
};

export default FieldForRiddle;
