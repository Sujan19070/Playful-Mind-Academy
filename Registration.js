const form = document.getElementById('registration-form');
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

function validatePassword(value) {
    const hasLength = value && value.length >= 8;
    const hasNumber = /\d/.test(value);
    const hasSymbol = /[^A-Za-z0-9]/.test(value);
    return hasLength && hasNumber && hasSymbol;
}

form.addEventListener('submit', event => {
    event.preventDefault();

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const password = form.querySelector('#password').value;
    if (!validatePassword(password)) {
        showBanner('Password needs 8+ characters, a number, and a symbol.', true);
        return;
    }

    const formData = new FormData(form);
    const name = formData.get('full-name') || 'there';
    showBanner(`Welcome, ${name}! Your registration was received. Check your email for next steps.`);
    form.reset();
});

form.addEventListener('reset', () => hideBanner());

dismissBtn.addEventListener('click', hideBanner);

document.querySelectorAll('[data-demo="signin"]')
    .forEach(btn => btn.addEventListener('click', () => showBanner('Sign-in coming soon. Use registration to get access.', true)));

document.querySelectorAll('[data-demo="advisor"]')
    .forEach(btn => btn.addEventListener('click', () => showBanner('We will connect you to an advisor shortly.', false)));

document.body.addEventListener('keydown', event => {
    if (event.key === 'Escape' && banner.dataset.state === 'success') {
        hideBanner();
    }
});
