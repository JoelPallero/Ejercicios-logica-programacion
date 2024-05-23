import { useState } from 'react'
import useAnagramState from './hooks/useAnagramasState';
import sonAnagramas from './hooks/sonAnagramas.js'

import './App.css'

function App() {
  const { mainString, setMainString, secString, setSecString, error, setError, success, setSuccess, result, setResult } = useAnagramState();
  
  const handleSubmit = e => {
    e.preventDefault();
    sonAnagramas(mainString, secString, setError, setSuccess, setResult);
  }
    

  return (
    <>

      <form id="form" onSubmit={handleSubmit}>

          {
            result ? <span className="success-span"> <strong>Respuesta</strong>: {success}</span> 
            : error ? <span className="error-span"> <strong>Respuesta</strong>: {error}</span> : null
          }


          <label for="mainString">
              Ingresar una palabra
              <input 
                type="text" 
                name="mainString"
                value={mainString}
                onChange={ e => {setMainString(e.target.value)}}
              />
          </label>          

          <label for="secondString">
              Ingresar otra palabra
              <input 
                type="text" 
                name="secondString"
                value={secString}
                onChange={e => setSecString(e.target.value)}
              />
          </label>

          <button type="submit" name="buttonAnagrama" id="buttonAnagrama">Verificar si son anagramas</button>
      </form>

    </>
  )
}

export default App