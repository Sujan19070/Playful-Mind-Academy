<?php
$socialActivities = [
    ["title" => "Say Hello", "type" => "communication", "desc" => "Greet 3 people with a smile."],
    ["title" => "Share Toys", "type" => "sharing", "desc" => "Share a toy with a friend or sibling."],
    ["title" => "Team Puzzle", "type" => "teamwork", "desc" => "Solve a puzzle together."],
    ["title" => "Kind Words", "type" => "kindness", "desc" => "Say something nice to someone."],
    ["title" => "Group Game", "type" => "teamwork", "desc" => "Play a game with a group."],
    ["title" => "Listen Carefully", "type" => "communication", "desc" => "Listen while others are speaking."],
    ["title" => "Help a Friend", "type" => "kindness", "desc" => "Help someone when they need it."],
    ["title" => "Take Turns", "type" => "sharing", "desc" => "Practice taking turns in a game."],
    ["title" => "Family Talk", "type" => "communication", "desc" => "Talk about your day with family."],
];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Socialization Activities</title>
    <link rel="stylesheet" href="socialization.css"/>
</head>
<body>
    <header class="so-hero">
        <h1>Socialization Activities</h1>
        <p>Build friendships and learn kindness!</p>

        <div class="so-filter">
            <button class="so-btn active" data-filter="all">All</button>
            <button class="so-btn" data-filter="communication">Communication</button>
            <button class="so-btn" data-filter="sharing">Sharing</button>
            <button class="so-btn" data-filter="teamwork">Teamwork</button>
            <button class="so-btn" data-filter="kindness">Kindness</button>
        </div>
    </header>

    <main class="so-grid">
        <?php foreach ($socialActivities as $activity): ?>
            <div class="so-card" data-type="<?= $activity['type'] ?>">
                <div class="so-icon">🤝</div>
                <h3><?= $activity['title'] ?></h3>
                <p><?= $activity['desc'] ?></p>
                <button class="so-open">Try</button>
            </div>
        <?php endforeach; ?>
    </main>

    <div class="so-back">
        <a href="index.php" class="so-btn">← Back to Home</a>
    </div>

    <script src="socialization.js"></script>
</body>
</html>