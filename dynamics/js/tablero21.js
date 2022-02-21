function tablero21(ctx) {
    ctx.fillStyle = "#FEFFD9";
    ctx.fillRect(0, 0, 800, 800);
    ctx.fillStyle="#ffffff";
    ctx.fill();

    ctx.beginPath();

    ctx.rect(20, 30, 260, 85);
    ctx.rect(310, 30, 127, 85);
    ctx.rect(455, 30, 127, 85);
    ctx.rect(600, 30, 127, 85);
    ctx.stroke();
    ctx.fill();

    for (let j=140; j<=450; j+=110)
    {
        for(let i=20; i<=620; i+=145)
        {
            ctx.rect(i, j, 127, 85);
            ctx.stroke();
            ctx.fill();
        }
    }

    ctx.rect(20, 470, 127, 85);
    ctx.rect(165, 470, 260, 85);
    ctx.stroke();
    ctx.fill();

    ctx.closePath();


    /*para hacer rectángulos redondeados
    function roundedRect(ctx,x,y,width,height,radius){
    ctx.beginPath();
    ctx.moveTo(x,y+radius);
    ctx.lineTo(x,y+height-radius);
    ctx.quadraticCurveTo(x,y+height,x+radius,y+height);
    ctx.lineTo(x+width-radius,y+height);
    ctx.quadraticCurveTo(x+width,y+height,x+width,y+height-radius);
    ctx.lineTo(x+width,y+radius);
    ctx.quadraticCurveTo(x+width,y,x+width-radius,y);
    ctx.lineTo(x+radius,y);
    ctx.quadraticCurveTo(x,y,x,y+radius);
    ctx.stroke();
    }

    roundedRect(ctx, 10, 10, 130, 110, 20);  
    */


}