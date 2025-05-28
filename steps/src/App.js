import { useState } from 'react';

const messages = [
  "Learn react #",
  "Apply for Jobs",
  "Invest your new income"
];


export default function App() {
  // useState can only be called in top level of function
  const [step, setStep] = useState(1)
  const [isOpen, setIsOpen] = useState(true)

  function handlePrevious() {
    if(step > 1) setStep(step - 1)
  }

  function handleNext() {
    if (step < 3) setStep(step + 1)
  }


  return (
    <>
      <button className = "close" onClick = {() => setIsOpen(!isOpen)}>&times;</button>

      { isOpen && (
        <div className = "steps">
        <NumberCircles step = {step}/>
        <p className = "message"> Step {step}: {messages[step - 1]}  </p>
        <Button onPrevious = {handlePrevious} onNext = {handleNext} />
      </div>
      )}
    </>
    
  );
}

function NumberCircles(props) {

  return (
    <div className= "numbers">
      <div className={`${props.step >= 1 ? "active" : " "}`}>1</div>
      <div className={`${props.step >= 2 ? "active" : " "}`}>2</div>
      <div className={`${props.step >= 3 ? "active" : " "}`}>3</div>  
    </div>
  )
}

function Button({onNext, onPrevious}) {
  
  return (
    <div className = "buttons">
      <button style = {{backgroundColor: "#7950f2", color: "#fff"}} onClick={onPrevious}>Previous</button>
      <button style = {{backgroundColor: "#7950f2", color: "#fff"}} onClick={onNext}>Next</button>
    </div>
  )
}


