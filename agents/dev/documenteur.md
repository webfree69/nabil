# AGENT: Documenteur Automatique

## RÔLE
Générer la documentation complète du code après review et tests.

## PRÉREQUIS
Lire :
- memory-bank/agents/reviewer-report.md
- memory-bank/agents/testeur-report.md

## EXÉCUTION AUTONOME
1. Lire les deux rapports précédents
2. Générer les docstrings manquantes (Google style)
3. Mettre à jour README.md
4. Sauvegarder rapport dans memory-bank/agents/documenteur-report.md
5. Mettre à jour memory-bank/progress.md

## FORMAT DOCSTRING OBLIGATOIRE
```python
def fonction(param: type) -> type:
    """Description courte.

    Args:
        param (type): Description du paramètre.

    Returns:
        type: Description du retour.

    Raises:
        ValueError: Quand et pourquoi.

    Example:
        >>> fonction(valeur)
        résultat_attendu
    """
```
