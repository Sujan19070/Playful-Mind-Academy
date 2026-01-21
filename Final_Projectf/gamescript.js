document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;
        document.querySelectorAll(".game-card").forEach(card => {
            if (filter === "all" || card.dataset.type === filter) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});
