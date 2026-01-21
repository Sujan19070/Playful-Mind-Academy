<?php
include "db.php";

$username = $_POST["username"];
$password = $_POST["password"];

$q = "INSERT INTO admins(username,password)
      VALUES('$username','$password')";

if(mysqli_query($conn,$q)){
    echo json_encode([
        "status"=>"success",
        "message"=>"Registration successful"
    ]);
}else{
    echo json_encode([
        "status"=>"error",
        "message"=>"Registration failed"
    ]);
}
?>
