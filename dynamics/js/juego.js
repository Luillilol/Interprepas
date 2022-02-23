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

    function drawPregunta(){
        //ctx.clearRect(0,0,canvas.clientWidth,canvas.height);
       
        ctx.beginPath();
            ctx.fillStyle="#0000cc";
            console.log(ctx.fillStyle);
            ctx.fill();
            ctx.rect(0,0,canvas.clientWidth,canvas.height);
            ctx.stroke();
            ctx.fill();
            //ctx.fillStyle="#ffffff";
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
            let cookie = element.split("=");
            //console.log(cookie[1]);
            if(cookie[0] == "jugadores"){
                jugadores=cookie[1];
            }else{
                tablero=cookie[1];
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
            imgTablero.src = '../statics/img/tablero700.png'
            imgTablero.addEventListener('load', ()=>{
                ctx.drawImage(imgTablero, 150, 0, 700, 700);
            });
            //divTablero.src=""
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
            dibujarTablero();
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

    //eventos de mouse para el canvas 
    canvas.addEventListener('mouseup', e => {
        tableroEvents(e);
    });

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
            }, 1500);
        })
    })
    //setInterval(draw, 16);
}