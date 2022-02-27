<?php
    include("./config.php");
    $conexion = connect();
    $peticion = "SELECT * FROM preguntas 
                NATURAL JOIN respuestas 
                NATURAL JOIN materias;";
    mysqli_real_escape_string($conexion, $peticion);
    $query = mysqli_query($conexion, $peticion);
    $row_instrucciones = mysqli_fetch_array($query);
    var_dump($row_instrucciones);
    // $arr = [];
    // $var=[];


?>