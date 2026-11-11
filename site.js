'use strict';
// Static content and verified download links still work without JavaScript.
const viewSwitch = document.querySelector('.view-switch');
viewSwitch.hidden = false;
viewSwitch.addEventListener('change', (event) => {
  const mode = event.target.value;
  if (!['before', 'after'].includes(mode)) return;
  document.querySelectorAll('.game-card').forEach(card => {
    const img = card.querySelector('.game-image img');
    img.src = img.dataset[mode];
    img.alt = `${card.querySelector('h3').textContent}: ${mode === 'before' ? 'original NES' : 'HD pack'} gameplay screenshot`;
    card.querySelector('.image-label').textContent = mode === 'before' ? 'ORIGINAL NES' : 'HD PACK';
  });
});
// Update to the latest install ZIP, matching the pack name exactly to avoid
// accidentally linking comparison images or source archives. No token needed.
async function updateRelease(card) {
  const repo = card.dataset.repo;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 6000);
  try {
    const response = await fetch(`https://api.github.com/repos/kgrant191/${repo}/releases/latest`, {signal: controller.signal});
    if (!response.ok) throw new Error('Release lookup unavailable');
    const release = await response.json();
    const expectedName = `${repo.replaceAll('-', '_')}_${release.tag_name}.zip`.toLowerCase();
    const asset = (release.assets || []).find(item => item.name.toLowerCase() === expectedName);
    if (!asset || !asset.browser_download_url.startsWith(`https://github.com/kgrant191/${repo}/releases/download/`)) throw new Error('Install ZIP not found');
    card.querySelector('.version').textContent = release.tag_name;
    const link = card.querySelector('.download');
    link.href = asset.browser_download_url;
    link.querySelector('span').textContent = `${release.tag_name} ↓`;
    link.setAttribute('aria-label', `Download ${card.querySelector('h3').textContent} ${release.tag_name} ZIP`);
    return true;
  } catch {
    // Retain the known-good versioned link included in the HTML.
    return false;
  } finally { clearTimeout(timer); }
}
Promise.all([...document.querySelectorAll('.game-card')].map(updateRelease)).then(results => {
  document.querySelector('#release-status').textContent = results.every(Boolean)
    ? 'Download links checked against the latest GitHub releases.'
    : 'Saved release links are available. Use All releases to check for newer versions.';
});
