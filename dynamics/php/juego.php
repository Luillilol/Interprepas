<?php
    include("./config.php");
    $preguntaAzar= rand(1, 20);
    $numPregunta = ($preguntaAzar*4)-1;
    $conexion = connect();
    
    $pregunta1 = [];
    $pregunta2 = [];
    $pregunta3 = [];
    $pregunta4 = [];

    //Petición de JS FETCH
    $json = trim(file_get_contents("php://input"));
    $decode = json_decode($json, true);
    $numMateria=$decode['id_materia'];





    $peticion = "SELECT id_pregunta, pregunta, respuesta, materia, boolCorrect, kilómetro FROM Preguntas 
                NATURAL JOIN Respuestas 
                NATURAL JOIN Materias
                WHERE Materias.id_materia=".$numMateria;
    mysqli_real_escape_string($conexion, $peticion);
    $query = mysqli_query($conexion, $peticion);
    // $row_instrucciones = mysqli_fetch_array($query);
    // var_dump($row_instrucciones);
    $arr = [];
    $var=[];
    $i = 0;
    while($row = mysqli_fetch_array($query, MYSQLI_ASSOC))
    {
        // var_dump($row);
        array_push($arr, $row);
    }

    /*Se asigna cada arreglo de pregunta en una variable*/
    $pregunta1 = $arr[($numPregunta) + 1];
    $pregunta2 = $arr[($numPregunta) + 2];
    $pregunta3 = $arr[($numPregunta) + 3];
    $pregunta4 = $arr[($numPregunta) + 4];
    /*Nos sirve en js: Kilometros, pregunta respuesta y boolcorrect */

//     // print_r($arr[($numPregunta)+1]);
    print_r($pregunta1['pregunta'].';'. $pregunta1['respuesta'].'#'.$pregunta1['boolCorrect'].'&'. $pregunta2['respuesta'] . '#' . $pregunta2['boolCorrect'].'&'. $pregunta3['respuesta'] . '#' . $pregunta3['boolCorrect'].'&'. $pregunta4['respuesta'] . '#' . $pregunta4['boolCorrect'].'|'.$pregunta1['kilómetro']);
//     print_r($pregunta1['respuesta']);
//     print_r($pregunta1['kilómetro']);
//     print_r($pregunta1['boolCorrect']);
// // print_r($arr[($numPregunta)+2]);
//     print_r($pregunta2['pregunta']);
//     print_r($pregunta2['respuesta']);
//     print_r($pregunta2['kilómetro']);
//     print_r($pregunta2['boolCorrect']);
// // print_r($arr[($numPregunta)+3]);
//     print_r($pregunta3['pregunta']);
//     print_r($pregunta3['respuesta']);
//     print_r($pregunta3['kilómetro']);
//     print_r($pregunta3['boolCorrect']);
// // print_r($arr[($numPregunta)+4]);
//     print_r($pregunta4['pregunta']);
//     print_r($pregunta4['respuesta']);
//     print_r($pregunta4['kilómetro']);
//     print_r($pregunta4['boolCorrect']);     

    // print_r($arr);
    // echo($preguntaAzar);
    //print_r($arr[0]);
    //var_dump($_SERVER);

   

    // echo($decode['id_materia']);



    //var_dump($decode);
?>