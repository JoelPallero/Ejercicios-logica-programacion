import './style.css'

const app = document.getElementById('app');
let arrayPrimos = [];

function checkPrime(num){
  if (num <= 1) return false; // 0 y 1 no son primos
  if (num === 2) return true; // 2 es el único número par primo
  if (num % 2 === 0) return false; // los demás pares no son primos

  // Verificar divisores impares hasta la raíz cuadrada de num
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
  }
  return true;
}

function getPrimos(){
  for (let i = 1; i <= 100; i++) {
    if (checkPrime(i)) {
      app.innerHTML += `<span>${i}<br></span>`;
    }
  }
}

getPrimos();