import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [fibonacci, setFibonacci] = useState([])

  function getFibonacci(n){
    let arrayExtra = [0, 1];
    //podemos iniciar el array vacio, en todo caso, "n" como parametro en el for, no seria necesario restarle los 2+1 elementos que el array ya tiene:
    for (let i = 0; i <= n - 3; i++) {
      arrayExtra.push(arrayExtra[arrayExtra.length - 1] + arrayExtra[arrayExtra.length - 2]);
    }
    setFibonacci(arrayExtra);
  }

  //Para que la funcion se ejecute 1 sola vez y no en cada renderizacion.
  useEffect(() => {
    getFibonacci(50);
  }, [])


  return (
    <>
      <div>
        {fibonacci.map((result, index) => (
          <span key={index}>{result}, </span>
        ))}
      </div>
    </>
  )
}

export default App


