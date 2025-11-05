const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const yearSpan = document.getElementById('year');

yearSpan.textContent = new Date().getFullYear();

navToggle?.addEventListener('click', () => {
  navLinks?.classList.toggle('open');
  navToggle.setAttribute(
    'aria-expanded',
    navLinks?.classList.contains('open') ? 'true' : 'false'
  );
});

document.addEventListener('click', (event) => {
  if (!navLinks || !navToggle) return;

  const isClickInsideNav = navLinks.contains(event.target);
  const isToggle = navToggle.contains(event.target);

  if (!isClickInsideNav && !isToggle) {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

const anchors = document.querySelectorAll('a[href^="#"]');
anchors.forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const targetId = anchor.getAttribute('href')?.replace('#', '');
    if (!targetId) return;

    const section = document.getElementById(targetId);
    if (!section) return;

    event.preventDefault();
    section.scrollIntoView({ behavior: 'smooth' });
    navLinks?.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});
