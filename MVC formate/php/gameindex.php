<?php
$games = [
    ["title" => "Puzzle Games", "type" => "puzzle", "desc" => "Solve jigsaws, shape matching, and logic puzzles."],
    ["title" => "Math Games", "type" => "maths", "desc" => "Addition, subtraction, counting and number puzzles."],
    ["title" => "Fun Games", "type" => "fun", "desc" => "Mini games, funny challenges, and surprises."],
    ["title" => "Memory Games", "type" => "memory", "desc" => "Flip cards and build memory skills."],
    ["title" => "Coloring Games", "type" => "coloring", "desc" => "Paint and color with cute pictures."],
    ["title" => "Word Games", "type" => "word", "desc" => "Spelling, letters, and word matching."],
];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Kids Games</title>
    <link rel="stylesheet" href="gamestyle.css"/>
</head>
<body>
    <header class="hero">
        <h1>Kids Games Zone</h1>
        <p>Choose a game type and start learning with fun!</p>
        <div class="filter-bar">
            <button class="filter-btn active" data-filter="all">All</button>
            <button class="filter-btn" data-filter="puzzle">Puzzle</button>
            <button class="filter-btn" data-filter="maths">Maths</button>
            <button class="filter-btn" data-filter="fun">Fun</button>
            <button class="filter-btn" data-filter="memory">Memory</button>
            <button class="filter-btn" data-filter="coloring">Coloring</button>
            <button class="filter-btn" data-filter="word">Word</button>
        </div>
    </header>

    <main class="games-grid">
        <?php foreach ($games as $game): ?>
            <div class="game-card" data-type="<?= $game['type'] ?>">
                <div class="game-icon">🎮</div>
                <h3><?= $game['title'] ?></h3>
                <p><?= $game['desc'] ?></p>
                <button class="play-btn">Play Now</button>
            </div>
        <?php endforeach; ?>
    </main>

    <script src="gamescript.js"></script>
    <div class="back-link" style="text-align:center; margin:20px 0;">
        <a href="index.php" style="text-decoration:none; color:#007bff; font-weight:bold;">&larr; Back to Home</a>
    </div>
</body>
</html>
