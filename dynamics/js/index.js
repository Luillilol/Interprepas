window.addEventListener("load", ()=>{
    let botonJugar = document.getElementById("idBotonJugar");
    let botonInstrucciones = document.getElementById("idBotonInstrucciones");
    let botonCredito = document.getElementById("idBotonCreditos");

    console.log("hola");
    botonJugar.addEventListener("click", ()=>{
        console.log("Hola pagina a jugar");
        window.location.assign("./templates/juego.html");
    });

    botonInstrucciones.addEventListener("click", ()=>{
        console.log("Hola pagina a instrucciones");
        window.location.assign("./templates/instrucciones.html");
    });

    botonCredito.addEventListener("click", ()=>{
        console.log("Hola pagina a creditos");
        window.location.assign("./templates/creditos.html");
    });
});

