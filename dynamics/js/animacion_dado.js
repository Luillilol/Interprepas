function dado() {
    countAnimacion = 0;
    let canvas = document.getElementById('juego');
    let ctx = canvas.getContext("2d");
    let img = new Image();
    img.src = "../statics/img/dadodef.png"
    let pos = [0,0];

    //TODO optimizar funcion printrand

    function printrand(){
        let rand = Math.floor(Math.random() * (7 - 1)) + 1;
        //console.log(rand);
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