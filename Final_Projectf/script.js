document.addEventListener('DOMContentLoaded', () => {
    
    // Back Button Logic
    const backBtn = document.getElementById('btn-back');
    if(backBtn) {
        backBtn.addEventListener('click', () => {
            // Using history back to simulate browser back button
            console.log("Navigating back...");
            // window.history.back(); 
            alert("Go Back Clicked!");
        });
    }

    // Subscribe Button Logic
    const subBtn = document.getElementById('btn-sub');
    if(subBtn) {
        subBtn.addEventListener('click', () => {
            // Redirect to subscribe page
            console.log("Subscribe clicked...");
            alert("Open Subscription Modal");
        });
    }

    // Optional: Add hover animation class to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = "scale(1.05)";
            card.style.transition = "transform 0.2s ease";
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = "scale(1)";
        });
    });
});