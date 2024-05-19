import React from "react";

export default function FinishScreen({ points, highscore, dispatch }) {
  const persentage = (points / 280) * 100;
  let emoji;
  if (persentage === 100) emoji = "🥇";
  if (persentage >= 80 && persentage < 100) emoji = "🎉";
  if (persentage >= 50 && persentage < 80) emoji = "👍";
  if (persentage >= 10 && persentage < 50) emoji = "😌";
  if (persentage <= 10 && persentage === 0) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You score {points} points out of 280. (
        {Math.ceil(persentage)}
        %)
      </p>
      <p className="highscore">
        (Highscore: <strong>{highscore}</strong>)
      </p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}
