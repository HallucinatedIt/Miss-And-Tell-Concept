const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() { toggle.setAttribute('aria-expanded', 'false'); navigation.classList.remove('open'); }
toggle.addEventListener('click', () => {
  const opened = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!opened));
  navigation.classList.toggle('open', !opened);
});
navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && navigation.classList.contains('open')) { closeMenu(); toggle.focus(); } });
const filters = document.querySelector('.filters');
const episodes = [...document.querySelectorAll('.episode')];
filters.hidden = false;
filters.addEventListener('click', event => {
  const button = event.target.closest('button[data-filter]');
  if (!button) return;
  filters.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  let count = 0;
  episodes.forEach(episode => {
    episode.hidden = button.dataset.filter !== 'all' && episode.dataset.category !== button.dataset.filter;
    if (!episode.hidden) count += 1;
  });
  document.querySelector('.episode-count').textContent = `${count} episodes`;
});
