<?php
include "db.php";

$name = $_POST["name"];
$email = $_POST["email"];
$password = $_POST["password"];

$q = "INSERT INTO students(name,email,password)
      VALUES('$name','$email','$password')";

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
