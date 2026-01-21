<?php
$healthActivities = [
    ["title" => "Healthy Food", "type" => "nutrition", "desc" => "Eat fruits, veggies, and balanced meals."],
    ["title" => "Drink Water", "type" => "nutrition", "desc" => "Stay hydrated throughout the day."],
    ["title" => "Exercise Time", "type" => "exercise", "desc" => "Stretch, jump, and move your body."],
    ["title" => "Hygiene Habits", "type" => "hygiene", "desc" => "Brush teeth, wash hands, and stay clean."],
    ["title" => "Doctor Tips", "type" => "checkup", "desc" => "Learn why checkups are important."],
    ["title" => "Sleep Well", "type" => "sleep", "desc" => "Get 8–10 hours of sleep every night."],
    ["title" => "Safety Rules", "type" => "safety", "desc" => "Learn road and home safety tips."],
    ["title" => "Mind Relax", "type" => "wellness", "desc" => "Breathing and calm activities."],
];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Health Info for Kids</title>
    <link rel="stylesheet" href="health-info.css"/>
</head>
<body>
    <header class="hi-hero">
        <h1>Health Info for Kids</h1>
        <p>Healthy habits make strong and happy kids!</p>

        <div class="hi-filter">
            <button class="hi-btn active" data-filter="all">All</button>
            <button class="hi-btn" data-filter="nutrition">Nutrition</button>
            <button class="hi-btn" data-filter="exercise">Exercise</button>
            <button class="hi-btn" data-filter="hygiene">Hygiene</button>
            <button class="hi-btn" data-filter="checkup">Checkup</button>
            <button class="hi-btn" data-filter="sleep">Sleep</button>
            <button class="hi-btn" data-filter="safety">Safety</button>
            <button class="hi-btn" data-filter="wellness">Wellness</button>
        </div>
    </header>
    

    <main class="hi-grid">
        <?php foreach ($healthActivities as $activity): ?>
            <div class="hi-card" data-type="<?= $activity['type'] ?>">
                <div class="hi-icon">🩺</div>
                <h3><?= $activity['title'] ?></h3>
                <p><?= $activity['desc'] ?></p>
                <button class="hi-open">Learn</button>
            </div>
        <?php endforeach; ?>
    </main>

    <div class="hi-back">
        <a href="index.php" class="hi-btn">Back to Home</a>
    </div>

    <script src="health-info.js"></script>
</body>
</html>