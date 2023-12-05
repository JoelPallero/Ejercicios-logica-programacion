const botonCambio = document.querySelector('.cambio');
botonCambio.type = 'button';
const contenedor = document.querySelector('.contenedor');


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
	contenedor.style.backgroundColor = `#${colorFinal}`;
}
