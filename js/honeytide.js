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
