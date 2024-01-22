// Logik für die Lösung der Rätsel

export default function Game({ riddle, answer }) {
  const solved = solveRiddle(riddle) === answer;
  return (
    <div className="game">
      <p>{solved ? "Richtig!" : "Leider falsch."}</p>
    </div>
  );
}

function isLoggedIn() {
  // Abfrage der Authentifizierungsdaten des Benutzers aus dem Speicher

  // Wenn der Benutzer nicht angemeldet ist, ...
  if (!isUserLoggedIn()) {
    // ... zeige eine Fehlermeldung an.
    alert("Du musst dich zuerst anmelden.");
    return false;
  } else {
    return true;
  }
}
