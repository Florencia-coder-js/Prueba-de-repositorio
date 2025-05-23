const url = 'https://jsonplaceholder.typicode.com/posts';
//peticion api correcta
// fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//     })
//     errores
//     .catch(error => {
//         console.error("Ocurrio un error", error)
//     })

async function fetchData(){
    const response = await fetch(url);
    const data = await response.json()
    console.log(data)
    //nos sirve para generar un freno antes de que se ejecute un fetch, espera la resolusion de la promesa
}

fetchData()
