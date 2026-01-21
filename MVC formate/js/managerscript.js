// Playful Academy Manager Console - JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initNavTabs();
    initCardLinks();
    initBackButton();
    initSubscribeButton();
    initProfileLinks();
    addCardAnimations();
});

// Card Links - Navigate to pages
function initCardLinks() {
    const cards = document.querySelectorAll('.card[data-link]');
    
    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't navigate if clicking on the Open button (it has its own link)
            if (e.target.classList.contains('open-btn')) {
                return;
            }
            
            const link = this.getAttribute('data-link');
            if (link) {
                window.location.href = link;
            }
        });
    });
}

// Navigation Tabs Functionality
function initNavTabs() {
    const navTabs = document.querySelectorAll('.nav-tab');
    
    navTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            navTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Get the tab data attribute
            const tabName = this.getAttribute('data-tab');
            
            // Show notification
            showNotification(`Switched to ${this.textContent} view`);
            
            // Highlight corresponding card
            highlightCard(tabName);
        });
    });
}

// Highlight corresponding card when tab is clicked
function highlightCard(tabName) {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.style.transform = '';
        card.style.boxShadow = '';
    });
    
    // Map tab names to card indices
    const tabToCardIndex = {
        'cohorts': 0,
        'assignments': 1,
        'progress': 2,
        'policies': 3
    };
    
    const cardIndex = tabToCardIndex[tabName];
    if (cardIndex !== undefined && cards[cardIndex]) {
        cards[cardIndex].style.transform = 'translateY(-5px) scale(1.02)';
        cards[cardIndex].style.boxShadow = '0 15px 40px rgba(74, 124, 78, 0.2)';
        
        // Reset after animation
        setTimeout(() => {
            cards[cardIndex].style.transform = '';
            cards[cardIndex].style.boxShadow = '';
        }, 1500);
    }
}

// Open Buttons Functionality
function initOpenButtons() {
    const openButtons = document.querySelectorAll('.open-btn');
    
    openButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.card');
            const cardTitle = card.querySelector('.card-title').textContent;
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Show modal or notification
            showModal(cardTitle);
        });
    });
}

// Back Button Functionality
function initBackButton() {
    const backBtn = document.querySelector('.back-btn');
    
    if (backBtn) {
        backBtn.addEventListener('click', function() {
            showNotification('Navigating back...');
            
            // Add animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    }
}

// Subscribe Button Functionality
function initSubscribeButton() {
    const subscribeBtn = document.querySelector('.subscribe-btn');
    
    if (subscribeBtn) {
        subscribeBtn.addEventListener('click', function() {
            this.textContent = 'Subscribed!';
            this.style.background = '#2d5a30';
            
            showNotification('Successfully subscribed to Playful Academy!');
            
            // Reset after 3 seconds
            setTimeout(() => {
                this.textContent = 'Subscribe';
                this.style.background = '';
            }, 3000);
        });
    }
}

// Profile Links Functionality
function initProfileLinks() {
    const profileLinks = document.querySelectorAll('.profile-link');
    
    profileLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active state from all links
            profileLinks.forEach(l => l.style.color = '');
            
            // Add active state to clicked link
            this.style.color = '#4a7c4e';
            this.style.fontWeight = '600';
            
            showNotification(`Viewing ${this.textContent}`);
        });
    });
}

// Add hover animations to cards
function addCardAnimations() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const visual = this.querySelector('.card-visual');
            if (visual) {
                visual.style.transform = 'scale(1.05)';
                visual.style.transition = 'transform 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const visual = this.querySelector('.card-visual');
            if (visual) {
                visual.style.transform = '';
            }
        });
    });
}

