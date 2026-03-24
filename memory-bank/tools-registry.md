# Registre des Outils Créés Automatiquement

## Template d'entrée
### [nom-outil]
- **Fichier** : tools/[nom].py
- **Créé le** : [date]
- **Rôle** : [description courte]
- **Input** : [types]
- **Output** : [type retour]
- **Utilisé par** : [fichiers qui l'utilisent]

## Outils disponibles

### ✅ rss_parser
- **Fichier** : tools/rss_parser.py
- **Créé le** : 24/03/2026 03:57
- **Rôle** : Parseur de flux RSS avec support multi-sources
- **Input** : `url: str, proxy: Optional[str]`
- **Output** : `List[Dict[str, str]]`

### ✅ cache_manager
- **Fichier** : tools/cache_manager.py
- **Créé le** : 24/03/2026 03:57
- **Rôle** : Gestionnaire de cache localStorage avec TTL
- **Input** : `key: str, data: Any, ttl: int`
- **Output** : `Optional[Any]`

### ✅ html_generator
- **Fichier** : tools/html_generator.py
- **Créé le** : 24/03/2026 03:57
- **Rôle** : Générateur de HTML statique à partir de templates
- **Input** : `template: str, context: Dict`
- **Output** : `str`

### ✅ notification_sender
- **Fichier** : tools/notification_sender.py
- **Créé le** : 24/03/2026 03:57
- **Rôle** : Envoi de notifications (toast, browser, console)
- **Input** : `title: str, message: str, level: str`
- **Output** : `bool`

### ✅ data_validator
- **Fichier** : tools/data_validator.py
- **Créé le** : 24/03/2026 03:57
- **Rôle** : Validation et sanitization des données d'entrée
- **Input** : `data: Dict, schema: Dict`
- **Output** : `Dict`
