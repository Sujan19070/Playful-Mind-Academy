// Back button
document.getElementById('btnBack')?.addEventListener('click', () => {
  if (history.length > 1) {
    history.back();
  } else {
    // gentle feedback
    const btn = document.getElementById('btnBack');
    btn.style.transform = 'scale(0.98)';
    setTimeout(() => btn.style.transform = '', 120);
  }
});

// Panel helpers
const openPanel = (id) => {
  const panel = document.getElementById(id);
  if (!panel) return;
  panel.hidden = false;
  // focus first focusable
  const focusable = panel.querySelector('button, [href], input, select, textarea, [tabindex]');
  focusable?.focus();
};
const closePanel = (panel) => {
  panel.hidden = true;
};

// Bind cloud buttons
document.getElementById('btnHelp')?.addEventListener('click', () => openPanel('panelHelp'));
document.getElementById('btnContact')?.addEventListener('click', () => openPanel('panelContact'));
document.getElementById('btnAdvisor')?.addEventListener('click', () => openPanel('panelAdvisor'));

// Close buttons
document.querySelectorAll('[data-close]').forEach(btn => {
  btn.addEventListener('click', () => {
    const panel = btn.closest('.panel');
    panel && closePanel(panel);
  });
});

// Dismiss panels when clicking overlay
document.querySelectorAll('.panel').forEach(panel => {
  panel.addEventListener('click', (e) => {
    if (e.target === panel) closePanel(panel);
  });

  // Escape key support
  panel.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closePanel(panel);
  });
});

// Login sticker
const loginSticker = document.getElementById('loginSticker');
loginSticker?.addEventListener('click', () => openPanel('panelLogin'));
loginSticker?.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' || e.key === ' ') openPanel('panelLogin');
});

// Basketball bounce animation
(function animateBall(){
  const ball = document.getElementById('ball');
  if (!ball) return;

  let t = 0;
  let baseY = 510;
  let baseX = 360;
  let dir = 1;

  function frame() {
    t += 0.06;
    // vertical bounce using abs(sin)
    const yOffset = Math.abs(Math.sin(t)) * 28;
    // gentle horizontal wobble
    baseX += 0.4 * dir;
    if (baseX > 410 || baseX < 330) dir *= -1;

    ball.setAttribute('transform', `translate(${baseX},${baseY - yOffset})`);
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();

// Fun: wave kids’ arms a bit
(function waveArms(){
  const kidLeft = document.getElementById('kidLeft');
  const kidRight = document.getElementById('kidRight');
  let a = 0;

  function frame() {
    a += 0.02;
    // subtle up-down transform
    const lY = Math.sin(a) * 2;
    const rY = Math.cos(a * 1.3) * 2;
    kidLeft?.setAttribute('transform', `translate(220,${470 + lY})`);
    kidRight?.setAttribute('transform', `translate(920,${480 + rY})`);
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();