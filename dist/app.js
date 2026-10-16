const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const closeMenu = () => {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'メニューを開く');
  navigation.classList.remove('is-open');
};
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
  navigation.classList.toggle('is-open', open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
const dialog = document.querySelector('#consultation-dialog');
document.querySelector('#consultation-button').addEventListener('click', () => {
  const url = window.MORI_CONFIG?.consultationUrl;
  if (url && /^https:\/\//i.test(url)) { window.location.assign(url); return; }
  dialog.showModal();
});
document.querySelectorAll('.dialog-close, .dialog-dismiss').forEach(button => button.addEventListener('click', () => dialog.close()));
dialog.addEventListener('click', event => { if (event.target === dialog) { const bounds = dialog.getBoundingClientRect(); if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close(); } });
document.querySelectorAll('[data-course]').forEach(link => link.addEventListener('click', () => {
  const selected = document.querySelector('#selected-course');
  selected.textContent = `気になっているコース：${link.dataset.course}`;
  selected.hidden = false;
}));

const motionToggle = document.querySelector('.motion-toggle');
if (motionToggle) motionToggle.addEventListener('click', () => {
  const paused = document.documentElement.classList.toggle('motion-paused');
  motionToggle.setAttribute('aria-pressed', String(paused));
  motionToggle.textContent = paused ? '動きを再開する ▷' : '動きを止める Ⅱ';
});
