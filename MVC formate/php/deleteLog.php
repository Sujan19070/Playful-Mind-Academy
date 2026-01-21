<?php
include "db.php";

$id = $_POST['id'];

$conn->query("DELETE FROM audit_logs WHERE id = $id");

echo "deleted";
