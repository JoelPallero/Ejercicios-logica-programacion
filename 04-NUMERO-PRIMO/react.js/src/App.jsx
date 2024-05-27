import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [primeNumbers, setPrimeNumbers] = useState([]);

  function chekumber(n){
    if (n === 0) return false;
    if (n === 1) return false;
    if (n === 2) return true;

    for(let i = 2; i < Math.sqrt(n); i++){
      if (n % i === 0) return false;
    }
    return true;
  }

  function chkPrime(){
    let arrayExtra = [];
    for(let i = 1; i <= 100; i++){
      if (chekumber(i)){
        arrayExtra.push(i);
      }
    }
    setPrimeNumbers(arrayExtra);
  }

  useEffect(()=>{
    chkPrime();
  },[])

  return (
    <>
      <p>
        {primeNumbers.map((prime, index)=>{
          return <span key={index}>{prime}<br/></span>
        })}
      </p>
    </>
  )
}

export default App