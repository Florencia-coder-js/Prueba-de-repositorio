//variable: es un espacio de memoria reservado para almacenar info importante 
// del programa.

//Declaracion:
// let nombre;

let titulo = document.getElementById("titulo2");
titulo.textContent = "Cambio mi titulo!";

let numero = parseInt(prompt("Ingrese un numero"));
let sumarNumero = parseInt(prompt("Ingrese numero a sumar:"));

for(let i = 0; i < 9; i++){
   
    numero += sumarNumero;

    console.log(`El resultado de la suma es: ${numero}`)

}

//Asignacion de valores:
//Inicializar variables: