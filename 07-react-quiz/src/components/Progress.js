import React from "react";

export default function Progress({
  index,
  numQuestion,
  answer,
  maxPoints,
  points,
}) {
  return (
    <header className="progress">
      <progress max={numQuestion} value={index + Number(answer !== null)} />
      <p>
        <strong>{index + 1}</strong> / {numQuestion}
      </p>
      <p>
        <strong>{points}</strong> / 280
      </p>
    </header>
  );
}
