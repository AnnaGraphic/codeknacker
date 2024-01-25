import React, { useState } from "react";
import { riddles } from "./riddle.js";

// Funktion, die sicherstellt, dass 'solution' ein String ist
const ensureString = (value) => {
  return Array.isArray(value) ? value.join("") : value;
};

const FieldForRiddle = ({ currentLevel, userInput }) => {
  const puzzles = riddles[currentLevel]?.puzzles || [];
  const [selectedHint, setSelectedHint] = useState(1);

  // Funktion, die ein Wort in Buchstaben teilt und durch Unterstriche ersetzt
  const processWord = (word, revealedLetters) => {
    return word
      .split("")
      .map((letter, index) => (
        <span key={index}>
          {revealedLetters.includes(letter) ? letter : "_ "}
        </span>
      ));
  };

  // Funktion, die das gesuchte Wort anzeigt und processWord aufruft
  const displayWord = (word, revealedLetters) => {
    return (
      <div>
        <p>Gesuchtes Wort: {processWord(word, revealedLetters)}</p>
      </div>
    );
  };

  // Funktion, die die Hinweise mit Lösung anzeigt
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
        <p>{`Lösung: ${processWord(ensureString(puzzle?.solution), [])}`}</p>
      </div>
    ));
  };

  return (
    <div>
      <p>Level: {currentLevel + 1}</p>
      {displayWord(riddles[currentLevel]?.word || "", [])}
      <div>Hinweise: {displayHints()}</div>
    </div>
  );
};

export default FieldForRiddle;
