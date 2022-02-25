window.addEventListener("load", ()=>{
    let botonJugar = document.getElementById("idBotonJugar");
    let botonInstrucciones = document.getElementById("idBotonInstrucciones");
    let botonCredito = document.getElementById("idBotonCreditos");
    let fondoDegradado = document.getElementById("id_capaOscura");
    let divCaractJuego = document.getElementById("id_caractJuego");
    let botonForm = document.getElementById("boton");
    let cerrarVentana = document.getElementById("cerrarVentana");
    let p1R1 = document.getElementById("1Jugadores");
    let p1R2 = document.getElementById("2Jugadores");
    let p1R3 = document.getElementById("3Jugadores");
    let p1R4 = document.getElementById("4Jugadores");
    let p2R1 = document.getElementById("tablero21");
    let p2R2 = document.getElementById("tablero42");
    let color1 = document.getElementById("colorj1");
    let color2 = document.getElementById("colorj2");
    let color3 = document.getElementById("colorj3");
    let color4 = document.getElementById("colorj4");
    let colores=[];

    

    //Eventos de los botónes del menú (Jugar, Instrucciones y )
    botonJugar.addEventListener("click", ()=>{
        console.log("Hola pagina a jugar");
        fondoDegradado.style.visibility="visible";
        divCaractJuego.style.visibility="visible";
    });

     botonInstrucciones.addEventListener("click", ()=>{
        console.log("Hola pagina a instrucciones");
        window.location.assign("./templates/instrucciones.html");
    });

    botonCredito.addEventListener("click", ()=>{
        console.log("Hola pagina a creditos");
        window.location.assign("./templates/creditos.html");
    });

    //Eventos del Modal con Cuestionario
    botonForm.addEventListener("click", ()=>{
        //Genera las coockies respecto a las respuestas y los colores
        if(p1R1.checked){
            console.log("1Jugador");
            document.cookie = "jugadores=1";
        }else if(p1R2.checked){
            console.log("2Jugadores");
            document.cookie = "jugadores=2";
        }else if(p1R3.checked){
            console.log("3Jugadores");
            document.cookie = "jugadores=3";
        }else if(p1R4.checked){
            console.log("4Jugadores");
            document.cookie = "jugadores=4";
        }
        if(p2R1.checked){
            console.log("Tablero 21");
            document.cookie = "tablero=21";
        }else if(p2R2.checked){
            console.log("Tablero 42");
            document.cookie = "tablero=42";
        }
        
        colores.push(color1.value);    
        colores.push(color2.value);
        colores.push(color3.value);
        colores.push(color4.value);
        console.log(colores);
        for (let i = 0; i < 4 ;i++) {
            document.cookie = "color"+(i+1)+"="+colores[i];
        }
           
        
            window.location.assign("./templates/juego.html");

    });
    cerrarVentana.addEventListener("click", ()=>{
        fondoDegradado.style.visibility="hidden";
        divCaractJuego.style.visibility="hidden";
    });

    


   
});

