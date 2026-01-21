document.querySelectorAll(".hi-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".hi-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;
        document.querySelectorAll(".hi-card").forEach(card => {
            card.style.display =
                filter === "all" || card.dataset.type === filter ? "block" : "none";
        });
    });
});