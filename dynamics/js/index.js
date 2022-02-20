window.addEventListener("load", ()=>{
    let botonJugar = document.getElementById("idBotonJugar");
    let botonInstrucciones = document.getElementById("idBotonInstrucciones");
    let botonCredito = document.getElementById("idBotonCreditos");
    let fondoDegradado = document.getElementById("id_capaOscura");
    let divCaractJuego = document.getElementById("id_caractJuego");
    let botonForm = document.getElementById("boton");
    let cerrarVentana = document.getElementById("cerrarVentana");

    //Eventos de los botónes del menú (Jugar, Instrucciones y )
    botonJugar.addEventListener("click", ()=>{
        console.log("Hola pagina a jugar");
        fondoDegradado.style.visibility="visible";
        divCaractJuego.style.visibility="visible";
    });

    botonForm.addEventListener("click", ()=>{
        window.location.assign("./templates/juego.html");
    });
    cerrarVentana.addEventListener("click", ()=>{
        fondoDegradado.style.visibility="hidden";
        divCaractJuego.style.visibility="hidden";
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

