document.getElementById("boton").addEventListener("click", ()=>{
    Toastify({
        text: "Notificacion personalizada",
        duration: 5000,
        gravity: "bottom",
        position: "center",
        backgroundColor:"red",
        destination: "https://apvarun.github.io/toastify-js/#"
    }).showToast();
})