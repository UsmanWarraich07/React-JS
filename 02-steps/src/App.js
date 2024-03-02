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
      {!isOpen && (
        <div className="steps">
          <h2 className="message">Tab the icon to open!</h2>
        </div>
      )}
      {isOpen && (
        <div class="steps">
          <div class="numbers">
            <div class={`step-1 ${step >= 1 ? "active" : ""}`}>1</div>
            <div class={`step-2 ${step >= 2 ? "active" : ""}`}>2</div>
            <div class={`step-3 ${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          {/* <p class="message">{`Step ${step}: ${messages[step - 1]}`}</p> */}
          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          <div class="buttons">
            <Button textColor="#fff" bgColor="#7950f2" onClick={previousHendle}>
              <span>👈</span> Previous
            </Button>
            <Button textColor="#fff" bgColor="#7950f2" onClick={nextHendle}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ color: textColor, backgroundColor: bgColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}

export default App;
