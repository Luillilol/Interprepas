<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        include("dynamics/config.php");
        $con=connect();
        $sql="Create TABLE a(a int)";
        $result=mysqli_query($con,$sql);
        $fetch = mysqli_fetch_all($result);
        var_dump($fetch);
    ?>
</body>
</html>