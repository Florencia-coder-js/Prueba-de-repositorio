const numeros = [1, 2, 3, 4, 5];

const suma = numeros.reduce(function(acumulador, valorActual) {
    return acumulador + valorActual;
}, 0);

console.log(suma); // 15

// const numeros = [10, 5, 20, 15];

// const maximo = numeros.reduce(function(acumulador, valorActual) {
//     return Math.max(acumulador, valorActual);
// });

// console.log(maximo); // 20

const frutas = ['manzana', 'banana', 'naranja', 'manzana', 'naranja', 'banana', 'banana'];

const conteoFrutas = frutas.reduce(function(conteo, fruta) {
    conteo[fruta] = (conteo[fruta] || 0) + 1;
    return conteo;
}, {});

console.log(conteoFrutas);