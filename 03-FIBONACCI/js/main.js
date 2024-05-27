import './style.css'

const app = document.querySelector('#app');

function fibonacci(n){
  let index = 0;
  let next = 1;
  let result = 0;

  for(let i = 0; i < n; i++){
    if(i === 0){
      app.innerHTML = index + '<br>';
      console.log(index);
    } else if(i === 1){
      app.innerHTML += next + '<br>';
      console.log(next);
    }else{  
      result = index + next;
      console.log(result);
      app.innerHTML += result + '<br>';
      index = next;
      next = result;
    }
  }
}

fibonacci(50);