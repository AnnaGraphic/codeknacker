// Game.jsx
import React, { useState, useEffect } from "react";
import FieldForRiddle from "./field-for-riddle.jsx";

const Game = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [userInput, setUserInput] = useState(""); // Hinzufügen des Zustands für die Benutzereingabe

  const handleNextLevel = () => {
    setCurrentLevel((prevLevel) => prevLevel + 1);
    setUserInput(""); // Zurücksetzen der Benutzereingabe beim Wechsel zum nächsten Level
  };

  const handleUserInput = () => {
    // Überprüfe, ob die Eingabe gültig ist (nur ein Buchstabe)
    if (userInput.length === 1 && /[a-zA-ZßÜÄÖ]/.test(userInput)) {
      // Hier kannst du die Logik für die Verarbeitung der Antwort implementieren
      console.log("Benutzereingabe:", userInput);

      // Zurücksetzen der Benutzereingabe
      setUserInput("");
    } else {
      // Zeige eine Fehlermeldung an oder führe andere Aktionen für ungültige Eingaben durch
      console.error("Ungültige Eingabe. Bitte nur einen Buchstaben eingeben.");
    }
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
      {/* Eingabefeld für Benutzer */}
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        maxLength={1} // Begrenze die Eingabe auf einen Buchstaben
      />
      {/* Button zum Einreichen der Benutzereingabe */}
      <button onClick={handleUserInput}>Submit</button>
      <button onClick={handleNextLevel}>Next Level</button>
    </div>
  );
};

export default Game;
