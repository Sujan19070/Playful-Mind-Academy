document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".open-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const page = btn.dataset.page;
            window.location.href = page + ".html";
        });
    });
});
