import './index.css';
import { useState } from 'react';

export default function App() {
  return (
    <MainCounter />
  );
}

function MainCounter() {
 
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)
  const currDate = new Date()
  currDate.setDate(currDate.getDate() + count)

  return (
    <>
      <div className = "counter">

         <span className='buttonText'>
          <button onClick = {() => setStep((step) => step - 1)}>-</button> 
          <p>Step = {step}</p> 
          <button onClick = {() => setStep((step) => step + 1)}>+</button>
        </span>
        
        <span className='buttonText'>
          <button onClick = {() => setCount((count) => count - step)}>-</button> 
          <p>Count = {count}</p> 
          <button onClick = {() => setCount((count) => count + step)}>+</button>
        </span>

        <button className = "reset" onClick = {() => {
          setStep(1);
          setCount(0)
        }}>Reset</button>

        <p> 
          {count === 0 ? "Today is " 
          : count > 0 ? `${count} days from today is ` 
          : `${Math.abs(count)} days before today is`}
          {currDate.toDateString()}
        </p>

      </div>
    </>
    
  )
}


