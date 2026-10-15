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

// The lab name remains visible if the optional logo is absent.
const labLogo = document.querySelector('.lab-logo');
if (labLogo) {
  const revealLogo = () => {
    labLogo.closest('.lab-logo-link').hidden = !labLogo.naturalWidth;
  };
  labLogo.addEventListener('load', revealLogo);
  if (labLogo.complete) revealLogo();
}
