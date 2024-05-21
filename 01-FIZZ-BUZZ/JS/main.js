//Fizz BUZZ
function fizzBuzz(fizzBuzzElement) {
  for(let i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
      fizzBuzzElement.innerHTML += "FizzBuzz" + '<br>';
    }else{
      if(i % 3 === 0){
        fizzBuzzElement.innerHTML += 'Fizz' + '<br>';
      }else{
        if(i % 5 === 0){
          fizzBuzzElement.innerHTML += 'Buzz' + '<br>';
        }else{
          fizzBuzzElement.innerHTML += i + '<br>';
        }
      }
    }
  }
}


document.querySelector('#app').innerHTML = `
  <div>
    <h1>FIZZ BUZZ</h1>
    <div class="card">
      <p id="fizz-buzz">

      </p>
      <button id="start" type="button">Start</button>
    </div>
  </div>
`;

const start = document.getElementById('start');

start.addEventListener('click', () => {
  const fizzBuzzElement = document.getElementById('fizz-buzz');
  fizzBuzz(fizzBuzzElement);
});