<?php
include "db.php";

$id = $_POST['id'];
$value = $_POST['value']; // yes or no

$conn->query("UPDATE billing_plan SET status='$value' WHERE id=$id");

echo "updated";
