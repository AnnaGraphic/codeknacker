// field-for-riddle.jsx
import React, { useState } from "react";
import { riddles } from "./riddle.js";

const FieldForRiddle = ({ currentLevel, userInput, onCheckSolution }) => {
  const puzzles = riddles[currentLevel]?.puzzles || [];
  const [selectedHint, setSelectedHint] = useState(1);

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
            style={{
              cursor: "pointer",
              fontWeight: index + 1 === selectedHint ? "bold" : "normal",
            }}
            onClick={() => setSelectedHint(index + 1)}
          >{`Hinweis ${index + 1}: ${puzzle?.hint}`}</span>
        </p>
        <p>{`Lösung: ${processWord(puzzle?.solution || "", [])}`}</p>
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

  const logWord = () => {
    const word = riddles[currentLevel]?.word;
    const wordType = typeof word;
    console.log(`Gesuchtes Wort: ${word} (Datentyp: ${wordType})`);
  };

  const logSolutions = () => {
    puzzles.forEach((puzzle, index) => {
      const solution = puzzle.solution;
      const solutionType = typeof solution;
      console.log(
        `Hinweis ${index + 1} Lösung: ${solution} (Datentyp: ${solutionType})`
      );
    });
  };

  // Aufrufen der logWord-Funktion
  // logWord();
  // Aufrufen der logSolutions-Funktion
  // logSolutions();

  return (
    <div>
      <p>Level: {currentLevel + 1}</p>
      {displayWord(riddles[currentLevel]?.word || "", [])}
      <div>Hinweise: {displayHints()}</div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => onCheckSolution(e.target.value)}
        maxLength={1}
      />
      <button onClick={checkUserInput}>Submit</button>
    </div>
  );
};

export default FieldForRiddle;
