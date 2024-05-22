

const string1 = document.getElementById('input1');
const string2 = document.getElementById('input2');

const buttonAnagrama = document.getElementById('buttonAnagrama');
const result = document.getElementById('results');

function verifyAnagram(str1, str2) {

  //verificar si tienen la mimsma cantidad de letras
  if (str1.length !== str2.length) {
    return false;
  }
  else{
    //verificar si son iguales antes de reordenarlas
    if(str1 === str2){
      return false
    }
    else{
      
      //transformar letras a minúsculas
      let array = transformToLoweCase(str1).split('');
      let array2 = transformToLoweCase(str2).split('');   
      
      
      //ordenarlas ascendente
      array.sort();
      array2.sort();
    
      let booleanVar = true;

    //verificar si son las mismas en ambas palabras.
      for(let i = 0; i < array.length; i++){
        if(!array2.includes(array[i])){
          booleanVar = false;
          break;
        }
      }
    
      return booleanVar;
    }
  }
  
}

buttonAnagrama.addEventListener('click', () => {  
  verifyAnagram(string1.value, string2.value) ?  result.innerHTML = 'Son Anagramas' : result.innerHTML = 'No son Anagramas';
})


function transformToLoweCase(str){
  return str.toLowerCase();
}