//JAVASCRIPT lee en cascada, de arriba hacia abajo.

// son todos string, son todos jugadores actuales. Todos los datos
//tienen que estar relacionados entre si.


// const seleccion = ["messi", "dibu", "cuti romero", "lautaro", "julian alvarez"]

//el indice es la posicion de cada elemento. Arranca en 0.
// console.log(seleccion[4])

//es para saber cuantos elementos tiene mi array.
// console.log(seleccion.length)

// .push() --> aniade un elemento al final del array
//siempre para usar un metodo se pone el nombre del array luego "." y nombre del metodo.

// seleccion.push("dybala")

// .unshift() --> aniade un elemento al inicio del array
//no es lo optimo pero se pueden agregar elementos al inicio.
//porque rompemos el orden del array.
// seleccion.unshift("enzo")

// .pop() --> Quita el ultimo elemento del array
// seleccion.pop()

// .shift() --> Quita el primer elemento del array
// seleccion.shift()

// .includes() --> Busca un elemento en el array y devuelve T o F segun
//si lo encuentra o no.
//Ejemplo: para ver si ya existe en el carrito.

// console.log(seleccion.includes("messi"))

//indexOf() --> Busca un elemnto en el array y devuelve su indice, sino -1.
// console.log(seleccion.indexOf("cuti romero"))

// .sort() --> Ordena alfabeticamente el array (A - Z)
// seleccion.sort()
// console.log(seleccion)

// .reverse() --> Invierte el orden del array.
// seleccion.reverse()

//ordena alfabeticamente y luego lo da vuelta (Z - A)
// seleccion.sort().reverse()

// .join() --> Aniade un string entre los elementos
// console.log(seleccion.join("-")) 

// .splice() --> Borra o suplanta elementos especificos (usarlo con cuidado)
//a partir de donde empieza a borrar(primer parametro)
//cuantos elementos vamos a borrar(segundo parametro)
//aniade el elemento en esa posicion (tercer parametro)
// seleccion.splice(2, 1, "tagliafico")
// console.log(seleccion)

//CORCHETES(ARRAY) / LLAVE(OBJETOS)
// Un objeto es una cosa, algo tangible.

//Ejemplo: Guitarra: electrica, sg, leonard, negra, detalles blancos, trastera con puntos, sin funda, 6 cuedras.
//atributo: propiedad(valor).
//conjunto de propiedades que hace una cosa. (OBJETO)
// const guitarra = {
//     tipo: "electrica",
//     modelo: "sg",
//     marca: "leonard",
//     color: "negro",
//     detalles: "blanco",
//     trastera: "puntos",
//     funda: false,
//     cuerdas: 6
// }
// console.log(guitarra)

const jugador1 = {
    jugador: "messi",
    posicion: "delantero",
    dorsal: 10
}
const jugador2 = {
    jugador: "dibu martinez",
    posicion: "arquero",
    dorsal: 23
}
const jugador3 = {
    jugador: "cuti romero",
    posicion: "defensor",
    dorsal: 12
}
const jugador4 = {
    jugador: "lautaro martinez",
    posicion: "delantero",
    dorsal: 22
}
const jugador5= {
    jugador: "julian alvarez",
    posicion: "delantero",
    dorsal: 9

}
//coleccion de objetos, cada objeto esta mas detallado. Nos va a servir para simular una base de datos.
const convocados = [jugador1, jugador2, jugador3, jugador4, jugador5]
console.log(convocados)

// for combinando con leght (NO HACER)
//usar for-of(siempre que es un array ponerlo en plural, asi recorre con el singular)
//recorre el array completo, por cada vuelta la accion que esta adentro.
for(const convocado of convocados){
    console.log("Nombre: "+convocado.jugador+ "Posicion: " +convocado.posicion) //ve la propiedad del nombre unicamente cuando recorre

}

//ENTREGA 
// -Variables, const

// -Arrays

// -minimo 3 funciones CON parametron

// -minimo 1 condicional

// -minimo 1 bucle

// -TODO con console, alert, prompt

// -JS en head con defer

// -SI O SI VIA GITHUB