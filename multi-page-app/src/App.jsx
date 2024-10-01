//import { useState } from "react";
import { useState } from "react";
import "./App.css";
import PropType from "prop-types";

Steps.propTypes = {
  children: PropType.any,
};
StepsBlock.propTypes = {
  step: PropType.any,
};
Step1.propTypes = {
  nextHendle: PropType.func,
  previousHendle: PropType.func,
  step: PropType.any,
};
Buttons.propTypes = {
  nextHendle: PropType.func,
  previousHendle: PropType.func,
  step: PropType.any,
};
Step2.propTypes = {
  nextHendle: PropType.func,
  previousHendle: PropType.func,
  step: PropType.any,
};
Step3.propTypes = {
  nextHendle: PropType.func,
  previousHendle: PropType.func,
  step: PropType.any,
};
Step4.propTypes = {
  nextHendle: PropType.func,
  previousHendle: PropType.func,
  step: PropType.any,
};

function App() {
  const [step, setStep] = useState(1);
  function nextHendle() {
    if (step < 4) {
      setStep((prevStep) => prevStep + 1);
    }
  }
  function previousHendle() {
    if (step > 1) {
      setStep((prevStep) => prevStep - 1);
    }
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1
            nextHendle={nextHendle}
            step={step}
            previousHendle={previousHendle}
          />
        );
      case 2:
        return (
          <Step2
            step={step}
            nextHendle={nextHendle}
            previousHendle={previousHendle}
          />
        );
      case 3:
        return (
          <Step3
            step={step}
            nextHendle={nextHendle}
            previousHendle={previousHendle}
          />
        );
      case 4:
        return (
          <Step4
            step={step}
            nextHendle={nextHendle}
            previousHendle={previousHendle}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="app">
      <StepsBlock step={step} />
      <div className="infoContainer">{renderStep()}</div>
    </div>
  );
}

export default App;

function StepsBlock({ step }) {
  return (
    <div className="steps">
      <Steps>
        <div className={`number ${step === 1 ? "active" : ""}`}>1</div>
        <div className="text">
          <p style={{ color: "#ccc" }}>STEP 1</p>
          <p>YOUR INFO</p>
        </div>
      </Steps>
      <Steps>
        <div className={`number ${step === 2 ? "active" : ""}`}>2</div>
        <div className="text">
          <p style={{ color: "#ccc" }}>STEP 2</p>
          <p>SELECT PLAN</p>
        </div>
      </Steps>
      <Steps>
        <div className={`number ${step === 3 ? "active" : ""}`}>3</div>
        <div className="text">
          <p style={{ color: "#ccc" }}>STEP 3</p>
          <p>ADD-ONE</p>
        </div>
      </Steps>
      <Steps>
        <div className={`number ${step === 4 ? "active" : ""}`}>4</div>
        <div className="text">
          <p style={{ color: "#ccc" }}>STEP 4</p>
          <p>SUMMARY</p>
        </div>
      </Steps>
    </div>
  );
}

function Steps({ children }) {
  return <div className="step">{children}</div>;
}

function Step1({ nextHendle, step, previousHendle }) {
  return (
    <div className="infoContainer">
      <div className="heading">
        <h2>Personal Info</h2>
        <p>Plese provide your name, Email address, and phone number.</p>
      </div>
      <form className="form">
        <label htmlFor="name">Your name</label>
        <input type="text" placeholder=" e.g Usman warraich" />
        <label htmlFor="email"> Email address</label>
        <input type="email" placeholder=" e.g usman@gmail.com" />
        <label htmlFor="num">Phone number</label>
        <input type="number" placeholder=" e.g +923 249694927" />
      </form>
      <Buttons
        step={step}
        previousHendle={previousHendle}
        nextHendle={nextHendle}
      />
    </div>
  );
}

function Buttons({ step, previousHendle, nextHendle }) {
  return (
    <div className="btns">
      <button
        style={{ visibility: step >= 2 ? "visible" : "hidden" }}
        className="back"
        onClick={previousHendle}
      >
        Go back
      </button>
      <button
        style={
          step >= 4
            ? { backgroundColor: "#614cff" }
            : { backgroundColor: "#021a6c" }
        }
        className="next"
        onClick={nextHendle}
      >
        {step >= 4 ? "Confirm" : "Next step"}
      </button>
    </div>
  );
}

