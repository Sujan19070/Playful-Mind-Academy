// Playful Mind Academy - Homepage JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // Animate progress bars on load
    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = width;
        }, 300);
    });

    // Add click handlers to learning cards
    const learningCards = document.querySelectorAll('.learning-card');
    learningCards.forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('start-btn')) {
                const btn = card.querySelector('.start-btn');
                if (btn) {
                    btn.style.transform = 'scale(1.1)';
                    setTimeout(() => {
                        btn.style.transform = 'scale(1)';
                    }, 200);
                }
            }
        });
    });

    // Action button handlers
    const actionBtns = document.querySelectorAll('.action-btn');
    actionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const action = btn.textContent.trim();
            // In a real app, this would navigate to the respective page
            alert(`Coming soon: ${action}`);
        });
    });

    // Start button handlers
    const startBtns = document.querySelectorAll('.start-btn');
    startBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const cardTitle = btn.closest('.learning-card').querySelector('h3').textContent;
            // In a real app, this would navigate to the learning module
            alert(`Starting ${cardTitle} learning path...`);
        });
    });
});
