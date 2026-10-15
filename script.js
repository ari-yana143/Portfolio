const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const themeToggle = document.querySelector('#themeToggle');

const setTheme = (theme) => {
  document.documentElement.dataset.theme = theme;
  if (themeToggle) {
    const isDark = theme === 'dark';
    const nextMode = isDark ? 'light' : 'dark';
    themeToggle.setAttribute('aria-label', `Switch to ${nextMode} mode`);
  }
};

if (themeToggle) {
  let savedTheme;
  try {
    savedTheme = localStorage.getItem('arriane-portfolio-theme');
  } catch (error) {
    console.warn('Could not read the saved theme preference.', error);
  }

  setTheme(savedTheme === 'dark' ? 'dark' : 'light');
  themeToggle.addEventListener('click', () => {
    const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    try {
      localStorage.setItem('arriane-portfolio-theme', nextTheme);
    } catch (error) {
      console.warn('Could not save the theme preference.', error);
    }
  });
}

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const revealItems = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach((item) => revealObserver.observe(item));

const yearNode = document.getElementById('year');
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.toggle('is-active', btn === button));

    projectCards.forEach((card) => {
      const shouldShow = selectedFilter === 'all' || card.dataset.category === selectedFilter;
      card.classList.toggle('is-hidden', !shouldShow);
    });
  });
});
