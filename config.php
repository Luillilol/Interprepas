<?php
    define("DBUSER","php_helper");
    define("DBHOST","localhost");
    define("PASSWORD","C0NTR@s3niaS3GuR4");
    define("DB","maraton");

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
