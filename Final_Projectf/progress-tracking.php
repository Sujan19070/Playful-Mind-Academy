<?php
$skills = [
    ["name" => "Math Skills", "percent" => 72],
    ["name" => "Reading Skills", "percent" => 64],
    ["name" => "Memory Skills", "percent" => 81],
    ["name" => "Creativity", "percent" => 58],
    ["name" => "Problem Solving", "percent" => 69],
];

$weekly = [
    ["day" => "Mon", "points" => 40],
    ["day" => "Tue", "points" => 60],
    ["day" => "Wed", "points" => 50],
    ["day" => "Thu", "points" => 80],
    ["day" => "Fri", "points" => 70],
    ["day" => "Sat", "points" => 90],
    ["day" => "Sun", "points" => 45],
];

$activities = [
    ["title" => "Math Puzzle", "category" => "Math", "points" => 30, "status" => "Completed"],
    ["title" => "Story Reading", "category" => "Reading", "points" => 20, "status" => "Completed"],
    ["title" => "Memory Cards", "category" => "Memory", "points" => 25, "status" => "Completed"],
    ["title" => "Shape Coloring", "category" => "Art", "points" => 15, "status" => "In Progress"],
    ["title" => "Science Quiz", "category" => "Science", "points" => 35, "status" => "Completed"],
    ["title" => "Word Match", "category" => "Language", "points" => 20, "status" => "In Progress"],
];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Progress Tracking</title>
    <link rel="stylesheet" href="progress-tracking.css"/>
</head>
<body>
    <header class="pt-hero">
        <h1>Progress Tracking</h1>
        <p>Track learning growth and activity performance!</p>
    </header>

    <section class="pt-overview">
        <div class="pt-card">
            <h3>Total Points</h3>
            <p class="pt-number">365</p>
        </div>
        <div class="pt-card">
            <h3>Completed Activities</h3>
            <p class="pt-number">18</p>
        </div>
        <div class="pt-card">
            <h3>Current Level</h3>
            <p class="pt-number">Silver ⭐</p>
        </div>
        <div class="pt-card">
            <h3>Badges Earned</h3>
            <p class="pt-number">7</p>
        </div>
    </section>

    <section class="pt-section">
        <h2>Skill Progress</h2>
        <div class="pt-skill-grid">
            <?php foreach ($skills as $skill): ?>
                <div class="pt-skill">
                    <div class="pt-skill-title">
                        <span><?= $skill['name'] ?></span>
                        <span><?= $skill['percent'] ?>%</span>
                    </div>
                    <div class="pt-bar">
                        <div class="pt-bar-fill" style="width: <?= $skill['percent'] ?>%"></div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </section>

    <section class="pt-section">
        <h2>Weekly Activity Points</h2>
        <div class="pt-weekly">
            <?php foreach ($weekly as $day): ?>
                <div class="pt-day">
                    <div class="pt-day-bar" style="height: <?= $day['points'] ?>%"></div>
                    <span><?= $day['day'] ?></span>
                </div>
            <?php endforeach; ?>
        </div>
    </section>

    <section class="pt-section">
        <h2>Detailed Activities</h2>
        <div class="pt-activity-grid">
            <?php foreach ($activities as $activity): ?>
                <div class="pt-activity-card">
                    <h3><?= $activity['title'] ?></h3>
                    <p class="pt-meta"><?= $activity['category'] ?></p>
                    <p class="pt-points">Points: <?= $activity['points'] ?></p>
                    <span class="pt-status <?= strtolower(str_replace(' ', '-', $activity['status'])) ?>">
                        <?= $activity['status'] ?>
                    </span>
                </div>
            <?php endforeach; ?>
        </div>
    </section>

    <div class="pt-section" style="text-align:center; margin-bottom:2rem;">
        <a href="index.php" class="pt-button">Back</a>
    </div>

    <script src="progress-tracking.js"></script>
</body>
</html>