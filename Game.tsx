import React, { useState } from "react";
import ChoiceButton from "./ChoiceButton";

export type Choice = "Rock" | "Paper" | "Scissors";

const Game: React.FC = () => {
  const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
  const [result, setResult] = useState<string>("");
  const [history, setHistory] = useState({ wins: 0, losses: 0, draws: 0 }); // Track history

  const choices: Choice[] = ["Rock", "Paper", "Scissors"];

  const determineWinner = (player: Choice, computer: Choice) => {
    if (player === computer) return "Draw";
    if (
      (player === "Rock" && computer === "Scissors") ||
      (player === "Paper" && computer === "Rock") ||
      (player === "Scissors" && computer === "Paper")
    ) {
      return "Win";
    }
    return "Lose";
  };

  const playGame = (choice: Choice) => {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    setPlayerChoice(choice);
    setComputerChoice(computerChoice);

    const gameResult = determineWinner(choice, computerChoice);
    setResult(gameResult);

    // Update history based on result
    setHistory((prevHistory) => {
      if (gameResult === "Win")
        return { ...prevHistory, wins: prevHistory.wins + 1 };
      if (gameResult === "Lose")
        return { ...prevHistory, losses: prevHistory.losses + 1 };
      if (gameResult === "Draw")
        return { ...prevHistory, draws: prevHistory.draws + 1 };
      return prevHistory;
    });
  };

  return (
    <div className="App">
      <div className="game">
        <h1>Rock Paper Scissors</h1>
        <div className="choices">
          {choices.map((choice) => (
            <ChoiceButton key={choice} choice={choice} onClick={playGame} />
          ))}
        </div>
        {playerChoice && computerChoice && (
          <div className="result">
            <p>You chose: {playerChoice}</p>
            <p>Computer chose: {computerChoice}</p>
            <p>Result: {result}</p>
          </div>
        )}
      </div>
      <div className="history">
        <h2>Game History</h2>
        <p>Wins: {history.wins}</p>
        <p>Losses: {history.losses}</p>
        <p>Draws: {history.draws}</p>
      </div>
    </div>
  );
};

export default Game;
