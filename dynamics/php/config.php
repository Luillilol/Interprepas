<?php
/*
** @Archivo:        config.php
** @Equipo: 	    CoyoAtlón
** @Descripción:    Conexión con base de datos.
*/

    //creación de constantes para la conexión
    define("DBUSER","root");
    define("DBHOST","localhost");
    define("PASSWORD","");
    define("DB","maraton");
    

    //funcion que conecta a la base de datos
    function connect()
    {
        $con=mysqli_connect(DBHOST,DBUSER, PASSWORD, DB);
        
        if(!$con){
            mysqli_connect_error();
            mysqli_connect_errno();
            echo "No se pudo acceder a la base de datos";
        }
        return $con;
    }
?>
