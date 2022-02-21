window.onload = function() {
    //variables globales
    let pantalla = "tablero";
    let canvas = document.getElementById("juego");
    let ctx = canvas.getContext("2d");
    let colorFondo = "#000000";
    let colorBotones = "#FEFA00";
    let menuFont = new FontFace('menuFont', 'url(../../statics/fonts/Galindo/Galindo-Regular.tff)')
    let botonesY = canvas.height/5;
    let jugadores;
    let tablero;
    
    //separar las cookies
    function cookies(){
        let cookies = document.cookie;
        let cookiesArray = cookies.split("; ");
        cookiesArray.forEach(element => {
            let cookie = element.split("=");
            //console.log(cookie[1]);
            if(cookie[0] == "jugadores"){
                jugadores=cookie[1];
            }else{
                tablero=cookie[1];
            }
        });

    }

    function tableroEvents(e){
        dado();
    }
    

    //eventos de los botones del menu
    function menuEvents(e){
        //checa el boton que se presiono
        if(e.offsetY >= botonesY && e.offsetY <= botonesY + 50){
            pantalla = "juego";
        }
        if(e.offsetY >= botonesY*2 && e.offsetY <= botonesY*2 + 50){
            pantalla = "Instrucciones"
        }
        if(e.offsetY >= botonesY*3 && e.offsetY <= botonesY*3 + 50){
            pantalla = "conf";
        }
    }

    //dibuja el fondo del menu *
    function fondoMenu(){
        colorFondo = "#33CCFF";
        ctx.rect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = colorFondo;
        ctx.fill();
    }

    //dibuja los botones, recibe de parametros :
    //text = string que se va a mostrar en el boton
    //y = posicion de y en coordenadas cartesianas del la esquina superios izquierda del boton
    //textX = separacion en x del texto del boton y la esquina izquierda
    function boton(text, y, textX) {
        ctx.font = "manuFont 30px";
        ctx.beginPath();
            ctx.rect(canvas.height/4, y, 400, 50);
            ctx.fillStyle = colorBotones;
            ctx.fill();
            ctx.textAlign = "Center"
            ctx.strokeText(text, (canvas.height/4)+textX, y + 25);
        ctx.closePath();
    }

    //funcion que que llama a las funciones de dibujo del menu
    function mainMenu() {
        fondoMenu();
        boton("Jugar", botonesY, 150);
        boton("¿Cómo Jugar?", botonesY*2, 100);
        boton("Configuración", botonesY*3, 100)
    }

    //funcion que dibuja el canvas dependiendo de la pantalla *
    function draw() {
        if (pantalla == "mainMenu") {
            mainMenu();
        } else if (pantalla == "tablero") {
            tablero();
        } else if (pantalla == "gameOver") {
            gameOver();
        }
    }

    //eventos de mouse para el canvas 
    canvas.addEventListener('mouseup', e => {
        if(pantalla == 'mainMenu')
        {
            menuEvents(e);
        }
        else if(pantalla == 'tablero'){
            tableroEvents(e);
        }
    });

    cookies();
    //timer del juego puesto a 60 fps
    
    setInterval(draw, 16);
}