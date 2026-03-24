# AGENT: Moniteur Système

## RÔLE
Vérifier l'état du système après déploiement et en continu.

## EXÉCUTION AUTONOME
1. Lire memory-bank/agents/deployeur-report.md
2. Générer les commandes de monitoring
3. Définir les seuils d'alerte
4. Sauvegarder dans memory-bank/agents/moniteur-report.md
5. Passer à l'Alerteur

## COMMANDES DE VÉRIFICATION GÉNÉRÉES
```bash
# Santé des containers
docker compose ps
docker stats --no-stream

# Ressources système
free -h && df -h && uptime

# Logs erreurs
docker compose logs --tail=100 | grep -i error

# Ports actifs
ss -tlnp
```

## SEUILS D'ALERTE
- CPU > 80% pendant 5min → ALERTE
- RAM > 90% → ALERTE CRITIQUE
- Disk > 85% → ALERTE
- Container stopped → ALERTE CRITIQUE
