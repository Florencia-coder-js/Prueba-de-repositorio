// Declarar modelos de iPhone y precios
const iphones = [
    { modelo: "iPhone 13", precio: 800 },
    { modelo: "iPhone 14", precio: 900 },
    { modelo: "iPhone 15", precio: 1000 }
];


// Función para mostrar modelos disponibles
function mostrarModelos() {
    let lista = "Modelos disponibles:\n";
    iphones.forEach((iphone, index) => {
        lista += `${index + 1}. ${iphone.modelo} - $${iphone.precio}\n`;
    });
    return lista;
}

// Función para obtener la selección del usuario
function seleccionarModelo() {
    let eleccion = parseInt(prompt(mostrarModelos() + "\nIngrese el número del modelo deseado:"));
    
    if (isNaN(eleccion) || eleccion < 1 || eleccion > iphones.length) {
        alert("Selección inválida. Intente de nuevo.");
        return null;
    }

    let cantidad = parseInt(prompt("Ingrese la cantidad de unidades:"));

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Cantidad inválida. Intente de nuevo.");
        return null;
    }

    return { modelo: iphones[eleccion - 1], cantidad };
}

// Función para calcular el precio total
function calcularTotal(seleccion) {
    return seleccion.modelo.precio * seleccion.cantidad;
}

// Función para mostrar el resultado
function mostrarResultado(seleccion, total) {
    console.log(`Has seleccionado ${seleccion.cantidad} x ${seleccion.modelo.modelo}`);
    console.log(`Precio unitario: $${seleccion.modelo.precio}`);
    console.log(`Total a pagar: $${total}`);

    alert(`Has seleccionado ${seleccion.cantidad} x ${seleccion.modelo.modelo}.\nTotal a pagar: $${total}`);
}

// Ejecutar simulador
let seleccion = seleccionarModelo();
if (seleccion) {
    let total = calcularTotal(seleccion);
    mostrarResultado(seleccion, total);
}