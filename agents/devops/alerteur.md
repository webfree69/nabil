# AGENT: Alerteur

## RÔLE
Générer les scripts d'alerte Telegram pour les événements critiques.

## EXÉCUTION AUTONOME
1. Lire memory-bank/agents/moniteur-report.md
2. Générer le script d'alerte Python/Bash
3. Configurer les triggers
4. Sauvegarder dans memory-bank/agents/alerteur-report.md
5. Passer à l'Audit Sécurité

## SCRIPT D'ALERTE GÉNÉRÉ
```python
import requests
import logging

def send_alert(message: str, level: str = "INFO") -> bool:
    """Envoie une alerte Telegram."""
    emoji = {"INFO": "ℹ️", "WARNING": "⚠️", "CRITICAL": "🚨"}
    token = os.getenv("TELEGRAM_TOKEN")
    chat_id = os.getenv("TELEGRAM_CHAT_ID")
    
    payload = {
        "chat_id": chat_id,
        "text": f"{emoji.get(level)} *{level}*\n{message}",
        "parse_mode": "Markdown"
    }
    response = requests.post(
        f"https://api.telegram.org/bot{token}/sendMessage",
        json=payload
    )
    return response.ok
```
