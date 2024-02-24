import "./index.css";
import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function previousHendle() {
    if (step > 1) {
      setStep(step - 1);
    }
  }
  function nextHendle() {
    if (step < 3) {
      setStep(step + 1);
    }
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times; {isOpen === true ? <p>close</p> : <p>open</p>}
      </button>
      {isOpen && (
        <div class="steps">
          <div class="numbers">
            <div class={`step-1 ${step >= 1 ? "active" : ""}`}>1</div>
            <div class={`step-2 ${step >= 2 ? "active" : ""}`}>2</div>
            <div class={`step-3 ${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <p class="message">{`Step ${step}: ${messages[step - 1]}`}</p>

          <div class="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              class="previous"
              onClick={previousHendle}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              class="next"
              onClick={nextHendle}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
