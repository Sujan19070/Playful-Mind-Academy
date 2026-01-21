<?php
include "db.php";

$result = $conn->query("SELECT * FROM billing_plan WHERE status='active' LIMIT 1");
$data = $result->fetch_assoc();

echo json_encode($data);
