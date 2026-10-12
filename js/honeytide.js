/* Optional motion controls. Navigation works without JavaScript. */
(() => {
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  document.querySelectorAll('video').forEach(video => {
    const button = video.closest('header')?.querySelector('.motion-control');
    const sync = () => {
      if (button) button.textContent = video.paused ? 'Play background video' : 'Pause background video';
    };
    const respectPreference = () => { if (preference.matches) video.pause(); sync(); };
    video.addEventListener('play', sync);
    video.addEventListener('pause', sync);
    if (button) {
      button.hidden = false;
      button.addEventListener('click', async () => {
        if (!video.paused) video.pause();
        else {
          try { await video.play(); }
          catch { button.textContent = 'Video unavailable — try again'; return; }
        }
        sync();
      });
    }
    video.addEventListener('loadeddata', respectPreference, { once: true });
    preference.addEventListener('change', respectPreference);
    respectPreference();
  });
})();

/* Scroll progress and one-time section arrivals; content never starts hidden. */
(() => {
  const nav = document.querySelector('.primary-nav');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let pending = false;
  const update = () => {
    const distance = document.documentElement.scrollHeight - innerHeight;
    const progress = distance > 0 ? Math.min(1, Math.max(0, scrollY / distance)) : 0;
    nav?.style.setProperty('--reading-progress', progress);
    pending = false;
  };
  const requestUpdate = () => {
    if (!pending) { pending = true; requestAnimationFrame(update); }
  };
  addEventListener('scroll', requestUpdate, { passive: true });
  addEventListener('resize', requestUpdate);
  addEventListener('load', requestUpdate);
  if (nav && 'ResizeObserver' in window) new ResizeObserver(() => {
    document.documentElement.style.setProperty('--nav-height', nav.offsetHeight + 'px');
    requestUpdate();
  }).observe(nav);
  update();
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        if (!reduced.matches) entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.06 });
    document.querySelectorAll('main > section').forEach(section => observer.observe(section));
  }
})();
