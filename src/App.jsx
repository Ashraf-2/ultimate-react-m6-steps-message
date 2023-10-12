import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsopen] = useState(true);

  


  const handleSteps = (media) => {
    if (media === "prev") {
      if (step == 1) {
        alert("Sorry Boss,you're not allow to drive slowler than 1miles/hr!! <:")

        return;
      }
      setStep(step - 1);

    }
    else if (media === "next") {
      if (step == 3) {
        alert("Sorry Boss,you're not allow to drive more than 3miles/hr!! <:")
        return;
      }
      setStep(step + 1);

    }
  }
  return (
    <div className="main-body">
      <div  className="btn">
        <button onClick={() => setIsopen(!isOpen)} className="opn">{isOpen? "Close": "Open"}</button>
      </div>

      {
        isOpen && (
        <div className='steps'>
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step} : {messages[step - 1]}
          </p>


          <div className="buttons">
            <button onClick={() => handleSteps("prev")} style={{ backgroundColor: "#7950f2", color: "white" }}>Previous</button>
            <button onClick={() => handleSteps("next")} style={{ backgroundColor: "#7950f2", color: "white" }}>Next</button>
          </div>

        </div>)
      }

    </div>
  )
}

export default App
