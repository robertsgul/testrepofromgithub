const S = window.SITE;
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const igUrl = `https://www.instagram.com/${S.instagram}/`;

document.getElementById('header').innerHTML = `
<div class="wrap"><a class="logo" href="index.html">🍕 ${esc(S.brand)}</a>
<nav><a href="index.html#par-mums">Par mums</a><a href="index.html#galerija">Galerija</a><a href="index.html#video">Video</a><a href="index.html#edienkarte">Ēdienkarte</a><a href="index.html#kontakti">Kontakti</a><a class="btn" style="margin-left:16px;padding:6px 16px" href="rezervacija.html">Pieteikt</a></nav></div>`;

const contact = [
  ...(S.phones || []).map(n => `📞 <a href="tel:${esc(n.replace(/\s/g,''))}">${esc(n)}</a>`),
  S.email && `✉️ <a href="mailto:${esc(S.email)}">${esc(S.email)}</a>`,
  S.location && `📍 ${esc(S.location)}`,
  S.hours && `🕒 ${esc(S.hours)}`,
  `📸 <a href="${igUrl}" target="_blank" rel="noopener">@${esc(S.instagram)} Instagram</a>`,
].filter(Boolean);
window.CONTACT_HTML = contact.map(c => `<p>${c}</p>`).join('');

document.getElementById('footer').innerHTML = `<div class="wrap"><p><strong>${esc(S.brand)}</strong> — ${esc(S.tagline)} 🍕</p>${contact.join(' &nbsp;·&nbsp; ')}<p>© ${new Date().getFullYear()} ${esc(S.brand)}</p></div>`;
