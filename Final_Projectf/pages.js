// Playful Academy - Pages JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initCreateButton();
    initContentTabs();
    initActionButtons();
    initFAQs();
    initToggles();
    initColorButtons();
    initCheckboxes();
    initTimeFilter();
    initViewToggle();
    initCalendarNav();
});

// Create Button - Open Modal
function initCreateButton() {
    const createBtn = document.querySelector('.create-btn');
    const modal = document.getElementById('createModal');
    
    if (createBtn && modal) {
        createBtn.addEventListener('click', function() {
            openModal('createModal');
        });
    }
}

// Open Modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Close Modal
function closeModal() {
    const modals = document.querySelectorAll('.modal-overlay');
    modals.forEach(modal => {
        modal.classList.remove('active');
    });
    document.body.style.overflow = '';
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-overlay')) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Content Tabs
function initContentTabs() {
    const tabs = document.querySelectorAll('.content-tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active to clicked tab
            this.classList.add('active');
            
            // Get tab data
            const tabName = this.getAttribute('data-tab');
            
            // Show notification
            showNotification(`Viewing ${this.textContent.trim()} items`);
            
            // Filter items based on tab (demo functionality)
            filterItems(tabName);
        });
    });
}

// Filter items based on tab selection
function filterItems(tabName) {
    // This is a demo - in real app, this would filter the actual data
    const items = document.querySelectorAll('.cohort-item, .assignment-item, .approval-item');
    
    items.forEach(item => {
        item.style.display = 'flex';
        
        // Add animation
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        
        setTimeout(() => {
            item.style.transition = 'all 0.3s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 100);
    });
}

// Action Buttons
function initActionButtons() {
    // View buttons
    document.querySelectorAll('.action-btn.view').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const item = this.closest('.cohort-item, .assignment-item, .policy-item, .ticket-item, .approval-item, .report-item');
            const title = item.querySelector('h3, h4').textContent;
            showNotification(`Viewing: ${title}`);
        });
    });
    
    // Edit buttons
    document.querySelectorAll('.action-btn.edit').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const item = this.closest('.cohort-item, .assignment-item, .policy-item, .scheduled-item');
            const title = item.querySelector('h3, h4').textContent;
            showNotification(`Editing: ${title}`);
        });
    });
    
    // Approve buttons
    document.querySelectorAll('.action-btn.approve').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const item = this.closest('.approval-item');
            if (item) {
                item.style.transition = 'all 0.3s ease';
                item.style.background = '#e8f5e0';
                
                const status = item.querySelector('.approval-status');
                if (status) {
                    status.textContent = 'Approved';
                    status.className = 'approval-status approved';
                }
                
                showNotification('Request approved successfully!');
                
                // Disable buttons
                const actions = item.querySelector('.approval-actions');
                if (actions) {
                    actions.innerHTML = '<button class="action-btn view">View</button>';
                }
            }
        });
    });
    
    // Deny buttons
    document.querySelectorAll('.action-btn.deny').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const item = this.closest('.approval-item');
            if (item) {
                item.style.transition = 'all 0.3s ease';
                item.style.background = '#fde8e8';
                
                const status = item.querySelector('.approval-status');
                if (status) {
                    status.textContent = 'Denied';
                    status.className = 'approval-status denied';
                }
                
                showNotification('Request denied');
                
                // Disable buttons
                const actions = item.querySelector('.approval-actions');
                if (actions) {
                    actions.innerHTML = '<button class="action-btn view">View</button>';
                }
            }
        });
    });
    
    // Download buttons
    document.querySelectorAll('.action-btn.download').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const item = this.closest('.report-item');
            const title = item.querySelector('h4').textContent;
            
            // Simulate download
            this.textContent = 'Downloading...';
            this.disabled = true;
            
            setTimeout(() => {
                this.textContent = '⬇ Download';
                this.disabled = false;
                showNotification(`Downloaded: ${title}`);
            }, 1500);
        });
    });
    
    // Share buttons
    document.querySelectorAll('.action-btn.share').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            showNotification('Share link copied to clipboard!');
        });
    });
    
    // Assign buttons
    document.querySelectorAll('.action-btn.assign').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            showNotification('Opening assignment dialog...');
        });
    });
    
    // Review buttons
    document.querySelectorAll('.action-btn.review').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            showNotification('Opening review panel...');
        });
    });
    
    // Report download buttons
    document.querySelectorAll('.report-download-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const card = this.closest('.report-card');
            const title = card.querySelector('h3').textContent;
            
            this.textContent = 'Generating...';
            this.disabled = true;
            
            setTimeout(() => {
                this.textContent = 'Generate';
                this.disabled = false;
                showNotification(`${title} generated successfully!`);
            }, 2000);
        });
    });
}

