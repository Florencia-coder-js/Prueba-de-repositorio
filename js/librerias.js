document.getElementById("boton").addEventListener("click", ()=>{
    Swal.fire({
        title:"Alerta basica!",
        text: "Esta accion no es irreversible",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, eliminar",
        cancelButtonText: "Cancelar"
    });

})

// libreria: https://sweetalert2.github.io/#examples