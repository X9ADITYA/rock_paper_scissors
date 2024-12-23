import React from "react";

// Import the `Choice` type from Game.tsx
type Choice = "Rock" | "Paper" | "Scissors";

interface ChoiceButtonProps {
  choice: Choice; // Use the Choice type
  onClick: (choice: Choice) => void; // Ensure type consistency
}

const ChoiceButton: React.FC<ChoiceButtonProps> = ({ choice, onClick }) => {
  return (
    <button className="choice-button" onClick={() => onClick(choice)}>
      {choice}
    </button>
  );
};

export default ChoiceButton;
