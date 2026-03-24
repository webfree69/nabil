# Patterns Library — Code réutilisable validé

## Pattern: Fetch RSS avec retry
\\\javascript
async function fetchWithRetry(url, retries = 3) {
  const PROXIES = [
    "https://api.allorigins.win/get?url=",
    "https://corsproxy.io/?",
    "https://proxy.cors.sh/"
  ];
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(PROXIES[i % PROXIES.length] + encodeURIComponent(url));
      return await res.json();
    } catch(e) {
      if (i === retries - 1) throw e;
    }
  }
}
\\\

## Pattern: Cache localStorage TTL
\\\javascript
function cacheGet(key) {
  const item = JSON.parse(localStorage.getItem(key) || 'null');
  if (!item || Date.now() > item.expiry) return null;
  return item.data;
}
function cacheSet(key, data, ttl = 300000) {
  localStorage.setItem(key, JSON.stringify({ data, expiry: Date.now() + ttl }));
}
\\\

## Pattern: Debounce
\\\javascript
const debounce = (fn, delay) => {
  let timer;
  return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), delay); };
};
\\\
"@ | Set-Content "C:\Users\NH\testcline\memory-bank\patterns-library.md"

# api-keys-map.md
@"
# API Keys Map — Registre des APIs utilisées

## ⚠️ NE JAMAIS COMMITTER CE FICHIER
## Ajouter api-keys-map.md dans .gitignore

## APIs actives
| API | Où utilisée | Variable | Stockage |
|-----|-------------|----------|----------|
| allorigins.win | RSS proxy | aucune clé requise | — |
| Google Fonts | CDN typographie | aucune clé requise | — |

## APIs futures
| API | Usage prévu | Statut |
|-----|-------------|--------|
| Alpaca | Trading bot | en cours |
| Telegram Bot | Notifications | configuré |
