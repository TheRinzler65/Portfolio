---
id: 1
month: "Septembre 2025"
title: "La rentrée des OS et les premières ruptures"
summary: "Lancement de Windows 11 25H2 et GNOME 49, apportant de nouveaux défis majeurs de déploiement."
tags:
  - "Windows 11 25H2"
  - "Ansible"
  - "GNOME 49"
sources:
  - name: "Ansible Galaxy"
    url: "https://galaxy.ansible.com/"
---

#### Windows 11 25H2 (Release)

**Problème critique :** Les premières tentatives de déploiement via SCCM/MDT échouent (BSOD) sur le matériel récent en raison de l'incompatibilité des nouveaux noyaux avec les anciens pilotes de stockage génériques.

**Nouveauté :** Intégration native de la commande `Sudo` pour Windows, modifiant les scripts d'élévation de privilèges dans Intune.

#### Linux (GNOME 49)

Modifications majeures des API de configuration d'affichage, nécessitant une mise à jour immédiate des collections Ansible `community.general`.
