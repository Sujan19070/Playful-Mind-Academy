<?php
if (session_status() === PHP_SESSION_NONE) {
    ini_set('session.gc_maxlifetime', 5);
    session_set_cookie_params([
        'lifetime' => 5,
        'path' => '/',
        'httponly' => true,
        'samesite' => 'Lax'
    ]);
    session_start();
}

if (isset($_SESSION['last_activity']) && (time() - $_SESSION['last_activity'] > 5)) {
    session_unset();
    session_destroy();
}

$_SESSION['last_activity'] = time();

$conn = new mysqli("localhost", "root", "", "playful_minds_db");

if ($conn->connect_error) {
    die("Database connection failed");
}
?>
