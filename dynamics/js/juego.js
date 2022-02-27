window.onload = function() {
    const imgTablero = new Image(1000, 1000); //almacena la imagen del tablero
    //variables globales
    let pantalla = "tablero";
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
    let numJugadores=0;

    let ordenJugadores =[];
    let valorPrimerTiro=[];
    let varcontrol = 0;
    let materia=1, preguntas_pasadas = [1,2,3];
    let data, objConf; 
    let stringPetición;
    let fetchPregunta, fetchRes1, fetchRes2, fetchRes3, fetchRes4, fetchKilometro, fetchResCorrect, fetchRespuestas;
    let prueba, prueba2;
    

    //Determina el orden de juego de los jugadores
    function arregloOrdenPlay(){
        //Cada condicional determinaa las combinaciones posibles para determinar el orden
        //en el que irán los jugadores
        console.log(numJugadores);
        console.log("Tiros "+valorPrimerTiro);
    

        if(numJugadores==1)
        {
            console.log("uno");
            ordenJugadores.push(1);
            console.log(ordenJugadores);
        }
        else if(numJugadores==2)
        {
            console.log("Doss");
            if(valorPrimerTiro[0]>=valorPrimerTiro[1])
            {
                ordenJugadores.push(1);
                ordenJugadores.push(2);
            }
            else if(valorPrimerTiro[1]>=valorPrimerTiro[0]){
                ordenJugadores.push(2);
                ordenJugadores.push(1);
            }

        }else if(numJugadores==3)
        {
            console.log("tres");
            console.log(valorPrimerTiro[0]);
            if(valorPrimerTiro[0]>=valorPrimerTiro[1] && valorPrimerTiro[1]>=valorPrimerTiro[2]){
                ordenJugadores.push(1);
                ordenJugadores.push(2);
                ordenJugadores.push(3);

            }else if(valorPrimerTiro[0]>=valorPrimerTiro[2] && valorPrimerTiro[2]>valorPrimerTiro[1]){
                ordenJugadores.push(1);
                ordenJugadores.push(3);
                ordenJugadores.push(2);

            }else if(valorPrimerTiro[1]>valorPrimerTiro[0] && valorPrimerTiro[0]>=valorPrimerTiro[2]){
                ordenJugadores.push(2);
                ordenJugadores.push(1);
                ordenJugadores.push(3);

            }else if(valorPrimerTiro[1]>=valorPrimerTiro[2] && valorPrimerTiro[2]>valorPrimerTiro[0]){
                ordenJugadores.push(2);
                ordenJugadores.push(3);
                ordenJugadores.push(1);

            }else if(valorPrimerTiro[2]>valorPrimerTiro[0] && valorPrimerTiro[0]>=valorPrimerTiro[1]){
                ordenJugadores.push(3);
                ordenJugadores.push(1);
                ordenJugadores.push(2);

            }else if(valorPrimerTiro[2]>valorPrimerTiro[1] && valorPrimerTiro[1]>valorPrimerTiro[0]){
                ordenJugadores.push(3);
                ordenJugadores.push(2);
                ordenJugadores.push(1);
            }


        }else if(numJugadores==4)
        {
            console.log("cuatro");
            if(valorPrimerTiro[0]>=valorPrimerTiro[1] && valorPrimerTiro[1]>=valorPrimerTiro[2] && valorPrimerTiro[2]>=valorPrimerTiro[3]){
                ordenJugadores.push(1);
                ordenJugadores.push(2);
                ordenJugadores.push(3);
                ordenJugadores.push(4);

            }else if(valorPrimerTiro[0]>=valorPrimerTiro[1] && valorPrimerTiro[1]>=valorPrimerTiro[3] && valorPrimerTiro[3]>valorPrimerTiro[2]){
                ordenJugadores.push(1);
                ordenJugadores.push(2);
                ordenJugadores.push(4);
                ordenJugadores.push(3);

            }else if(valorPrimerTiro[0]>=valorPrimerTiro[2] && valorPrimerTiro[2]>valorPrimerTiro[1] && valorPrimerTiro[1]>=valorPrimerTiro[3]){
                ordenJugadores.push(1);
                ordenJugadores.push(3);
                ordenJugadores.push(2);
                ordenJugadores.push(4);

            }else if(valorPrimerTiro[0]>=valorPrimerTiro[2] && valorPrimerTiro[2]>=valorPrimerTiro[3] && valorPrimerTiro[3]>valorPrimerTiro[1]){
                ordenJugadores.push(1);
                ordenJugadores.push(3);
                ordenJugadores.push(4);
                ordenJugadores.push(2);

            }else if(valorPrimerTiro[0]>=valorPrimerTiro[3] && valorPrimerTiro[3]>valorPrimerTiro[2] && valorPrimerTiro[2]>valorPrimerTiro[1]){
                ordenJugadores.push(1);
                ordenJugadores.push(4);
                ordenJugadores.push(3);
                ordenJugadores.push(2);

            }else if(valorPrimerTiro[0]>=valorPrimerTiro[3] && valorPrimerTiro[3]>valorPrimerTiro[1] && valorPrimerTiro[1]>=valorPrimerTiro[2]){
                ordenJugadores.push(1);
                ordenJugadores.push(4);
                ordenJugadores.push(2);
                ordenJugadores.push(3);


            }else if(valorPrimerTiro[1]>valorPrimerTiro[0] && valorPrimerTiro[0]>=valorPrimerTiro[2] && valorPrimerTiro[2]>=valorPrimerTiro[3]){
                ordenJugadores.push(2);
                ordenJugadores.push(1);
                ordenJugadores.push(3);
                ordenJugadores.push(4);

            }else if(valorPrimerTiro[1]>valorPrimerTiro[0] && valorPrimerTiro[0]>=valorPrimerTiro[3] && valorPrimerTiro[3]>valorPrimerTiro[2]){
                ordenJugadores.push(2);
                ordenJugadores.push(1);
                ordenJugadores.push(4);
                ordenJugadores.push(3);

            }else if(valorPrimerTiro[1]>=valorPrimerTiro[2] && valorPrimerTiro[2]>valorPrimerTiro[0] && valorPrimerTiro[0]>=valorPrimerTiro[3]){
                ordenJugadores.push(2);
                ordenJugadores.push(3);
                ordenJugadores.push(1);
                ordenJugadores.push(4);

            }else if(valorPrimerTiro[1]>=valorPrimerTiro[2] && valorPrimerTiro[2]>=valorPrimerTiro[3] && valorPrimerTiro[3]>valorPrimerTiro[0]){
                ordenJugadores.push(2);
                ordenJugadores.push(3);
                ordenJugadores.push(4);
                ordenJugadores.push(1);

            }else if(valorPrimerTiro[1]>=valorPrimerTiro[3] && valorPrimerTiro[3]>valorPrimerTiro[0] && valorPrimerTiro[0]>=valorPrimerTiro[2]){
                ordenJugadores.push(2);
                ordenJugadores.push(4);
                ordenJugadores.push(1);
                ordenJugadores.push(3);

            }else if(valorPrimerTiro[1]>=valorPrimerTiro[3] && valorPrimerTiro[3]>valorPrimerTiro[2] && valorPrimerTiro[2]>valorPrimerTiro[0]){
                ordenJugadores.push(2);
                ordenJugadores.push(4);
                ordenJugadores.push(3);
                ordenJugadores.push(1);



            }else if(valorPrimerTiro[2]>valorPrimerTiro[0] && valorPrimerTiro[0]>=valorPrimerTiro[1] && valorPrimerTiro[1]>=valorPrimerTiro[3]){
                ordenJugadores.push(3);
                ordenJugadores.push(1);
                ordenJugadores.push(2);
                ordenJugadores.push(4);

            }else if(valorPrimerTiro[2]>valorPrimerTiro[0] && valorPrimerTiro[0]>=valorPrimerTiro[3] && valorPrimerTiro[3]>valorPrimerTiro[1]){
                ordenJugadores.push(3);
                ordenJugadores.push(1);
                ordenJugadores.push(4);
                ordenJugadores.push(2);

            }else if(valorPrimerTiro[2]>valorPrimerTiro[1] && valorPrimerTiro[1]>valorPrimerTiro[0] && valorPrimerTiro[0]>=valorPrimerTiro[3]){
                ordenJugadores.push(3);
                ordenJugadores.push(2);
                ordenJugadores.push(1);
                ordenJugadores.push(4);

            }else if(valorPrimerTiro[2]>valorPrimerTiro[1] && valorPrimerTiro[1]>=valorPrimerTiro[3] && valorPrimerTiro[3]>valorPrimerTiro[0]){
                ordenJugadores.push(3);
                ordenJugadores.push(2);
                ordenJugadores.push(4);
                ordenJugadores.push(1);

            }else if(valorPrimerTiro[2]>=valorPrimerTiro[3] && valorPrimerTiro[3]>valorPrimerTiro[0] && valorPrimerTiro[0]>=valorPrimerTiro[1]){
                ordenJugadores.push(3);
                ordenJugadores.push(4);
                ordenJugadores.push(1);
                ordenJugadores.push(2);

            }else if(valorPrimerTiro[2]>=valorPrimerTiro[3] && valorPrimerTiro[3]>valorPrimerTiro[1] && valorPrimerTiro[1]>valorPrimerTiro[0]){
                ordenJugadores.push(3);
                ordenJugadores.push(4);
                ordenJugadores.push(2);
                ordenJugadores.push(1);


                
            }else if(valorPrimerTiro[3]>valorPrimerTiro[0] && valorPrimerTiro[0]>=valorPrimerTiro[1] && valorPrimerTiro[1]>=valorPrimerTiro[2]){
                ordenJugadores.push(4);
                ordenJugadores.push(1);
                ordenJugadores.push(2);
                ordenJugadores.push(3);

            }else if(valorPrimerTiro[3]>valorPrimerTiro[0] && valorPrimerTiro[0]>=valorPrimerTiro[2] && valorPrimerTiro[2]>valorPrimerTiro[1]){
                ordenJugadores.push(4);
                ordenJugadores.push(1);
                ordenJugadores.push(3);
                ordenJugadores.push(2);

            }else if(valorPrimerTiro[3]>valorPrimerTiro[1] && valorPrimerTiro[1]>valorPrimerTiro[0] && valorPrimerTiro[0]>=valorPrimerTiro[2]){
                ordenJugadores.push(4);
                ordenJugadores.push(2);
                ordenJugadores.push(1);
                ordenJugadores.push(3);

            }else if(valorPrimerTiro[3]>valorPrimerTiro[1] && valorPrimerTiro[1]>=valorPrimerTiro[2] && valorPrimerTiro[2]>valorPrimerTiro[0]){
                ordenJugadores.push(4);
                ordenJugadores.push(2);
                ordenJugadores.push(3);
                ordenJugadores.push(1);

            }else if(valorPrimerTiro[3]>valorPrimerTiro[2] && valorPrimerTiro[2]>valorPrimerTiro[0] && valorPrimerTiro[0]>=valorPrimerTiro[1]){
                ordenJugadores.push(4);
                ordenJugadores.push(3);
                ordenJugadores.push(1);
                ordenJugadores.push(2);

            }else if(valorPrimerTiro[3]>valorPrimerTiro[2] && valorPrimerTiro[2]>valorPrimerTiro[1] && valorPrimerTiro[1]>valorPrimerTiro[0]){
                ordenJugadores.push(4);
                ordenJugadores.push(3);
                ordenJugadores.push(2);
                ordenJugadores.push(1);
            }
        }
        console.log("Orden jugadrores "+ordenJugadores);
    }

    //Dinuja dado y obtiene valores de 1 a 6
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
            
            console.log(rand);
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
           /* if(valorPrimerTiro.length<1)
            {
                alert("Para iniciar el juego cada jugador tirará el dado\nPrimer jugador, es tu turno de tirar el dado");
                valorPrimerTiro.push(rand);
            }*/
            
           
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
                        console.log(valorPrimerTiro);
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
                            
                            console.log(ordenJugadores);
                            varcontrol++;

                        }
                       
                        resolve();
                        
                    }, 1500)
                })
                
               })
            })
          
        }
        
        /*new Promise((resolve,reject) =>{
            animacion();
            resolve();
        }).then(()=>{
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    return rand;
                    resolve();
                }, 500);
            })
        })*/
        animacion();
        
        
    }
    
   









    class Ficha{
        l = 15;
        constructor(x,y,color){
            this.x = x;
            this.y = y;
            this.color = color;
        }

        dibujar(){
            console.log(this.color);
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.fillRect(this.x,this.y,this.l,this.l);
            ctx.stroke();
            ctx.closePath();
            console.log("Dibujando ficha en "+this.x+" "+this.y);
        }
    }

    
    function peticion(){
        var datos = { id_materia: materia, preguntas: preguntas_pasadas}
        fetch("../dynamics/php/juego.php", {method: "POST", body: JSON.stringify(datos)}).then(function(response){
            return response.text();
        }).then(function (text){
            stringPetición = text;
            //metodo split que nos separa el string de la petición y los almacena en sus respectivas varibles en forma de arrelgos donde cada una contiene la respuesta y el boolCorrect
            // console.log(stringPetición);
            fetchPregunta = stringPetición.split(';');
            console.log(fetchPregunta);
            fetchRespuestas = fetchPregunta[1].split('&');
            // console.log(fetchRespuestas);

            fetchRes1= fetchRespuestas[0].split('#');
            console.log(fetchRes1);
            fetchRes2= fetchRespuestas[1].split('#');
            console.log(fetchRes2);
            fetchRes3= fetchRespuestas[2].split('#');
            console.log(fetchRes3);

            fetchResCorrect = fetchRespuestas[3].split('|')[1];
            // console.log(fetchResCorrect);

            fetchRes4=(fetchRespuestas[3].split('|')[0]).split("#");
            console.log(fetchRes4);

            console.log("a"+text);
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
                    fichas.push(new Ficha(940,592,colores[i]));
                }else if(i==1){
                    fichas.push(new Ficha(940,622,colores[i]));
                }else if(i==2){
                    fichas.push(new Ficha(980,592,colores[i]));
                }else if(i==3){
                    fichas.push(new Ficha(980,622,colores[i]));
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
        console.log('entre');
        if(tablero==42){
            console.log("TABLERO DE 42 CASILLAS");
            imgTablero.src = '../statics/img/Tableros42.png';
            imgTablero.addEventListener('load', ()=>{
                ctx.drawImage(imgTablero, 230, 50, 800, 600);
            });
            //divTablero.src=""
        }else{
            console.log("Tablero de 21 casillas");
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
                    //drawPregunta();
                    resolve();
                }, 5000);
            })
        })
     
       
    }

    //funcion que dibuja el canvas dependiendo de la pantalla *
    function draw() {
        new Promise((resolve,reject) =>{
            //dibujarTablero();
            resolve();
        }).then(()=>{
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    fichas.forEach(Element=>{
                        Element.dibujar();
                    })
                    resolve();
                }, 1000);
            })
        })
        
    }

    //eventos de botón para el canvas 
    function girarDado(){
        dadoButton.addEventListener('click', e => {
            bloqueBoton.style.display='block';
            tableroEvents(e);
        });
    }
    
 //Evento para inicializar juego SE VA A IMPLEMENTAR PARA QUE AVISE EL ORDEN DE LOS JUGADORES, PERO YA ESTÁ EN EL ARREGLO
 // comenzar.addEventListener('click', e =>{
    function iniciarJuego(){
        girarDado();
       
     
        console.log(numJugadores);
        console.log(valorPrimerTiro);
        if(valorPrimerTiro.length >= 1 && valorPrimerTiro.length<numJugadores){
            alert("Siguiente jugador, es tu turno de tirar el dado");
        }
        
            
            //si el valor de leghn es uno, pues oslo hay un jugador jugando 
            //si es 2  hace la comparacion entre los 2 y asi.
    
        if(numJugadores==1){
           
        }
        else if(numJugadores==2){
           
        }
        else if(numJugadores==3){
           

        }else if(numJugadores==4){
           
        }
        console.log();
            
     
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
                console.log(colores);
                draw();
                resolve();                
            }, 1500);
        })
    })

    iniciarJuego();
    
    dibujarTablero();
    infoTarjetas();//Este método es solamente útil en lo que se cree eventos de puntajes u otrs cosas
    //canvas.height='100%';
    //timer del juego puesto a 60 fps    
    //setInterval(draw, 16);
    
   
    console.log("Se imprime esto");
    console.log(numJugadores);
    
   
    
    peticion();
}