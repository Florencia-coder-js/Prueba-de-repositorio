let color = "rojo"; //GLOBAL

function cambiarColor(){
    color = "azul";
    let local = "esto es una var local";
}
cambiarColor();
console.log(color)

// console.log(local) 
// ERROR NO LA ENCUENTRA PORQUE ES LOCAL SOLO PUEDE LLAMARSE DENTRO DE LA FUNCION

//FUNCIONES



//Funcion tradicional 
function sumar(a,b){
    return a + b;
}

console.log(sumar(10,5));

//Funcion flecha

const sumarFlecha = a => a + 10;
// const sumarFlecha = (a,b) => a + b

console.log(sumarFlecha(15))