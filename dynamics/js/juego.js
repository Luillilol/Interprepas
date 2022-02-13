window.onload = function() {

    function mainMenu(ctx) {
        let stringJuego = 'Jugar';
        let stringInstrucciones = 'Instrucciones';
        let stringConfig = 'Configuracíon';
        let botonColor = '#00ff00';

        for (var i = 0; i < 3; i++) {
            ctx.rect(0, i * 100, 100, 100);
            ctx.fillStyle = botonColor;
            ctx.fill();
            ctx.font = "10px Arial";
            if (i == 0) {
                ctx.fillText(stringJuego, 10, i * 100 + 50);
            }
            if (i == 1) {
                ctx.fillText(stringInstrucciones, 10, i * 100 + 50);
            }
            if (i == 2) {
                ctx.fillText(stringConfig, 10, i * 100 + 50);
            }

        }
    }


    function juego() {
        //variables de entorno
        let colorFondo = '#0071aa';
        let juegoState = 'mainMenu';

        let canvas = document.getElementById("juego");
        let ctx = canvas.getContext("2d");
        ctx.rect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = colorFondo;
        ctx.fill();

        if (juegoState === 'mainMenu') {
            mainMenu(ctx);
        }
        //ctx.stroke();
    }

    juego();

}