# Code Index — Registre complet du codebase

## Fonctions disponibles
| Fonction | Fichier | Description |
|----------|---------|-------------|
| parse_rss_feed() | tools/rss_parser.py | Parse flux RSS XML |
| cache_get() | tools/cache_manager.py | Lit localStorage |
| cache_set() | tools/cache_manager.py | Écrit localStorage |
| generate_card() | tools/html_generator.py | Génère card HTML |
| send_notification() | tools/notification_sender.py | Web Notification |
| validate_article() | tools/data_validator.py | Valide article RSS |

## Patterns réutilisables
| Pattern | Fichier |
|---------|---------|
| Fetch avec retry 3x | memory-bank/patterns-library.md |
| Cache localStorage TTL | memory-bank/patterns-library.md |
| Debounce 300ms | memory-bank/patterns-library.md |

## Décisions architecturales
| Décision | Raison |
|----------|--------|
| Single file HTML | Déploiement GitHub Pages simple |
| allorigins.win proxy | Gratuit, pas de rate limit |
| Refresh 2min | Balance fraîcheur/performance |
