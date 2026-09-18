const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav nav');

if (menu) {
  menu.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    nav.style.display = open ? 'flex' : 'none';

    if (open) {
      nav.style.position = 'absolute';
      nav.style.top = '82px';
      nav.style.left = '0';
      nav.style.right = '0';
      nav.style.padding = '22px 7%';
      nav.style.background = '#090909';
      nav.style.flexDirection = 'column';
      nav.style.gap = '18px';
    }
  });
}

const progress = document.querySelector('.progress');

window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width =
    (max > 0 ? (window.scrollY / max) * 100 : 0) + '%';
}, { passive: true });

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal-section').forEach((section) => {
  observer.observe(section);
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    if (nav && nav.classList.contains('open')) {
      nav.classList.remove('open');
      nav.style.display = 'none';
    }
  });
});
