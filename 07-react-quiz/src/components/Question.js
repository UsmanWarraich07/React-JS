import React from "react";

export default function Question({ question, dispatch, answer }) {
  return (
    <>
      <div className="options">
        <h2>{question.question}</h2>
        {question.options.map((option, index) => (
          <button
            className={`btn btn-option ${index === answer ? "answer" : ""} 
          ${
            answer !== null
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : " "
          }`}
            disabled={answer !== null}
            key={option}
            onClick={() =>
              dispatch({
                type: "newAnswer",
                payload: index,
              })
            }
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );
}
