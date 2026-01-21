<?php
$activities = [
    ["title" => "Jumping Jacks", "type" => "fitness", "desc" => "Do 20 jumping jacks to warm up."],
    ["title" => "Morning Stretch", "type" => "fitness", "desc" => "Stretch arms, legs, and back."],
    ["title" => "Balance Walk", "type" => "balance", "desc" => "Walk in a straight line carefully."],
    ["title" => "Ball Throw", "type" => "sports", "desc" => "Throw and catch a ball 10 times."],
    ["title" => "Run & Stop", "type" => "sports", "desc" => "Run fast, then stop when called."],
    ["title" => "Skipping Rope", "type" => "fitness", "desc" => "Skip rope for 2 minutes."],
    ["title" => "Hula Hoop", "type" => "balance", "desc" => "Spin the hoop for 1 minute."],
    ["title" => "Dance Time", "type" => "fun", "desc" => "Dance freely with music."],
    ["title" => "Obstacle Course", "type" => "sports", "desc" => "Jump, crawl, and climb through obstacles."],
    ["title" => "Yoga Pose", "type" => "balance", "desc" => "Hold a simple yoga pose for 30 seconds."],
];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Physical Activities</title>
    <link rel="stylesheet" href="physical-activities.css"/>
</head>
<body>
    <a class="pa-back" href="index.php">← Back</a>
    <header class="pa-hero">
        <h1>Physical Activities</h1>
        <p>Move, play, and stay healthy with fun exercises!</p>

        <div class="pa-filter">
            <button class="pa-btn active" data-filter="all">All</button>
            <button class="pa-btn" data-filter="fitness">Fitness</button>
            <button class="pa-btn" data-filter="sports">Sports</button>
            <button class="pa-btn" data-filter="balance">Balance</button>
            <button class="pa-btn" data-filter="fun">Fun</button>
        </div>
    </header>

    <main class="pa-grid">
        <?php foreach ($activities as $activity): ?>
            <div class="pa-card" data-type="<?= $activity['type'] ?>">
                <div class="pa-icon">🏃</div>
                <h3><?= $activity['title'] ?></h3>
                <p><?= $activity['desc'] ?></p>
                <button class="pa-open">Start</button>
            </div>
        <?php endforeach; ?>
    </main>

    <script src="physical-activities.js"></script>
</body>
</html>