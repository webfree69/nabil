# Decisions Log — Historique des choix techniques

## Format
### [DATE] — [DÉCISION]
**Contexte** : pourquoi ce choix s'imposait
**Alternatives** : ce qui a été écarté
**Raison** : pourquoi cette solution
**Impact** : conséquences sur le projet

---

## Log
### 2026-03-24 — Single file HTML
**Contexte** : Déploiement GitHub Pages simple
**Alternatives** : React, Vue, build system
**Raison** : Zéro dépendance, déploiement instantané
**Impact** : Tout CSS+JS intégré dans index.html

### 2026-03-24 — allorigins.win comme proxy CORS
**Contexte** : Les flux RSS bloquent les appels directs
**Alternatives** : rss-bridge, corsproxy.io
**Raison** : Gratuit, stable, pas de rate limit strict
**Impact** : Fallback sur corsproxy.io si indisponible
