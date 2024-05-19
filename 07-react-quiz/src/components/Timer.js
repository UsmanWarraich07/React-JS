import React, { useEffect } from "react";

export default function Timer({ dispatch, romaingSecs }) {
  const mins = Math.floor(romaingSecs / 60),
    secs = Math.floor(romaingSecs % 60);

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {mins < 10 ? "0" : ""}
      {mins}:{secs < 10 ? "0" : ""}
      {secs}
    </div>
  );
}
