(() => {
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const portal = document.querySelector('.cinematic-portal');
  const overlay = document.createElement('div');
  overlay.className = 'portal-travel';
  overlay.hidden = true;
  overlay.setAttribute('aria-hidden', 'true');
  const image = document.createElement('img');
  image.src = portal.querySelector('img').src;
  image.alt = '';
  const glow = document.createElement('div');
  glow.className = 'portal-travel-glow';
  overlay.append(image, glow);
  const status = document.createElement('p');
  status.className = 'portal-travel-status';
  status.setAttribute('role', 'status');
  document.body.append(overlay, status);
  let timer;
  let busy = false;
  let newTab;
  let trigger;
  function reset(cancel = false) {
    clearTimeout(timer);
    if (cancel && newTab && !newTab.closed) newTab.close();
    newTab = null;
    busy = false;
    overlay.hidden = true;
    overlay.classList.remove('is-travelling');
    document.body.classList.remove('portal-travelling');
    status.textContent = '';
    if (cancel) trigger?.focus();
  }
  document.querySelectorAll('.link-buttons a, .back').forEach(link => {
    link.addEventListener('click', event => {
      if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || motion.matches || !link.href || link.getAttribute('aria-disabled') === 'true') return;
      event.preventDefault();
      if (busy) return;
      busy = true;
      trigger = link;
      // Reserve a tab during the user gesture so the delayed navigation isn't blocked.
      if (link.target === '_blank') {
        newTab = window.open('about:blank', '_blank');
        if (newTab) newTab.opener = null;
      }
      const bounds = portal.getBoundingClientRect();
      const visible = bounds.top >= 0 && bounds.bottom <= innerHeight;
      const size = visible ? bounds.width : Math.min(innerWidth * .85, innerHeight * .7, 650);
      overlay.style.setProperty('--travel-size', `${size}px`);
      overlay.style.setProperty('--travel-x', `${visible ? bounds.left + bounds.width / 2 : innerWidth / 2}px`);
      overlay.style.setProperty('--travel-y', `${visible ? bounds.top + bounds.height / 2 : innerHeight / 2}px`);
      document.querySelector('.linktree').style.setProperty('--dive-origin', `${visible ? bounds.left + bounds.width / 2 : innerWidth / 2}px ${visible ? bounds.top + bounds.height / 2 + scrollY : innerHeight / 2 + scrollY}px`);
      overlay.hidden = false;
      document.body.classList.add('portal-travelling');
      status.textContent = 'Atravessando o portal… Pressione Esc para cancelar.';
      void overlay.offsetWidth;
      overlay.classList.add('is-travelling');
      timer = setTimeout(() => {
        const destination = link.href;
        if (newTab && !newTab.closed) {
          newTab.location.replace(destination);
          reset();
        } else {
          location.assign(destination);
          timer = setTimeout(() => reset(), 1500);
        }
      }, 1400);
    });
  });
  document.addEventListener('keydown', event => {
    if (!busy) return;
    if (event.key === 'Escape') { event.preventDefault(); reset(true); }
    if (event.key === 'Tab') event.preventDefault();
  });
  window.addEventListener('pageshow', () => reset());
})();