// FAQs Toggle
function initFAQs() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const toggle = this.querySelector('.faq-toggle');
            
            // Close all other FAQs
            document.querySelectorAll('.faq-answer').forEach(a => {
                if (a !== answer) {
                    a.classList.remove('open');
                    a.previousElementSibling.querySelector('.faq-toggle').textContent = '+';
                }
            });
            
            // Toggle current FAQ
            answer.classList.toggle('open');
            toggle.textContent = answer.classList.contains('open') ? '−' : '+';
        });
    });
    
    // FAQ category buttons
    const faqCategories = document.querySelectorAll('.faq-category');
    faqCategories.forEach(cat => {
        cat.addEventListener('click', function() {
            faqCategories.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            showNotification(`Showing ${this.textContent} FAQs`);
        });
    });
}

// Global function for FAQ toggle (used in onclick)
function toggleFaq(element) {
    const answer = element.nextElementSibling;
    const toggle = element.querySelector('.faq-toggle');
    
    answer.classList.toggle('open');
    toggle.textContent = answer.classList.contains('open') ? '−' : '+';
}

// Toggle Switches
function initToggles() {
    const toggles = document.querySelectorAll('.toggle input');
    
    toggles.forEach(toggle => {
        toggle.addEventListener('change', function() {
            const policyItem = this.closest('.policy-item, .scheduled-item');
            if (policyItem) {
                const title = policyItem.querySelector('h3, h4').textContent;
                const status = this.checked ? 'enabled' : 'disabled';
                showNotification(`${title} ${status}`);
            }
        });
    });
}

// Color Buttons
function initColorButtons() {
    const colorBtns = document.querySelectorAll('.color-btn');
    
    colorBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            colorBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Checkboxes
function initCheckboxes() {
    // Bulk select for approvals
    const bulkApprove = document.querySelector('.bulk-btn.approve');
    const bulkDeny = document.querySelector('.bulk-btn.deny');
    
    if (bulkApprove) {
        bulkApprove.addEventListener('click', function() {
            const checked = document.querySelectorAll('.approval-checkbox input:checked');
            if (checked.length === 0) {
                showNotification('Please select items first');
                return;
            }
            
            checked.forEach(checkbox => {
                const item = checkbox.closest('.approval-item');
                if (item && !item.classList.contains('approved') && !item.classList.contains('denied')) {
                    item.style.background = '#e8f5e0';
                    const status = item.querySelector('.approval-status');
                    if (status) {
                        status.textContent = 'Approved';
                        status.className = 'approval-status approved';
                    }
                }
            });
            
            showNotification(`${checked.length} requests approved`);
        });
    }
    
    if (bulkDeny) {
        bulkDeny.addEventListener('click', function() {
            const checked = document.querySelectorAll('.approval-checkbox input:checked');
            if (checked.length === 0) {
                showNotification('Please select items first');
                return;
            }
            
            checked.forEach(checkbox => {
                const item = checkbox.closest('.approval-item');
                if (item && !item.classList.contains('approved') && !item.classList.contains('denied')) {
                    item.style.background = '#fde8e8';
                    const status = item.querySelector('.approval-status');
                    if (status) {
                        status.textContent = 'Denied';
                        status.className = 'approval-status denied';
                    }
                }
            });
            
            showNotification(`${checked.length} requests denied`);
        });
    }
}

// Time Filter
function initTimeFilter() {
    const timeBtns = document.querySelectorAll('.time-btn');
    
    timeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            timeBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            showNotification(`Showing data for ${this.textContent}`);
        });
    });
}

