import React from "react";

interface ResultProps {
  userChoice: string;
  computerChoice: string;
  result: string | null;
}

const Result: React.FC<ResultProps> = ({
  userChoice,
  computerChoice,
  result,
}) => {
  return (
    <div className="result">
      <p>You chose: {userChoice}</p>
      <p>Computer chose: {computerChoice}</p>
      <h2>{result}</h2>
    </div>
  );
};

export default Result;
