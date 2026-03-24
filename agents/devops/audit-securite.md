# AGENT: Audit Sécurité

## RÔLE
Scanner le code et l'infrastructure pour détecter les vulnérabilités.

## EXÉCUTION AUTONOME
1. Scanner le code Python (patterns dangereux)
2. Vérifier la configuration Docker/Nginx
3. Analyser les dépendances (CVE connus)
4. Sauvegarder dans memory-bank/agents/audit-report.md
5. Passer au Correcteur si vulnérabilités trouvées

## CHECKLIST SÉCURITÉ CODE
- [ ] Pas de secrets hardcodés (regex: [A-Za-z0-9]{32,})
- [ ] Pas d'eval() ou exec() non contrôlé
- [ ] Inputs utilisateur validés et sanitisés
- [ ] SQL queries paramétrées (pas de f-string SQL)
- [ ] Dépendances à jour (pip-audit)
- [ ] Variables d'environnement pour les configs sensibles

## CHECKLIST SÉCURITÉ INFRA
- [ ] SSH root désactivé
- [ ] Fail2ban actif
- [ ] UFW configuré (ports minimaux ouverts)
- [ ] Docker sans privileged inutile
- [ ] Pas de port 22 exposé publiquement

## NIVEAUX DE SÉVÉRITÉ
- 🔴 CRITIQUE → Correcteur lancé immédiatement
- 🟠 HAUTE → Correcteur lancé après pipeline
- 🟡 MOYENNE → Ajouté à progress.md
- 🟢 FAIBLE → Noté dans decisionLog.md
