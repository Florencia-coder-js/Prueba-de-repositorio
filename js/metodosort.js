const numeros = [40,1,50,200,35];

//orden creciente
numeros.sort((a,b) => a -b)

//orden decreciente
// numeros.sort((a,b) => b-a)
console.log(numeros)

const palabras = ["Banana", "auto", "programacion", "uva"];
//ordena por orden alfabetico
palabras.sort((a,b) =>a.localeCompare(b))
console.log(palabras);

const items = [
    {
        nombre:"cafe",
        precio:2500
    },
    {
        nombre:"arroz",
        precio:1500
    },
    {
        nombre:"manzana kilo",
        precio:1800
    }
]

items.sort((a,b)=> a.precio - b.precio)
console.log(items)