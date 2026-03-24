# SKILL: Intent Detector — Compréhension intentions

## RÔLE
Interpréter les messages courts ou ambigus et déclencher
automatiquement l'action correcte sans demander de clarification.

## TABLE DE CORRESPONDANCES

### Débogage
| Message reçu | Action déclenchée |
|---|---|
| "ça marche pas" | Lire dernière erreur → Self-Debugger |
| "erreur" | Lire logs → Self-Debugger |
| "ça plante" | Lire traceback → Self-Debugger |
| "bug" | Analyser dernier fichier modifié |

### Régénération
| Message reçu | Action déclenchée |
|---|---|
| "refais" | Régénère le dernier fichier créé |
| "recommence" | Repart de zéro sur la dernière tâche |
| "encore" | Relance la dernière commande |
| "retry" | Relance avec Self-Debugger actif |

### Git
| Message reçu | Action déclenchée |
|---|---|
| "pousse" | git add . && git commit && git push |
| "push" | git add . && git commit && git push |
| "commit" | git add . && git commit -m auto |
| "sauvegarde" | git add . && git commit -m "chore: sauvegarde" |

### Nettoyage
| Message reçu | Action déclenchée |
|---|---|
| "clean" | Code Reviewer + supprimer fichiers temp |
| "nettoie" | Supprimer *.tmp *.log __pycache__ |
| "optimise" | Performance Monitor sur derniers fichiers |

### Navigation
| Message reçu | Action déclenchée |
|---|---|
| "où j'en étais" | Lire memory-bank/last-session.md |
| "résumé" | Résumer les 5 dernières actions |
| "stats" | Afficher memory-bank/ide-stats.md |
| "skills" | Lister tous les skills disponibles |

### Génération rapide
| Message reçu | Action déclenchée |
|---|---|
| "teste" | Auto-Tester sur derniers fichiers |
| "doc" | Auto-Documenter sur le projet |
| "plan" | Task Planner sur la tâche en cours |

## RÈGLE
Toujours interpréter avant de demander.
Si ambiguité → choisir l'action la plus probable
et l'indiquer clairement : "J'interprète X comme Y, j'exécute..."
