// Datenbank für die Rätsel und die Buchstaben
const db = {
  riddles: [
    {
      text: "kein hund",
      solution: "katze",
    },
    {
      text: "der baum",
      solution: "eiche",
    },
  ],
  letters: [
    {
      letter: "a",
      value: 8,
    },
    {
      letter: "b",
      value: 2,
    },
  ],
};

// Benutzeroberfläche für die Eingabe und Lösung von Rätseln
const App = () => {
  const [riddle, setRiddle] = useState("");
  const [solution, setSolution] = useState("");

  const handleRiddleChange = (event) => {
    setRiddle(event.target.value);
  };

  const handleSolutionChange = (event) => {
    setSolution(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Rätsel eingeben"
        value={riddle}
        onChange={handleRiddleChange}
      />
      <input
        type="text"
        placeholder="Lösung eingeben"
        value={solution}
        onChange={handleSolutionChange}
      />
      <button
        onClick={() => {
          const answer = solveRiddle(riddle);
          setSolution(answer);
        }}
      >
        Löschen
      </button>
      <p>Lösung: {solution}</p>
    </div>
  );
};
