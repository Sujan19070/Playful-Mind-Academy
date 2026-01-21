<?php
include "db.php";

$username = $_POST["username"];
$password = $_POST["password"];

$q = "SELECT * FROM admins
      WHERE username='$username'
      AND password='$password'";

$res = mysqli_query($conn,$q);

if(mysqli_num_rows($res)==1){
    echo json_encode([
        "status"=>"success",
        "message"=>"Login successful"
    ]);
}else{
    echo json_encode([
        "status"=>"error",
        "message"=>"Invalid login"
    ]);
}
?>
