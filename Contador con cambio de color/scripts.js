const contador = document.querySelector('#contador');
const incremento = document.querySelector('#inc');
const decremento = document.querySelector('#dec');
const resetear = document.querySelector('#res');

let arrayHexaDecimal = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
let colorFinal = '';
let numero;


function generarLetra(){
	numero = (Math.random()*15).toFixed(0);
	return arrayHexaDecimal[numero];
}

function colorHEX(){
    colorFinal = '';
	for(let i = 0; i < 6; i++){
		colorFinal = colorFinal + generarLetra();
	}
	contador.style.color = `#${colorFinal}`;
}

incremento.addEventListener('click', ()=>{
    if(parseInt(contador.innerHTML) < 255){
        let numIncrementado = parseInt(contador.innerHTML)+1;
        contador.innerHTML = `${numIncrementado}`;
        colorHEX();
    }else{
        alert("El valor máximo es de 255");
    }
});
decremento.addEventListener('click', ()=>{
    if(parseInt(contador.innerHTML) > 0){
        let numDecrementado = parseInt(contador.innerHTML)-1;
        contador.innerHTML = `${numDecrementado}`;
        colorHEX();
    }else{
        alert("No se puede bajar más el número");
    }
});
resetear.addEventListener('click', () => {
    contador.innerHTML= "0";
    contador.style.color = '#000000';
});