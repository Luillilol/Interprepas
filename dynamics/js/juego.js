window.onload = function() {
    const imgTablero = new Image(1000, 1000); //almacena la imagen del tablero
    //variables globales
    let pantalla = "tablero";
    let canvas = document.getElementById("juego");
    let ctx = canvas.getContext("2d");
    let rand;
    let jugadores; // Variable de 
    let tablero;   // las cookies
    let fichas = [];
    let colores=[];

        
    let aciertosJug1, fallidosJug1, kmRecorridosJug1; //Variables para el recuento de la tarjetas por jugador 
    let aciertosJug2, fallidosJug2, kmRecorridosJug2; //Variables para el recuento de la tarjetas por jugador
    let aciertosJug3, fallidosJug3, kmRecorridosJug3; //Variables para el recuento de la tarjetas por jugador
    let aciertosJug4, fallidosJug4, kmRecorridosJug4; //Variables para el recuento de la tarjetas por jugador

    let dadoButton = document.getElementById("botonDado");
    let bloqueBoton = document.getElementById("bloqueBoton");
    let tarjeta1 = document.getElementById("jug1");
    let tarjeta2 = document.getElementById("jug2");
    let tarjeta3 = document.getElementById("jug3");
    let tarjeta4 = document.getElementById("jug4");
    let materia=1, preguntas_pasadas = [1,2,3];
    let data, objConf; 
    
    class Ficha{

        x = 800;
        y = 650;
        l = 20;

        avanzar(){
            this.x-=10;
            //this.y++;
        }
        dibujar(){
            ctx.beginPath();
            ctx.fillStyle = "#00cc00";
            ctx.fill();
            ctx.rect(this.x,this.y,this.l,this.l);
            ctx.stroke();
            ctx.closePath();
        }
    }

    
    function peticion(){
        var datos = { id_materia: materia, preguntas: preguntas_pasadas}
        fetch("../dynamics/php/juego.php", {method: "POST", body: JSON.stringify(datos)}).then(function(response){
            return response.text();
        }).then(function (text){
            console.log(text);
        });
    }

    //No sirve, pero muestra la pregunta.
    function drawPregunta(){
        //ctx.clearRect(0,0,canvas.clientWidth,canvas.height);
       
        ctx.beginPath();
            ctx.fillStyle="#0000cc";
            console.log(ctx.fillStyle);
            ctx.fill();
            ctx.rect(0,0,canvas.clientWidth,canvas.height);
            ctx.stroke();
            ctx.fill();
            ctx.fillStyle="#ffffff";
            ctx.fill();
            ctx.rect(250,50,500,200);
            ctx.rect(250,300,500,100);
            ctx.rect(250,450,500,100);
            ctx.rect(250,600,500,100);
            ctx.rect(250,750,500,100);
            ctx.fill();
            ctx.stroke();
        ctx.closePath();
    }

    
    //separar las cookies
    function cookies(){
        console.log(document.cookie);
        let cookies = document.cookie;
        let cookiesArray = cookies.split("; ");
        cookiesArray.forEach(element => {
            console.log(element);
            let cookie = element.split("=");
            //console.log(cookie[1]);
            if(cookie[0] == "jugadores"){
                jugadores=cookie[1];
            }else if(cookie[0] == "tablero"){
                tablero=cookie[1];
            }else if(cookie[0] == "color1"){
                colores[0]=cookie[1];
            }else if(cookie[0] == "color2"){
                colores[1]=cookie[1];
            }else if(cookie[0] == "color3"){
                colores[2]=cookie[1];
            }else if(cookie[0] == "color4"){
                colores[3]=cookie[1];
            }
        });
    }

    function inicializarJuego(){
        for(let i=0; i<jugadores; i++){
            fichas.push(new Ficha());
        }
    }

    function dibujarTablero(){
        console.log('entre');
        if(tablero==42){
            console.log("TABLERO DE 42 CASILLAS");
            imgTablero.src = '../statics/img/Tableros42.png';
            imgTablero.addEventListener('load', ()=>{
                ctx.drawImage(imgTablero, 350, 0, 700, 700);
            });
            //divTablero.src=""
        }else{
            console.log("Tablero de 21 casillas");
            imgTablero.src = '../statics/img/Tableros21.png';
            imgTablero.addEventListener('load', ()=>{
                ctx.drawImage(imgTablero, 350, 0, 700, 700);
            })
        }
        //Condicionales para aparecer tarjetas de jugador según su número.
        if(jugadores==1){
            tarjeta1.style.display='block';
            tarjeta1.style.backgroundColor=colores[0];  
        }else if(jugadores==2){
            tarjeta1.style.display='block';
            tarjeta1.style.backgroundColor=colores[0];  
            tarjeta2.style.display='block';
            tarjeta2.style.backgroundColor=colores[1];  
        }else if(jugadores==3){
            tarjeta1.style.display='block';
            tarjeta1.style.backgroundColor=colores[0];  
            tarjeta2.style.display='block';
            tarjeta2.style.backgroundColor=colores[1];  
            tarjeta3.style.display='block';
            tarjeta3.style.backgroundColor=colores[2];   
        }else if(jugadores==4){
            tarjeta1.style.display='block';
            tarjeta1.style.backgroundColor=colores[0];  
            tarjeta2.style.display='block';
            tarjeta2.style.backgroundColor=colores[1];  
            tarjeta3.style.display='block';
            tarjeta3.style.backgroundColor=colores[2];  
            tarjeta4.style.display='block';
            tarjeta4.style.backgroundColor=colores[3];  
        }      
    }


    function tableroEvents(e){
        new Promise((resolve,reject) =>{
            dado();
            resolve();
        }).then(()=>{
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    //drawPregunta();
                    resolve();
                }, 5000);
            })
        })
        //rand = dado();

    }

    //funcion que dibuja el canvas dependiendo de la pantalla *
    function draw() {
        new Promise((resolve,reject) =>{
            //dibujarTablero();
            resolve();
        }).then(()=>{
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    fichas[0].dibujar();
                    resolve();
                }, 1000);
            })
        })
        
    }

    //eventos de botón para el canvas 
    dadoButton.addEventListener('click', e => {
        bloqueBoton.style.display='block';
        tableroEvents(e);
    });
    function infoTarjetas(){
        let txtTarj1 = document.getElementById("jug1");
        let txtTarj2 = document.getElementById("jug2");
        let txtTarj3 = document.getElementById("jug3");
        let txtTarj4 = document.getElementById("jug4");

        if(jugadores==1){
            txtTarj1.innerHTML='Jugador 1 <br>KM recorridos:'+kmRecorridosJug1+'<br>Aciertos:'+aciertosJug1+'<br>Fallidos:'+fallidosJug1;
        }else if(jugadores==2){
            txtTarj1.innerHTML='Jugador 1 <br>KM recorridos:'+kmRecorridosJug1+'<br>Aciertos:'+aciertosJug1+'<br>Fallidos:'+fallidosJug1;
            txtTarj2.innerHTML='Jugador 2 <br>KM recorridos:'+kmRecorridosJug1+'<br>Aciertos:'+aciertosJug1+'<br>Fallidos:'+fallidosJug1;    
        }else if(jugadores==3){
            txtTarj1.innerHTML='Jugador 1 <br>KM recorridos:'+kmRecorridosJug1+'<br>Aciertos:'+aciertosJug1+'<br>Fallidos:'+fallidosJug1;
            txtTarj2.innerHTML='Jugador 2 <br>KM recorridos:'+kmRecorridosJug1+'<br>Aciertos:'+aciertosJug1+'<br>Fallidos:'+fallidosJug1; 
            txtTarj3.innerHTML='Jugador 3 <br>KM recorridos:'+kmRecorridosJug1+'<br>Aciertos:'+aciertosJug1+'<br>Fallidos:'+fallidosJug1;
        }else if(jugadores==4){
            txtTarj1.innerHTML='Jugador 1 <br>KM recorridos:'+kmRecorridosJug1+'<br>Aciertos:'+aciertosJug1+'<br>Fallidos:'+fallidosJug1;
            txtTarj2.innerHTML='Jugador 2 <br>KM recorridos:'+kmRecorridosJug1+'<br>Aciertos:'+aciertosJug1+'<br>Fallidos:'+fallidosJug1; 
            txtTarj3.innerHTML='Jugador 3 <br>KM recorridos:'+kmRecorridosJug1+'<br>Aciertos:'+aciertosJug1+'<br>Fallidos:'+fallidosJug1;
            txtTarj4.innerHTML='Jugador 4 <br>KM recorridos:'+kmRecorridosJug1+'<br>Aciertos:'+aciertosJug1+'<br>Fallidos:'+fallidosJug1;
        }
       


       
    }

    function init(){
        new Promise((resolve,reject) =>{
            cookies();
            resolve();
        }).then(()=>{
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    inicializarJuego();
                    resolve();
                }, 1000);
            })
        })
    }
    
    

    new Promise((resolve,reject) =>{
        init();
        resolve();
    }).then(()=>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                console.log(colores);
                draw();
                resolve();                
            }, 1500);
        })
    })

    //dibujarTablero();
    //infoTarjetas();//Este método es solamente útil en lo que se cree eventos de puntajes u otrs cosas
    peticion();
}