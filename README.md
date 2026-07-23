# Babi Services — Audit, Supervision & Sécurisation

## Contexte du projet

Ce dépôt correspond à la **partie 2** du projet de certification Développeur Multimédia (bloc A4 — *Maintenance et optimisation des systèmes numériques*).

Le projet **Babi Services** (mise en relation entre particuliers et prestataires de services à Abidjan) a été développé lors d'une phase précédente. L'objectif de cette partie est de :

- **Auditer** l'application (performance, sécurité, accessibilité, conformité)
- **Sécuriser** et **superviser** son fonctionnement en temps réel
- **Diagnostiquer et corriger** les anomalies techniques identifiées
- **Documenter** l'ensemble de la démarche pour une équipe technique

## Stack technique

| Composant | Technologie |
|---|---|
| Backend | Laravel (PHP 8.4) |
| Frontend | React (Vite) |
| Base de données | MySQL 8.0 |
| Administration BDD | phpMyAdmin |
| Conteneurisation | Docker / Docker Compose |

## Outils de supervision et de sécurité mis en place

### Supervision applicative & infrastructure
- **Sentry** (backend Laravel + frontend React) — suivi des erreurs, exceptions et temps de réponse, avec alertes configurées
- **Prometheus + Grafana + cAdvisor** — dashboard temps réel de l'utilisation CPU / RAM par container
- **Laravel Telescope** — profiling des requêtes API et audit des requêtes SQL (environnement local uniquement)

### Sécurité & analyse des vulnérabilités
- **Trivy** — scan des images Docker (backend & frontend)
- **npm audit** / **composer audit** — analyse des vulnérabilités des dépendances
- **Dependabot** — veille automatisée et mises à jour de sécurité des dépendances (configuré via `.github/dependabot.yml`)
- **OWASP ZAP** — scan de sécurité applicative (OWASP Top 10)

### Accessibilité
- **WAVE** — évaluation de l'accessibilité (RGAA)

## Lancer le projet en local

```bash
docker compose build
docker compose up -d
docker compose ps
```

| Service | URL |
|---|---|
| Frontend | http://localhost:5173 |
| Backend (API) | http://localhost:8000 |
| phpMyAdmin | http://localhost:8080 |
| Laravel Telescope | http://localhost:8000/telescope |
| cAdvisor | http://localhost:8081 |
| Prometheus | http://localhost:9090 |
| Grafana | http://localhost:3000 |

## Rapports d'audit

Les rapports générés (Trivy, npm/composer audit, OWASP ZAP, WAVE) sont disponibles dans le dossier `/audit-reports` et détaillés dans la documentation technique du projet.

---

*Projet réalisé dans le cadre de la certification Développeur Multimédia — L'École Multimédia, 2025.*
