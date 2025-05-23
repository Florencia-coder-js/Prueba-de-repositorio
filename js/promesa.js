const usuarios = [
    {
        id: 1,
        nombre: "Maria",
        
    },
    {
        id: 2,
        nombre: "Maria2",
        
    },
    {
        id: 3,
        nombre: "Pedro",
        
    },
]

function getDatos(){
    return usuarios
}

console.log("Datos:", getDatos())

function getDatosConDemora(){
    setTimeout(() => {
        return usuarios;
    }, 2000)
}

console.log("Datos con demora(sin promesas):", getDatosConDemora)

function getDatosPromesas(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(usuarios)
        },2000)
    })
}

getDatosPromesas()
    .then(datos =>{
        console.log("Datos obtenidos con promesas:", datos)
    })
    .catch(error =>{
        console.error("Error capturado:", error);
    })