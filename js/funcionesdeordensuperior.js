const numeros = [1,2,3,4,5];

function porCadaUno(array, fn) {
    for (let i = 0; i<array.length; i++) {
        fn(array[i])
    }
}
porCadaUno(numeros, console.log)

let total = 0;

function acumular(numero){

    total += numero;

}

porCadaUno(numeros, acumular);
console.log("Total acumulado:", total);

const duplicado= [];

porCadaUno(numeros, numero =>{
    duplicado.push(numero*2);
})

console.log("Array duplicado:", duplicado)
// VER VIDEO 6.2 METODO DE BUSQUEDA FIND Y FILTER