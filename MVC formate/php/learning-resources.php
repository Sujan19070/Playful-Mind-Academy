<?php
$resources = [
    ["title" => "ABC Phonics", "type" => "language", "desc" => "Learn letter sounds and pronunciation."],
    ["title" => "Math Basics", "type" => "math", "desc" => "Counting, addition, and subtraction."],
    ["title" => "Science Fun", "type" => "science", "desc" => "Simple experiments and facts."],
    ["title" => "Story Time", "type" => "reading", "desc" => "Short stories and reading practice."],
    ["title" => "Color & Shape", "type" => "art", "desc" => "Colors, shapes, and drawing skills."],
    ["title" => "Brain Boost", "type" => "logic", "desc" => "Puzzles, memory, and critical thinking."],
    ["title" => "Music & Rhythm", "type" => "music", "desc" => "Songs, beats, and fun sounds."],
    ["title" => "Geography Mini", "type" => "social", "desc" => "Maps, places, and cultures."],
];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Learning Resources</title>
    <link rel="stylesheet" href="learning-resources.css"/>
</head>
<body>
    <header class="lr-hero">
        <div class="lr-header-bar">
            <a class="lr-back" href="index.php">⟵ Back</a>
        </div>
        <h1>Learning Resources for Kids</h1>
        <p>Explore fun learning activities and grow every day!</p>

        <div class="lr-filter">
            <button class="lr-btn active" data-filter="all">All</button>
            <button class="lr-btn" data-filter="language">Language</button>
            <button class="lr-btn" data-filter="math">Math</button>
            <button class="lr-btn" data-filter="science">Science</button>
            <button class="lr-btn" data-filter="reading">Reading</button>
            <button class="lr-btn" data-filter="art">Art</button>
            <button class="lr-btn" data-filter="logic">Logic</button>
            <button class="lr-btn" data-filter="music">Music</button>
            <button class="lr-btn" data-filter="social">Social</button>
        </div>
    </header>

    <main class="lr-grid">
        <?php foreach ($resources as $resource): ?>
            <div class="lr-card" data-type="<?= $resource['type'] ?>">
                <div class="lr-icon">📘</div>
                <h3><?= $resource['title'] ?></h3>
                <p><?= $resource['desc'] ?></p>
                <button class="lr-open">Open</button>
            </div>
        <?php endforeach; ?>
    </main>

    <script src="learning-resources.js"></script>
</body>
</html>