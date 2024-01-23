const riddles = [
  {
    level: 1,
    word: "HAUS",
    keyword: "HAUS", // Eindeutige Buchstaben: H, A, U, S
    puzzles: [
      {
        question: "Woraus besteht ein Baum?",
        solution: "Holz",
      },
      {
        question: "Welches Tier miaut und schläft gerne?",
        solution: "Katze",
      },
      {
        question: "Was fliegt hoch am Himmel und singt?",
        solution: "Vogel",
      },
      {
        question: "Was trägt man am Kopf und schützt vor der Sonne?",
        solution: "Hut",
      },
      {
        question: "Was ist gelb, süß und man kann es schälen?",
        solution: "Banane",
      },
      {
        question: "In welchem Raum kocht man normalerweise?",
        solution: "Küche",
      },
      {
        question: "Was hat vier Räder und fährt?",
        solution: "Auto",
      },
      // Weitere Rätsel für Level 1
    ],
  },
  // Weitere Level hinzufügen
];

// Beispiel für ein Keyword aus den Solution-Wörtern
const exampleSolutions = ["Auto", "Küche"];
const exampleKeyword = [...new Set(exampleSolutions.join(""))].sort().join("");

console.log("Beispiel-Keyword:", exampleKeyword);

export default riddles;
