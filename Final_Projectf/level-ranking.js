document.querySelectorAll(".lr-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".lr-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;
        document.querySelectorAll(".lr-card").forEach(card => {
            if (filter === "all" || card.dataset.level === filter) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});