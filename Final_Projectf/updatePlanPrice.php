<?php
include "db.php";

$id = $_POST['id'];
$price = $_POST['price'];

$conn->query("UPDATE billing_plan SET price='$price' WHERE id=$id");

echo "updated";
