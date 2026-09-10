# Fichiers manquants

À déposer avant déploiement :

## Obligatoires

| Fichier | Emplacement | Impact si absent | État |
|---|---|---|---|
| CV PDF | `public/docs/CV_GRUET_Leo.pdf` | Bouton "Télécharger mon CV" → 404 | ✅ en ligne |
| Logo pfSense | `public/assets/techno/pfsense.png` | Logo manquant dans les compétences + AP2 | ❌ manquant |
| Clé Web3Forms | `.env` à la racine (voir `.env.example`) — clé sur https://web3forms.com avec leo.gruet65@proton.me | Formulaire de contact → erreur d'envoi | ⚠️ à faire |

## Documents projets

| Fichier | Emplacement exact | État |
|---|---|---|
| `proxmox.pdf` | `public/docs/ap2/proxmox.pdf` | ❌ manquant |
| `pfsense.pdf` | `public/docs/ap2/pfsense.pdf` | ❌ manquant |
| `Configuration Switch - VLANs et Spanning Tree - AP4.pdf` | `public/docs/ap4/` | ✅ en ligne (testé 200) |
| `Configuration VRRP - AP4.pdf` | `public/docs/ap4/` | ✅ en ligne (testé 200) |
| `Installation GLPI - AP4.pdf` | `public/docs/ap4/` | ✅ en ligne (testé 200) |
| `Installation HAProxy - AP4.pdf` | `public/docs/ap4/` | ✅ en ligne (testé 200) |
| `Installation MariaDB et phpMyAdmin - AP4.pdf` | `public/docs/ap4/` | ✅ en ligne (testé 200) |
| `Installation SRV Web - AP4.pdf` | `public/docs/ap4/` | ✅ en ligne (testé 200) |
| `Installation Zabbix - AP4.pdf` | `public/docs/ap4/` | ✅ en ligne (testé 200) |

## Config à vérifier

- [x] `site: "https://gruetleo.fr"` dans `astro.config.mjs`
