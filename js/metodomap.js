const cursos = [
    {
        nombre: "JS",
        duracion: 6,
        precio: 15000,
    },
    {
        nombre: "VUE",
        duracion: 3,
        precio: 20000,
    },
    {
        nombre: "REACT",
        duracion: 5,
        precio: 17000,
    },
]

const nombresCursos = cursos.map(curso => curso.nombre);
console.log(nombresCursos);

const cursoConDescuento = cursos.map(curso => {
    return{
        ...curso,
        precio:curso.precio *0.9
    }
})
console.log(cursoConDescuento)

const duracionHoras = cursos.map(curso => curso.duracion*10);
console.log(duracionHoras);