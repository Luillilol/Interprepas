<?php
    include("./config.php");
    $conexion = connect();
    $peticion = "SELECT pregunta, respuesta, materia, boolCorrect FROM Preguntas 
                NATURAL JOIN Respuestas 
                NATURAL JOIN Materias
                WHERE Materias.id_materia=1";
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
    // print_r($arr);
    //print_r($arr[0]);
    //var_dump($_SERVER);
    $json = trim(file_get_contents("php://input"));
    $decode = json_decode($json, true);
    var_dump($decode);
?>