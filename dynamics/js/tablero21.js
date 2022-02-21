let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

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


