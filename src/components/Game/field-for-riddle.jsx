

// field-for-riddle.jsx

//TODO:
// 1. Fix the but that the next level Button will show to early
// 2. submit button mit enter key verbinden
// 3. riddle in data verschieben


import React, { useState, useEffect } from "react";
import { riddles } from "./riddle.js";

const FieldForRiddle = ({
  currentLevel,
  userInput,
  onCheckSolution,
  onWordGuessed,
  onResetRevealedLetters,
}) => {
  const puzzles = riddles[currentLevel]?.puzzles || [];
  const [selectedHint, setSelectedHint] = useState(1);
  const [revealedLetters, setRevealedLetters] = useState([]);
  const [isWordGuessed, setIsWordGuessed] = useState(false); // Neuer Zustand für die Überprüfung des vollständigen Wortes

  useEffect(() => {
    // Reset revealed letters and hide the "Next Level" button when a new level starts
    setRevealedLetters([]);
    setIsWordGuessed(false);
  }, [currentLevel]);

  const processWord = (word, revealedLetters) => {
    return word
      .split("")
      .map((letter) => (revealedLetters.includes(letter) ? letter : "_"))
      .join(" ");
  };

  const displayWord = (word, revealedLetters) => {
    return (
      <div>
        <p>Gesuchtes Wort: {processWord(word, revealedLetters)}</p>
      </div>
    );
  };

  const displayHints = () => {
    return puzzles.map((puzzle, index) => (
      <div key={index + 1}>
        <p>
          <span
            className={`Hint ${
              index + 1 === selectedHint ? "SelectedHint" : ""
            }`}
            onClick={() => setSelectedHint(index + 1)}
          >{`Hinweis ${index + 1}: ${puzzle?.hint}`}</span>
        </p>
        <p>{`Lösung: ${processWord(
          puzzle?.solution || "",
          revealedLetters
        )}`}</p>
      </div>
    ));
  };

  const checkUserInput = () => {
    if (userInput && selectedHint) {
      const selectedPuzzle = puzzles[selectedHint - 1];
      const solution = selectedPuzzle?.solution;

      if (typeof solution === "string") {
        const userInputIndex = solution.indexOf(userInput.toUpperCase());

        if (userInputIndex !== -1) {
          console.log(
            `Buchstabe ist vorhanden an Position ${userInputIndex + 1}`
          );
          setRevealedLetters((prevRevealed) => [
            ...prevRevealed,
            userInput.toUpperCase(),
          ]);

          // Check if all letters are revealed
          if (solution.length === revealedLetters.length + 1) {
            onWordGuessed();
            setIsWordGuessed(true); // Setze den Zustand auf true, wenn das Wort erraten wurde
          }
        } else {
          console.log("Buchstabe im Hinweis nicht vorhanden");
        }
      }
    } else {
      console.log(
        "Bitte wählen Sie einen Hinweis und geben Sie einen Buchstaben ein."
      );
    }
  };

  return (
    <div>
      <p>Level: {currentLevel + 1}</p>
      {displayWord(riddles[currentLevel]?.word || "", revealedLetters)}
      <div>Hinweise: {displayHints()}</div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => onCheckSolution(e.target.value)}
        maxLength={1}
      />
      <button onClick={checkUserInput}>Submit</button>
      {isWordGuessed && (
        <button onClick={onResetRevealedLetters}>Next Level</button>
      )}
    </div>
  );
};

export default FieldForRiddle;
