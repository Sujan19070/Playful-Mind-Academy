const form = document.getElementById('login-form');
const banner = document.getElementById('status-banner');
const statusText = document.getElementById('status-text');
const dismissBtn = document.getElementById('banner-dismiss');

function showBanner(message, isError = false) {
    statusText.textContent = message;
    banner.hidden = false;
    banner.dataset.state = isError ? 'error' : 'success';
    banner.querySelector('.banner-dot').style.background = isError ? '#ef4444' : '#22c55e';
}

function hideBanner() {
    banner.hidden = true;
    banner.dataset.state = 'hidden';
}

form.addEventListener('submit', event => {
    event.preventDefault();

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const email = form.querySelector('#email').value;
    const password = form.querySelector('#password').value;

    if (password.length < 8) {
        showBanner('Password should be at least 8 characters.', true);
        return;
    }

    showBanner(`Welcome back, ${email}! Loading your dashboard...`);
    form.reset();
});

form.addEventListener('reset', () => hideBanner());

document.querySelectorAll('[data-demo="reset"]')
    .forEach(link => link.addEventListener('click', event => {
        event.preventDefault();
        showBanner('Password reset flow coming soon. Check your email for updates.', false);
    }));

dismissBtn.addEventListener('click', hideBanner);

document.body.addEventListener('keydown', event => {
    if (event.key === 'Escape' && banner.dataset.state === 'success') {
        hideBanner();
    }
});
