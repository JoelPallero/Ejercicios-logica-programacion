import { useState } from 'react'
import './App.css'

function App() {
  let [results, setResults] = useState([])

  function fizzBuzz() {
    const resultArray = [];
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        resultArray.push("FizzBuzz");
      } else if (i % 5 === 0) {
        resultArray.push("Buzz");
      } else if (i % 3 === 0) {
        resultArray.push("Fizz");
      } else {
        resultArray.push(i.toString());
      }
    }
    setResults(resultArray);
  }

  function handleClick(){
    fizzBuzz();
  }

  return (
    <>
      <h1>FizzBuzz</h1>
      <div className="card">
        <button onClick={handleClick}>Start FizzBuzz</button>
        <p>
          {results.map((result, index) => (
            <span key={index}>{result}<br /></span>
          ))}
        </p>
      </div>
    </>
  )
}

export default App
