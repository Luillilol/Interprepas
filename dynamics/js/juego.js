window.onload = function() {
    const imgTablero = new Image(1000, 1000); //almacena la imagen del tablero
    //variables globales
    let canvas = document.getElementById("juego");
    let ctx = canvas.getContext("2d");
    let rand=0;
    let jugadores; // Variable de 
    let tablero;   // las cookies
    let fichas = [];
    let colores=[];
    
        
    let aciertosJug1=0, fallidosJug1=0, kmRecorridosJug1=0; //Variables para el recuento de la tarjetas por jugador 
    let aciertosJug2=0, fallidosJug2=0, kmRecorridosJug2=0; //Variables para el recuento de la tarjetas por jugador
    let aciertosJug3=0, fallidosJug3=0, kmRecorridosJug3=0; //Variables para el recuento de la tarjetas por jugador
    let aciertosJug4=0, fallidosJug4=0, kmRecorridosJug4=0; //Variables para el recuento de la tarjetas por jugador

    let dadoButton = document.getElementById("botonDado");
    let bloqueBoton = document.getElementById("bloqueBoton");
    let tarjeta1 = document.getElementById("jug1");
    let tarjeta2 = document.getElementById("jug2");
    let tarjeta3 = document.getElementById("jug3");
    let tarjeta4 = document.getElementById("jug4");
    let inicioJuego = document.getElementById("comienzo");
    //      Elementos de la tarjeta de pregunta
    let fondoPreguntaTarjeta = document.getElementById("fondoTarjetas");
    let tarjetaPreguntaTarjeta = document.getElementById("tarjetaPregunta");
    let numKilometroTarjeta=document.getElementById("numKilometros");
    let materiaTarjeta = document.getElementById("divMateria");
    let preguntaTarjeta = document.getElementById("divPregunta");
    let respuesta1Tarjeta = document.getElementById("idRespuesta1");
    let respuesta2Tarjeta = document.getElementById("idRespuesta2");
    let respuesta3Tarjeta = document.getElementById("idRespuesta3");
    let respuesta4Tarjeta = document.getElementById("idRespuesta4");
    let infoAcierto = document.getElementById("divAcierto");
    let infoFallo = document.getElementById("divFallo");
    //              FIN DE ELEMENTOS DE LA TARJETA DE PREGUNTA 
    let numJugadores=0; 
    let orden = [];
    let valorPrimerTiro=[];
    let varcontrol = 0;
    let materia=5 , preguntas_pasadas = [];
    let stringPetición;
    let fetchPregunta, fetchRes1, fetchRes2, fetchRes3, fetchRes4, fetchKilometro, fetchResCorrect, fetchRespuestas;
    let prueba, prueba2;


    //declaracion de la clase ficha 
    class Ficha{
        lado = 15;
        //pide la posicion y el color de la ficha
        constructor(x,y,color){
            this.x = x;
            this.y = y;
            this.color = color;
            this.casilla = 0;
        }

        //dibuja la ficha en el tablero
        dibujar(){
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.fillRect(this.x,this.y,this.lado,this.lado);
            ctx.stroke();
            ctx.closePath();
           
        }

        //permite a la ficha avanzar en el tablero
        avanzar(){
            this.casilla++;
            if(tablero==21){
                if(this.casilla == 1){
                    this.x += 150;
                }
                else if(this.casilla<5){
                    this.x += 110;
                }
                else if(this.casilla<7){
                    this.y -= 70;
                }
                else if(this.casilla<11){
                    this.x -= 110;
                }
                else if(this.casilla<13){
                    this.y -= 70;
                }
                else if(this.casilla<17){
                    this.x += 110;
                }
                else if(this.casilla<19){
                    this.y -= 70;
                }
                else if(this.casilla<23){
                    this.x -= 110;
                }
            }else{
                if(this.casilla == 7){
                    this.x -= 17;
                }
                if(this.casilla == 13){
                    this.y -= 25;
                }
                if(this.casilla == 19){
                    this.x += 35;
                }
                if(this.casilla == 24){
                    this.y += 26;
                }
                if(this.casilla == 29){
                    this.x -= 25;
                }
                if(this.casilla == 33){
                    this.y -= 29;
                }
                if(this.casilla == 37){
                    this.x += 13;
                    this.y -= 5;
                }
                if(this.casilla == 40){
                    this.y += 21;
                }
                if(this.casilla < 7){
                    this.x -= 100;
                }
                else if(this.casilla < 13){
                    this.y -= 80;
                }
                else if(this.casilla < 19){
                    this.x += 95;
                }
                else if(this.casilla < 24){
                    this.y += 80;
                }else if(this.casilla < 29){
                    this.x -= 95;
                }else if(this.casilla<33){
                    this.y -= 80;
                }else if(this.casilla<37){
                    this.x += 100;
                }else if(this.casilla<40){
                    this.y += 80;
                }else if(this.casilla<43){
                    this.x -= 100;
                }else if(this.casilla==43){
                    this.y -= 100;
                }


            }

            new Promise((resolve,reject) =>{
                dibujarTablero();
                resolve();
            }).then(()=>{
                return new Promise((resolve)=>{
                    setTimeout(()=>{
                        this.dibujar();
                        resolve();                
                    }, 50);
                })
            })
        }
    }
    

    //Determina el orden de juego de los jugadores
    function arregloOrdenPlay(){
        //Cada condicional determinaa las combinaciones posibles para determinar el orden
        //en el que irán los jugadores
    

        if(numJugadores==1)
        {
            
            orden.push(1);
            
        }
        else if(numJugadores==2)
        {
            
            if(valorPrimerTiro[0]>=valorPrimerTiro[1])
            {
                orden.push(1);
                orden.push(2);
            }
            else if(valorPrimerTiro[1]>=valorPrimerTiro[0]){
                orden.push(2);
                orden.push(1);
            }

        }else if(numJugadores==3)
        {
            
            let jug1 = valorPrimerTiro[0];
            let jug2 = valorPrimerTiro[1];
            let jug3 = valorPrimerTiro[2]
            let pass1 = false;
            let pass2 = false;
            let pass3 = false;
            
                  
            valorPrimerTiro = valorPrimerTiro.sort().reverse();
            
            
            valorPrimerTiro.forEach(Element=>{
              if(jug1 == Element && pass1 == false){
                orden.push(1);
                pass1 = true;
              }
              else if(jug2 == Element && pass2 == false){
                orden.push(2);
                pass2 = true;
              }
              else if(jug3 == Element && pass3 == false){
                orden.push(3);
                pass3 = true;
              }
            })
            
           

        }else if(numJugadores==4)
        {
            let jug1 = valorPrimerTiro[0];
            let jug2 = valorPrimerTiro[1];
            let jug3 = valorPrimerTiro[2];
            let jug4 = valorPrimerTiro[3];
            let pass1 = false;
            let pass2 = false;
            let pass3 = false;
            let pass4 = false;
            
            
            
            valorPrimerTiro = valorPrimerTiro.sort().reverse();
            
            
            valorPrimerTiro.forEach(Element=>{
              if(jug1 == Element && pass1 == false){
                orden.push(1);
                pass1 = true;
              }
              else if(jug2 == Element && pass2 == false){
                orden.push(2);
                pass2 = true;
              }
              else if(jug3 == Element && pass3 == false){
                orden.push(3);
                pass3 = true;
              }
              else if(jug4 == Element && pass4 == false){
                orden.push(4);
                pass4 = true;
              }
            })
                        
        }
        
    }

    //Dibuja dado y obtiene valores de 1 a 6
    function dado() {
        countAnimacion = 0;
        let canvas = document.getElementById('juego');
        let ctx = canvas.getContext("2d");
        let img = new Image();
        img.src = "../statics/img/dadodef.png"
        let pos = [0,0];
        let numDado=5;
        rand = Math.floor(Math.random() * (7 - 1)) + 1;
    

        
        //TODO optimizar funcion printrand
        
        //Imprime número aleatorio de juego
        function printrand(){
            
            if(rand==1){
                ctx.drawImage(img,175*3,175*4,135,135,100,50,100,100);
            }
            if(rand==2){
                ctx.drawImage(img,175*3,175*1,135,135,100,50,100,100);
            }
            if(rand==3){
                ctx.drawImage(img,175*3,0,135,135,100,50,100,100);
            }
            if(rand==4){
                ctx.drawImage(img,175*3,175*7,135,135,100,50,100,100);
            }
            if(rand==5){
                ctx.drawImage(img,175*3,175*6,135,135,100,50,100,100);
            }
            if(rand==6){
                ctx.drawImage(img,175*3,175*3,135,135,100,50,100,100);
            }
            //almacena primeros valores de dado
            if(valorPrimerTiro.length<numJugadores){
                valorPrimerTiro.push(rand);
               
            }
        
            
           
        }
       
        function drawsprite(ctx,img,x,y){
            ctx.drawImage(img,175*x,175*y,135,135,100,50,100,100);
        }
    
        function step(){
            countAnimacion++;
            if(countAnimacion % 2 === 0){
                ctx.clearRect(100,50,100,100);
                drawsprite(ctx,img,pos[0], pos[1]);
                if(pos[0]<15){
                    pos[0]++;
                }
                else
                {
                    pos[0]=0;
                    pos[1]++;
                }
            }
            if(pos[1]<9){
                requestAnimationFrame(step);
            }else{
                countAnimacion = 0;
                pos = [0,0];
            }
        }
        
    
        function animacion(){
            new Promise((resolve,reject) => {
                requestAnimationFrame(step);
                resolve();
            }).then(()=>{
               return new Promise((resolve)=>{
                   setTimeout(()=>{
                        printrand();
                        resolve();        
                   }, 4800)
               }).then(()=>{
                return new Promise((resolve)=>{
                    setTimeout(()=>{
                        if(valorPrimerTiro.length<numJugadores)
                        {
                            alert("Siguiente jugador, es tu turno de tirar el dado");
                        }
                        else if(valorPrimerTiro.length==numJugadores&&varcontrol===0)
                        {
                            
                            arregloOrdenPlay();
                            
                            
                            varcontrol++;

                        }
                       
                        resolve();
                        
                    }, 1500)
                })
                
               })
            })
          
        }
        animacion();
        
        
    }
    
   









   

    
    function peticion(){
        var datos = { id_materia: materia, preguntas: preguntas_pasadas}
        fetch("../dynamics/php/juego.php", {method: "POST", body: JSON.stringify(datos)}).then(function(response){
            return response.text();
        }).then(function (text){
            stringPetición = text;
            //metodo split que nos separa el string de la petición y los almacena en sus respectivas varibles en forma de arrelgos donde cada una contiene la respuesta y el boolCorrect
            console.log(text);
            fetchPregunta = stringPetición.split(';');
            fetchRespuestas = fetchPregunta[1].split('&');
            

            fetchRes1= fetchRespuestas[0].split('#');
           
            fetchRes2= fetchRespuestas[1].split('#');
            
            fetchRes3= fetchRespuestas[2].split('#');
            

            // fetchResCorrect = fetchRespuestas[3].split('|')[1];
            fetchKilometro=fetchRespuestas[3].split('|')[1]       
            

            fetchRes4=(fetchRespuestas[3].split('|')[0]).split("#");

            // console.log(fetchPregunta);
            // console.log(fetchRes1);
            // console.log(fetchRes2);
            // console.log(fetchRes3);
            // console.log(fetchRes4);
            // console.log(fetchKilometro);
            
            fetchRes4=(fetchRespuestas[3].split('|')[0]).split("#");
        
           

            
        });
    }

    //No sirve, pero muestra la pregunta.
    function drawPregunta(){
        function funcRespuesta(res){
           // console.log('RESPUESTA ES: '+res);
            new Promise((resolve, reject) => {
                console.log("CLICK EN LA RESPUESTA");
                if(res ==1){
                    console.log("RESPUESTA CORRECTA");
                    infoAcierto.style.display='block';
                }else{
                    console.log("RESPUESTA INCORRECTA");
                    infoFallo.style.display='block';
                }
                resolve();
            }).then(()=>{
                return new Promise((resolve)=>{
                    setTimeout(()=>{
                        fondoPreguntaTarjeta.style.display = 'none';
                        tarjetaPreguntaTarjeta.style.display = 'none';
                        infoFallo.style.display='none';
                        infoAcierto.style.display='none';

                        console.log("HOLADASDAD");
                        resolve();
                    }, 2000)
                })
            })
        }
        console.log("WOOWO");
        numKilometroTarjeta.innerHTML= fetchKilometro;
        materiaTarjeta.innerHTML= 'Materia';
        preguntaTarjeta.innerHTML= fetchPregunta[0];
        respuesta1Tarjeta.innerHTML= fetchRes1[0];
        respuesta2Tarjeta.innerHTML=fetchRes2[0];
        respuesta3Tarjeta.innerHTML=fetchRes3[0];
        respuesta4Tarjeta.innerHTML=fetchRes4[0];  
        
        respuesta1Tarjeta.addEventListener('click', ()=>{
            console.log("RESPUESTA1");

            funcRespuesta(fetchRes1[1]);
        });
        respuesta2Tarjeta.addEventListener('click', ()=>{
            console.log("RESPUESTA2");
            funcRespuesta(fetchRes2[1]);
        })
        respuesta3Tarjeta.addEventListener('click', ()=>{
            console.log("RESPUESTA3");
            funcRespuesta(fetchRes3[1]);
        })
        respuesta4Tarjeta.addEventListener('click', ()=>{
            console.log("RESPUESTA4");
            funcRespuesta(fetchRes4[1]);
        })
    }

    
    //separar las cookies
    function cookies(){
        
        let cookies = document.cookie;
        let cookiesArray = cookies.split("; ");
        cookiesArray.forEach(element => {
           
            let cookie = element.split("=");
            
            if(cookie[0] == "jugadores"){
                jugadores=cookie[1];
                numJugadores=cookie[1];
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
            if(tablero == 21){
                if(i==0){
                    fichas.push(new Ficha(340,530,colores[i]));
                }else if(i==1){
                    fichas.push(new Ficha(340,560,colores[i]));
                }else if(i==2){
                    fichas.push(new Ficha(380,530,colores[i]));
                }else if(i==3){
                    fichas.push(new Ficha(380,560,colores[i]));
                }
            }else{
                if(i==0){
                    fichas.push(new Ficha(945,592,colores[i]));
                }else if(i==1){
                    fichas.push(new Ficha(945,622,colores[i]));
                }else if(i==2){
                    fichas.push(new Ficha(975,592,colores[i]));
                }else if(i==3){
                    fichas.push(new Ficha(975,622,colores[i]));
                }
            }
        }
        if(tablero == 21){
            fichas.push(new Ficha(360,545,"#000000"));
        }
        if(tablero == 42){
            fichas.push(new Ficha(960,605,"#000000"));
        }
        
    }

    function dibujarTablero(){
        
        if(tablero==42){
            
            imgTablero.src = '../statics/img/Tableros42.png';
            imgTablero.addEventListener('load', ()=>{
                ctx.drawImage(imgTablero, 230, 50, 800, 600);
            });
            //divTablero.src=""
        }else{
            
            imgTablero.src = '../statics/img/Tableros21.png';
            imgTablero.addEventListener('load', ()=>{
                ctx.drawImage(imgTablero, 250, 50, 700, 700);
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
                    drawPregunta();
                    resolve();
                }, 5000);
            })
        })
     
       
    }

    //funcion que dibuja el canvas dependiendo de la pantalla *
    function draw() {
        fichas.forEach(Element=>{
            Element.dibujar();
        })
    }

    //eventos de botón para el canvas 
    function girarDado(){
        dadoButton.addEventListener('click', e => {
            bloqueBoton.style.display='block';
            fichas.forEach(Element=>{
                Element.avanzar();
            });
            tableroEvents(e);
        });
    }
    
 //Evento para inicializar juego SE VA A IMPLEMENTAR PARA QUE AVISE EL ORDEN DE LOS JUGADORES, PERO YA ESTÁ EN EL ARREGLO
 // comenzar.addEventListener('click', e =>{
    function iniciarJuego(){
        girarDado();
       
        
            
     
    }





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
                draw();
                resolve();                
            }, 1001);
        })
    })


    iniciarJuego();
    
    dibujarTablero();
    infoTarjetas();//Este método es solamente útil en lo que se cree eventos de puntajes u otrs cosas
    // //metodo de prueba para mostrar carta de pregunta 
    
    
    new Promise((resolve, reject) =>{
        console.log("Promesa Petición");
        peticion();
        resolve();
    }).then(()=>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                console.log("PROMESA DRAW PREGUNTA");
                drawPregunta();
            }, 2000)
        })
    })
    
    
}