<?php
include "db.php";

$id = $_POST['id'];
$action = $_POST['action'];

$conn->query("UPDATE audit_logs SET action='$action' WHERE id=$id");

echo "updated";
