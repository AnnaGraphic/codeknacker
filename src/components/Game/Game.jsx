// Game.jsx
import React, { useState, useEffect } from "react";
import FieldForRiddle from "./field-for-riddle";
import { riddles } from "./riddle";

const Game = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [revealedLetters, setRevealedLetters] = useState([]);
  const [score, setScore] = useState(0);

  const handleNextLevel = () => {
    setCurrentLevel((prevLevel) => prevLevel + 1);
    setRevealedLetters([]);
    // Setze das aktuelle Wort für das neue Level
    setCurrentWord(riddles[currentLevel + 1]?.word || "");
  };

  const renderLetterButtons = () => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZßÜÄÖ";
    return alphabet.split("").map((letter) => (
      <button key={letter} onClick={() => revealLetter(letter)}>
        Guess {letter}
      </button>
    ));
  };

  const revealLetter = (letter) => {
    if (!revealedLetters.includes(letter)) {
      // Füge den Buchstaben nur hinzu, wenn er noch nicht aufgedeckt wurde
      // Überprüfe auch, ob der Buchstabe im Lösungswort vorhanden ist
      if (currentWord.includes(letter)) {
        setRevealedLetters((prevLetters) => [...prevLetters, letter]);
        // Hier könntest du auch die Punktzahl erhöhen oder weitere Aktionen durchführen.
      }
    }
  };

  useEffect(() => {
    // Überprüfe, ob das Wort komplett geraten wurde
    if (
      revealedLetters.length === currentWord.length &&
      currentLevel < riddles.length - 1
    ) {
      // Spieler hat das Wort geraten und es gibt mehr Level
      handleNextLevel();
    } else if (revealedLetters.length === currentWord.length) {
      // Spieler hat das Wort im letzten Level geraten
      // Du kannst hier zusätzliche Logik hinzufügen
    }
  }, [currentWord, currentLevel, revealedLetters]);

  useEffect(() => {
    // Setze das Anfangswort für das erste Level
    setCurrentWord(riddles[currentLevel]?.word || "");
  }, [currentLevel]);

  return (
    <div>
      <h1>Game Component</h1>
      <p>Score: {score}</p>
      {/* Hier wird die FieldForRiddle-Komponente platziert */}
      <FieldForRiddle
        currentLevel={currentLevel}
        revealedLetters={revealedLetters}
      />
      {/* Hier werden die generierten Buchstaben-Buttons platziert */}
      {renderLetterButtons()}
      <button onClick={() => handleNextLevel()}>Next Level</button>
    </div>
  );
};

export default Game;