// View Toggle (Calendar)
function initViewToggle() {
    const viewBtns = document.querySelectorAll('.view-btn');
    
    viewBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            viewBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            showNotification(`Switched to ${this.textContent} view`);
        });
    });
}

// Calendar Navigation
function initCalendarNav() {
    const navArrows = document.querySelectorAll('.nav-arrow');
    const currentMonth = document.querySelector('.current-month');
    
    if (navArrows.length && currentMonth) {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                       'July', 'August', 'September', 'October', 'November', 'December'];
        let currentMonthIndex = 0; // January
        let currentYear = 2026;
        
        navArrows.forEach((arrow, index) => {
            arrow.addEventListener('click', function() {
                if (index === 0) {
                    // Previous
                    currentMonthIndex--;
                    if (currentMonthIndex < 0) {
                        currentMonthIndex = 11;
                        currentYear--;
                    }
                } else {
                    // Next
                    currentMonthIndex++;
                    if (currentMonthIndex > 11) {
                        currentMonthIndex = 0;
                        currentYear++;
                    }
                }
                
                currentMonth.textContent = `${months[currentMonthIndex]} ${currentYear}`;
            });
        });
    }
    
    // Calendar day click
    const calendarDays = document.querySelectorAll('.calendar-day');
    calendarDays.forEach(day => {
        day.addEventListener('click', function() {
            const dayNumber = this.querySelector('.day-number');
            if (dayNumber) {
                showNotification(`Selected: January ${dayNumber.textContent}, 2026`);
            }
        });
    });
}

// Search functionality
const searchInputs = document.querySelectorAll('.search-input');
searchInputs.forEach(input => {
    input.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const items = document.querySelectorAll('.cohort-item, .assignment-item, .policy-item, .ticket-item, .approval-item, .report-item, .faq-item');
        
        items.forEach(item => {
            const text = item.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Filter selects
const filterSelects = document.querySelectorAll('.filter-select');
filterSelects.forEach(select => {
    select.addEventListener('change', function() {
        showNotification(`Filter applied: ${this.value}`);
    });
});

// Contact buttons
const contactBtns = document.querySelectorAll('.contact-btn');
contactBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        if (this.classList.contains('email')) {
            showNotification('Opening email client...');
        } else if (this.classList.contains('chat')) {
            showNotification('Starting live chat...');
        } else if (this.classList.contains('phone')) {
            showNotification('Calling support: 1-800-PLAYFUL');
        }
    });
});

// Builder actions
const builderPreview = document.querySelector('.builder-actions .btn-secondary');
const builderGenerate = document.querySelector('.builder-actions .btn-primary');

if (builderPreview) {
    builderPreview.addEventListener('click', function() {
        showNotification('Generating preview...');
    });
}

if (builderGenerate) {
    builderGenerate.addEventListener('click', function() {
        this.textContent = 'Generating...';
        this.disabled = true;
        
        setTimeout(() => {
            this.textContent = 'Generate Report';
            this.disabled = false;
            showNotification('Report generated successfully!');
        }, 2000);
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

// Add hover effects to items
const listItems = document.querySelectorAll('.cohort-item, .assignment-item, .policy-item, .ticket-item, .approval-item, .report-item, .event-item');
listItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.cursor = 'pointer';
    });
});

// Policy category click
const policyCategories = document.querySelectorAll('.policy-category');
policyCategories.forEach(cat => {
    cat.addEventListener('click', function() {
        const title = this.querySelector('h3').textContent;
        showNotification(`Viewing ${title} policies`);
    });
});

// Checklist items
const checklistItems = document.querySelectorAll('.checklist-item input');
checklistItems.forEach(item => {
    item.addEventListener('change', function() {
        const label = this.nextElementSibling.textContent;
        const status = this.checked ? 'completed' : 'uncompleted';
        showNotification(`Task ${status}: ${label}`);
    });
});

// Subscribe button
const subscribeBtn = document.querySelector('.subscribe-btn');
if (subscribeBtn) {
    subscribeBtn.addEventListener('click', function() {
        this.textContent = 'Subscribed!';
        this.style.background = '#2d5a30';
        showNotification('Successfully subscribed to Playful Academy!');
        
        setTimeout(() => {
            this.textContent = 'Subscribe';
            this.style.background = '';
        }, 3000);
    });
}
