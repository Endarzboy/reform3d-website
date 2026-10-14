const copyStatus = document.querySelector(".copy-status");

if (navigator.clipboard && window.isSecureContext) {
  document.querySelectorAll("[data-copy]").forEach((button) => {
    button.hidden = false;

    button.addEventListener("click", async () => {
      const code = document.getElementById(button.dataset.copy);
      if (!code) return;

      button.disabled = true;
      copyStatus.textContent = "";

      try {
        await navigator.clipboard.writeText(code.textContent.trim());
        copyStatus.textContent = "Commands copied to clipboard.";
      } catch {
        copyStatus.textContent =
          "Copy unavailable. Select the commands and copy them manually.";
      } finally {
        button.disabled = false;
      }
    });
  });
}