const contadorClicks = document.querySelector('.contador');
const addClicks = document.querySelector('.add-clicks');
const reboot = document.querySelector('.reboot');

let contador = 0;

addClicks.addEventListener('click', () =>{
    contador++;
    contadorClicks.value = contador;
});

reboot.addEventListener('click', ()=> {
    contador = 0;
    contadorClicks.value = contador;
})