// Show notification toast
function showNotification(message) {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        background: '#4a7c4e',
        color: 'white',
        padding: '15px 25px',
        borderRadius: '10px',
        boxShadow: '0 5px 20px rgba(0, 0, 0, 0.2)',
        zIndex: '1000',
        animation: 'slideIn 0.3s ease',
        fontWeight: '500'
    });
    
    // Add animation keyframes
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Show modal for card details
function showModal(title) {
    // Remove existing modal
    const existingModal = document.querySelector('.modal-overlay');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Create modal overlay
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    
    // Modal content based on title
    const modalContent = getModalContent(title);
    
    overlay.innerHTML = `
        <div class="modal">
            <div class="modal-header">
                <h2>${title}</h2>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                ${modalContent}
            </div>
            <div class="modal-footer">
                <button class="modal-btn primary">Continue</button>
                <button class="modal-btn secondary">Cancel</button>
            </div>
        </div>
    `;
    
    // Style the modal
    const style = document.createElement('style');
    style.textContent = `
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1001;
            animation: fadeIn 0.3s ease;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        .modal {
            background: white;
            border-radius: 20px;
            width: 90%;
            max-width: 500px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            animation: scaleIn 0.3s ease;
        }
        
        @keyframes scaleIn {
            from { transform: scale(0.9); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }
        
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 25px;
            border-bottom: 1px solid #eee;
        }
        
        .modal-header h2 {
            color: #333;
            font-size: 20px;
        }
        
        .modal-close {
            background: none;
            border: none;
            font-size: 28px;
            color: #999;
            cursor: pointer;
            transition: color 0.3s ease;
        }
        
        .modal-close:hover {
            color: #333;
        }
        
        .modal-body {
            padding: 25px;
            color: #666;
            line-height: 1.6;
        }
        
        .modal-footer {
            display: flex;
            gap: 10px;
            padding: 20px 25px;
            border-top: 1px solid #eee;
            justify-content: flex-end;
        }
        
        .modal-btn {
            padding: 10px 25px;
            border-radius: 10px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .modal-btn.primary {
            background: #4a7c4e;
            color: white;
            border: none;
        }
        
        .modal-btn.primary:hover {
            background: #3d6840;
        }
        
        .modal-btn.secondary {
            background: white;
            color: #666;
            border: 1px solid #ddd;
        }
        
        .modal-btn.secondary:hover {
            background: #f5f5f5;
        }
    `;
    
    if (!document.querySelector('#modal-styles')) {
        style.id = 'modal-styles';
        document.head.appendChild(style);
    }
    
    document.body.appendChild(overlay);
    
    // Close modal functionality
    const closeBtn = overlay.querySelector('.modal-close');
    const cancelBtn = overlay.querySelector('.modal-btn.secondary');
    const continueBtn = overlay.querySelector('.modal-btn.primary');
    
    const closeModal = () => {
        overlay.style.animation = 'fadeIn 0.3s ease reverse';
        setTimeout(() => overlay.remove(), 300);
    };
    
    closeBtn.addEventListener('click', closeModal);
    cancelBtn.addEventListener('click', closeModal);
    continueBtn.addEventListener('click', () => {
        showNotification(`Opening ${title}...`);
        closeModal();
    });
    
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeModal();
        }
    });
}

// Get modal content based on card title
function getModalContent(title) {
    const content = {
        'Cohorts': `
            <p>Manage your cohorts and classes effectively. Create new groups, assign students, and track their progress.</p>
            <ul style="margin-top: 15px; padding-left: 20px;">
                <li>Create new cohorts</li>
                <li>Manage existing groups</li>
                <li>Assign students to classes</li>
            </ul>
        `,
        'Assignments': `
            <p>Set up resources and goals for your cohorts. Track completion rates and manage deadlines.</p>
            <ul style="margin-top: 15px; padding-left: 20px;">
                <li>Create new assignments</li>
                <li>Set due dates and goals</li>
                <li>Track submission status</li>
            </ul>
        `,
        'Cohort Progress': `
            <p>View aggregated metrics and trends for all your cohorts. Analyze performance data and identify areas for improvement.</p>
            <ul style="margin-top: 15px; padding-left: 20px;">
                <li>View progress charts</li>
                <li>Analyze trends</li>
                <li>Export reports</li>
            </ul>
        `,
        'Cohort Policies': `
            <p>Set screen time limits and content restrictions for your cohorts. Ensure a safe learning environment.</p>
            <ul style="margin-top: 15px; padding-left: 20px;">
                <li>Set screen time limits</li>
                <li>Configure content filters</li>
                <li>Manage app permissions</li>
            </ul>
        `,
        'Schedule': `
            <p>Plan events and manage your Thursday planner. Keep track of important dates and activities.</p>
            <ul style="margin-top: 15px; padding-left: 20px;">
                <li>View calendar</li>
                <li>Add new events</li>
                <li>Set reminders</li>
            </ul>
        `,
        'Help & Escalations': `
            <p>Access support tickets and FAQs. Get help when you need it and escalate issues as necessary.</p>
            <ul style="margin-top: 15px; padding-left: 20px;">
                <li>Browse FAQs</li>
                <li>Submit support tickets</li>
                <li>Track escalations</li>
            </ul>
        `,
        'Approvals': `
            <p>Review and manage requests from parents and students. Approve or deny pending requests.</p>
            <ul style="margin-top: 15px; padding-left: 20px;">
                <li>View pending requests</li>
                <li>Approve/deny requests</li>
                <li>Send notifications</li>
            </ul>
        `,
        'Reports': `
            <p>Download cohort summaries and detailed reports. Export data for analysis and record-keeping.</p>
            <ul style="margin-top: 15px; padding-left: 20px;">
                <li>Generate reports</li>
                <li>Download summaries</li>
                <li>Schedule automated reports</li>
            </ul>
        `
    };
    
    return content[title] || '<p>More information coming soon...</p>';
}

// Update stats dynamically (for demonstration)
function updateStats() {
    const statValues = document.querySelectorAll('.stat-value');
    
    // Simulate real-time updates
    setInterval(() => {
        // Random chance to update stats
        if (Math.random() > 0.7) {
            const activeCount = Math.floor(Math.random() * 3) + 3;
            const onTrackCount = Math.floor(Math.random() * activeCount);
            const needsAttention = activeCount - onTrackCount;
            
            if (statValues[0]) statValues[0].textContent = activeCount;
            if (statValues[1]) statValues[1].textContent = onTrackCount;
            if (statValues[2]) statValues[2].textContent = needsAttention;
        }
    }, 10000);
}

// Initialize stats updates
updateStats();
