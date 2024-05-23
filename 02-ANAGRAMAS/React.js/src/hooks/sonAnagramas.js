const sonAnagramas = (mainString, secString, setError, setSuccess, setResult) => {
    
    //Verificar si tienen la misma longitud
    if(mainString.length !== secString.length){
      setError("Las palabras de diferente longitud, no pueden ser anagramas");
      return setResult(false);
    }    
    else {
        //transformar a minusculas
      let mainStringLower = mainString.toLowerCase();
      let secStringLower = secString.toLowerCase();

      //verificar si son palabras identicas
      if(mainStringLower === secStringLower){
        setError("Las palabras idénticas no son anagramas");
        return setResult(false);
      }
      else{
        let array = mainStringLower.split('');
        array.sort();
        mainStringLower = array.join('');
        array = secStringLower.split('');
        array.sort();
        secStringLower = array.join('');
        if(mainStringLower === secStringLower){
          setSuccess("Las palabras son anagramas");
          return setResult(true);
        }else{
          setError('Las palabras no son anagramas');
          return setResult(false);
        }
      }
    }
  }

  export default sonAnagramas;