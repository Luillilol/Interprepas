<?php
    include("./config.php");
    $preguntaAzar= rand(1, 20);
    $numPregunta = ($preguntaAzar*4)-1;
    $conexion = connect();
    $numMateria=2;
    $peticion = "SELECT id_pregunta, pregunta, respuesta, materia, boolCorrect FROM Preguntas 
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
    print_r($arr[($numPregunta)+1]);
    echo('<br>');
    print_r($arr[($numPregunta)+2]);
    echo ('<br>');
    print_r($arr[($numPregunta)+3]);
    echo ('<br>');
    print_r($arr[($numPregunta)+4]);
    echo ('<br>');

    // print_r($arr);
    echo($preguntaAzar);
    //print_r($arr[0]);
    //var_dump($_SERVER);
    // $json = trim(file_get_contents("php://input"));
    // $decode = json_decode($json, true);
    // var_dump($decode);
?>