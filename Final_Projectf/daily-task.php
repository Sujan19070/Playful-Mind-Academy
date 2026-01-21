<?php
$tasksFile = __DIR__ . "/daily-task.json";

if (!file_exists($tasksFile)) {
    file_put_contents($tasksFile, json_encode([]));
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $input = json_decode(file_get_contents("php://input"), true);
    if (is_array($input)) {
        file_put_contents($tasksFile, json_encode($input, JSON_PRETTY_PRINT));
        echo json_encode(["status" => "ok"]);
        exit;
    }
}

$tasks = json_decode(file_get_contents($tasksFile), true);
if (!is_array($tasks)) $tasks = [];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Daily Tasks for Kids</title>
    <link rel="stylesheet" href="daily-task.css" />
</head>
<body>
    <main class="app">
        <h1>🌟 My Daily Tasks 🌟</h1>
        <p class="subtitle">Check off each task when done!</p>

        <form id="taskForm">
            <input type="text" id="taskInput" placeholder="Add a fun task..." required />
            <button type="submit">Add</button>
        </form>

        <ul id="taskList"></ul>

        <div class="stats">
            <span id="doneCount">0</span> / <span id="totalCount">0</span> done ✅
        </div>

        <a class="back-btn" href="index.php">⬅️ Back</a>
    </main>

    <script>
        const initialTasks = <?php echo json_encode($tasks); ?>;
    </script>
    <script src="daily-task.js"></script>
</body>
</html>