function Step2({ step, previousHendle, nextHendle }) {
  return (
    <div className="infoContainer">
      <div className="heading">
        <h2>Select your plan</h2>
        <p>Your have the option of monthly or yearly billing.</p>
      </div>
      <SelectPlan />
      <Buttons
        step={step}
        previousHendle={previousHendle}
        nextHendle={nextHendle}
      />
    </div>
  );
}
function Step3({ step, previousHendle, nextHendle }) {
  return (
    <div className="infoContainer">
      <div className="heading">
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming exprience.</p>
      </div>
      <AddOns />
      <Buttons
        step={step}
        previousHendle={previousHendle}
        nextHendle={nextHendle}
      />
    </div>
  );
}

function AddOns() {
  return (
    <div className="addons">
      <div className="card">
        <div className="name">
          <input type="checkbox" />
          <p className="txt">
            <b>Online service</b>
            <p>Access multiplayer games.</p>
          </p>
        </div>
        <p className="price">+1$/mo</p>
      </div>
      <div className="card">
        <div className="name">
          <input type="checkbox" />
          <p className="txt">
            <b>Larger storage</b>
            <p>Extra 1TB cloud save.</p>
          </p>
        </div>
        <p className="price">+2$/mo</p>
      </div>
      <div className="card">
        <div className="name">
          <input type="checkbox" />
          <p className="txt">
            <b>Customizable Profile</b>
            <p>Custom theme on your profile.</p>
          </p>
        </div>
        <p className="price">+2$/mo</p>
      </div>
    </div>
  );
}

function Step4({ step, previousHendle, nextHendle }) {
  return (
    <div className="infoContainer">
      <div className="heading">
        <h2>Finnising up</h2>
        <p>Dubble-check everything looks OK before confirming.</p>
      </div>
      <Finnishing />
      <Buttons
        step={step}
        previousHendle={previousHendle}
        nextHendle={nextHendle}
      />
    </div>
  );
}

function Finnishing() {
  return (
    <div className="container">
      <div className="main">
        <div className="after">
          <p>
            Arsade (monthly) <br /> <a href="#">Change</a>
          </p>
          <p>$9/mo</p>
        </div>
        <div className="horizontalLine"></div>
        <div className="before">
          <div>
            <p style={{ color: "#ccc" }}>Online service</p> <p>$1/mo</p>
          </div>
          <div>
            <p style={{ color: "#ccc" }}>Larger storage</p> <p>$2/mo</p>
          </div>
        </div>
      </div>
      <div className="total">
        <p style={{ color: "#ccc" }}>Total(per month)</p>
        <p style={{ fontSize: "18px", color: "#614cff", fontWeight: 600 }}>
          $12/mo
        </p>
      </div>
    </div>
  );
}

function SelectPlan() {
  // const toggleSwitch = document.getElementById("toggleSwitch");
  // const month = document.getElementById("month");
  // const year = document.getElementById("year");

  // toggleSwitch.addEventListener("change", () => {
  //   if (toggleSwitch.checked) {
  //     year.style.color = "#021a6c";
  //     // month.style.color = "#868585";
  //   } else {
  //     month.style.color = "#021a6c";
  //     // year.style.color = "#868585";
  //   }
  // });
  return (
    <div className="selectPlan">
      <div className="planCards">
        <div className="card">
          <div className="logo">
            <img src="./assets/icon-arcade.svg" alt="arcade" />
          </div>
          <div className="price">
            <p>
              <b>Arcade</b>
            </p>
            <p>$9/mo</p>
          </div>
        </div>
        <div className="card">
          <div className="logo">
            <img src="./assets/icon-advanced.svg" alt="advanced" />
          </div>
          <div className="price">
            <p>
              <b>Advanced</b>
            </p>
            <p>$12/mo</p>
          </div>
        </div>
        <div className="card">
          <div className="logo">
            <img src="./assets/icon-pro.svg" alt="pro" />
          </div>
          <div className="price">
            <p>
              <b>Pro</b>
            </p>
            <p>$15/mo</p>
          </div>
        </div>
      </div>
      <div className="plan">
        <p id="month">Monthly</p>
        <label className="switch">
          <input type="checkbox" id="toggleSwitch" />
          <span className="slider"></span>
        </label>
        <p id="year">Yearly</p>
      </div>
    </div>
  );
}
