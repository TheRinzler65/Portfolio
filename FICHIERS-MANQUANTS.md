# Fichiers manquants

À déposer avant déploiement :

## Obligatoires

| Fichier | Emplacement | Impact si absent |
|---|---|---|
| CV PDF | `public/docs/Leo_Gruet_CV.pdf` | Bouton "Télécharger mon CV" → 404 |
| Logo pfSense | `public/assets/techno/pfsense.png` | Logo manquant dans les compétences |
| Clés EmailJS | `.env` à la racine (voir `.env.example`) | Formulaire de contact → erreur d'envoi |

## Optionnels

| Fichier | Emplacement exact | Projet |
|---|---|---|
| `proxmox.pdf` | `public/docs/ap2/proxmox.pdf` | AP2 - Send It |
| `pfsense.pdf` | `public/docs/ap2/pfsense.pdf` | AP2 - Send It |
| `Configuration Switch - VLANs, Spanning Tree - AP4.pdf` | `public/docs/ap4/` | AP4 - ELAN |
| `Configuration VRRP - AP4.pdf` | `public/docs/ap4/` | AP4 - ELAN |
| `Installation GLPI - AP4.pdf` | `public/docs/ap4/` | AP4 - ELAN |
| `Installation Zabbix - AP4.pdf` | `public/docs/ap4/` | AP4 - ELAN |

Les liens "Documents" sont déjà en place dans les pages AP2/AP4 — ils s'affichent dès que les PDF sont déposés (noms de fichiers à respecter à la lettre).