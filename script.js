// Navigation remains visible when JavaScript is unavailable.
const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-toggle');
const primaryNav = document.getElementById('primary-nav');
const mobile = window.matchMedia('(max-width: 760px)');

function updateHeaderOffset() {
  if (header) {
    document.documentElement.style.setProperty(
      '--header-offset', `${Math.ceil(header.getBoundingClientRect().height) + 24}px`
    );
  }
}
function closeMenu() {
  if (!menuButton || !primaryNav) return;
  menuButton.setAttribute('aria-expanded', 'false');
  primaryNav.classList.remove('is-open');
  updateHeaderOffset();
}
if (header && menuButton && primaryNav) {
  header.classList.add('menu-enabled');
  menuButton.hidden = !mobile.matches;
  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(expanded));
    primaryNav.classList.toggle('is-open', expanded);
    updateHeaderOffset();
  });
  primaryNav.addEventListener('click', (event) => {
    const link = event.target.closest('a');
    if (!link || !mobile.matches) return;
    closeMenu();
    // Move focus out of the collapsed menu before the native anchor scroll.
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    }
  });
  header.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menuButton.focus();
    }
  });
  function updateMenuLayout() {
    // Preserve keyboard focus when a breakpoint hides the current control.
    if (mobile.matches && primaryNav.contains(document.activeElement)) menuButton.focus();
    if (!mobile.matches && document.activeElement === menuButton) {
      const firstLink = primaryNav.querySelector('a');
      if (firstLink) firstLink.focus();
    }
    menuButton.hidden = !mobile.matches;
    closeMenu();
  }
  if (mobile.addEventListener) mobile.addEventListener('change', updateMenuLayout);
  else mobile.addListener(updateMenuLayout);
}
updateHeaderOffset();
if (header && 'ResizeObserver' in window) new ResizeObserver(updateHeaderOffset).observe(header);
else window.addEventListener('resize', updateHeaderOffset);

// Copy controls appear only when the Clipboard API is available.
const defaultCopyStatus = document.querySelector('.copy-status');
if (navigator.clipboard && window.isSecureContext) {
  document.querySelectorAll('[data-copy]').forEach((button) => {
    const code = document.getElementById(button.dataset.copy);
    const copyStatus = document.getElementById(button.dataset.status) || defaultCopyStatus;
    if (!code) return;
    button.hidden = false;
    button.addEventListener('click', async () => {
      button.disabled = true;
      if (copyStatus) copyStatus.textContent = '';
      try {
        await navigator.clipboard.writeText(code.textContent.trim());
        if (copyStatus) copyStatus.textContent = button.dataset.copy === 'citation-bibtex'
          ? 'BibTeX copied to clipboard.' : 'Commands copied to clipboard.';
      } catch {
        if (copyStatus) copyStatus.textContent = 'Copy unavailable. Select the commands and copy them manually.';
      } finally {
        button.disabled = false;
      }
    });
  });
}

// Native details expose all datasets without JavaScript; selectors compact the live page.
document.querySelectorAll('.result-explorer').forEach((explorer) => {
  const controls = explorer.querySelector('.result-controls');
  const select = explorer.querySelector('.dataset-select');
  const panels = explorer.querySelectorAll('.dataset-panel');
  if (!controls || !select || !panels.length) return;
  function showDataset() {
    panels.forEach((panel) => {
      const selected = panel.dataset.dataset === select.value;
      panel.hidden = !selected;
      if (selected) panel.open = true;
    });
  }
  controls.hidden = false;
  explorer.classList.add('enhanced');
  select.addEventListener('change', showDataset);
  showDataset();
});
