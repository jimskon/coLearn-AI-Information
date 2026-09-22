document.querySelectorAll('.mode-trigger').forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.closest('.mode');
    const detail = item.querySelector('.mode-detail');
    const isOpen = button.getAttribute('aria-expanded') === 'true';
    document.querySelectorAll('.mode').forEach((mode) => {
      mode.classList.remove('open');
      mode.querySelector('.mode-trigger').setAttribute('aria-expanded', 'false');
      mode.querySelector('.mode-detail').hidden = true;
      mode.querySelector('.mode-plus').textContent = '+';
    });
    if (!isOpen) {
      item.classList.add('open');
      button.setAttribute('aria-expanded', 'true');
      detail.hidden = false;
      item.querySelector('.mode-plus').textContent = '−';
    }
  });
});

const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.main-nav');
menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  nav.classList.toggle('is-open', !isOpen);
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  nav.classList.remove('is-open');
}));
document.getElementById('year').textContent = new Date().getFullYear();
