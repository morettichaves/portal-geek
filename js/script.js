const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
function closeMenu() {
  nav?.classList.remove('open');
  toggle?.classList.remove('active');
  toggle?.setAttribute('aria-expanded', 'false');
  toggle?.setAttribute('aria-label', 'Abrir menu');
}
toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.classList.toggle('active', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
});
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav?.classList.contains('open')) { closeMenu(); toggle.focus(); }
});
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('show'); observer.unobserve(entry.target); }
  }), { threshold: .08 });
  document.querySelectorAll('.section, .reveal').forEach(el => { el.classList.add('will-reveal'); observer.observe(el); });
}
document.addEventListener('mousemove', event => {
  const glow = document.querySelector('.cursor-glow');
  if (glow && !reducedMotion.matches && matchMedia('(pointer: fine)').matches) {
    glow.style.left = event.clientX + 'px'; glow.style.top = event.clientY + 'px';
  }
});
