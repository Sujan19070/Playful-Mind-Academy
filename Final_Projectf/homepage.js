// homepage.js

document.addEventListener("DOMContentLoaded", function () {

    // Back button
    const backBtn = document.querySelector(".back-btn");
    if (backBtn) {
        backBtn.addEventListener("click", function () {
            if (window.history.length > 1) {
                window.history.back();
            } else {
                window.location.href = "homepage.html";
            }
        });
    }

    // Manager button (extra safe, though href already works)
    const managerBtn = document.getElementById("managerBtn");
    if (managerBtn) {
        managerBtn.addEventListener("click", function () {
            window.location.href = "manager.html";
        });
    }

});
