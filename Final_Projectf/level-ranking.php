<?php
$activities = [
    ["title" => "Puzzle Master", "category" => "Puzzle", "points" => 120, "level" => "Bronze"],
    ["title" => "Math Wizard", "category" => "Math", "points" => 220, "level" => "Silver"],
    ["title" => "Fun Runner", "category" => "Fun", "points" => 150, "level" => "Bronze"],
    ["title" => "Memory Hero", "category" => "Memory", "points" => 300, "level" => "Gold"],
    ["title" => "Story Reader", "category" => "Reading", "points" => 180, "level" => "Silver"],
    ["title" => "Art Creator", "category" => "Art", "points" => 260, "level" => "Gold"],
    ["title" => "Science Explorer", "category" => "Science", "points" => 400, "level" => "Platinum"],
    ["title" => "Word Champion", "category" => "Word", "points" => 340, "level" => "Gold"],
];
?>
<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8"/>
    <nav class="lr-topbar">
        <a class="lr-back" href="index.php">&larr; Back</a>
    </nav>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Level Ranking</title>
    <link rel="stylesheet" href="level-ranking.css"/>
</head>

<body>
    <header class="lr-hero">
        <h1>Level Ranking</h1>
        <p>Earn points from activities and level up!</p>

        <div class="lr-filter">
            <button class="lr-btn active" data-filter="all">All</button>
            <button class="lr-btn" data-filter="Bronze">Bronze (0–199)</button>
            <button class="lr-btn" data-filter="Silver">Silver (200–299)</button>
            <button class="lr-btn" data-filter="Gold">Gold (300–399)</button>
            <button class="lr-btn" data-filter="Platinum">Platinum (400+)</button>
        </div>
    </header>

    <main class="lr-grid">
        <?php foreach ($activities as $activity): ?>
            <div class="lr-card" data-level="<?= $activity['level'] ?>">
                <div class="lr-badge <?= strtolower($activity['level']) ?>">
                    <?= $activity['level'] ?>
                </div>
                <h3><?= $activity['title'] ?></h3>
                <p class="lr-category"><?= $activity['category'] ?></p>
                <p class="lr-points">Points: <?= $activity['points'] ?></p>
                <button class="lr-open">View</button>
            </div>
        <?php endforeach; ?>
    </main>

    <script src="level-ranking.js"></script>
</body>
</html>