const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle?.addEventListener('click', () => { nav.classList.toggle('open'); toggle.classList.toggle('active'); toggle.setAttribute('aria-expanded', nav.classList.contains('open')); });
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('show'); }), { threshold: .12 });
document.querySelectorAll('.section, .reveal').forEach(el => observer.observe(el));
document.addEventListener('mousemove', (e) => { const glow = document.querySelector('.cursor-glow'); if (glow) { glow.style.left = e.clientX + 'px'; glow.style.top = e.clientY + 'px'; } });
document.querySelectorAll('.product-card button').forEach(button => button.addEventListener('click', () => { const title = button.closest('.product-card').querySelector('h3').textContent; window.open(`https://wa.me/5521999999999?text=${encodeURIComponent('Olá! Quero saber mais sobre: ' + title)}`, '_blank'); }));
