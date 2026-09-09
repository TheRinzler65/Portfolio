---
id: 4
title: "AP4 - ELAN"
description: "Mise en place d'une architecture réseau hautement disponible et de services managés pour l'entreprise ELAN."
imageproject: "/assets/projects/ap4/logo_elan.png"
location: "Lycée Pasteur Mont Roland à Dole, France"
year: "Janvier 2026 - Avril 2026"
team:
  network:
    - "Léo GRUET"
    - "Dylan DOS SANTOS"
    - "Samuel GAULARD"
  dev:
    - "Yulian GUINAND"
    - "Mélanie TROUTIER"
    - "Théo VALADOUX"
    - "Mathis MOLLIER"
technologies:
  - name: "Proxmox Virtual Environment"
    logo: "/assets/techno/logo_proxmox.png"
  - name: "Proxmox Backup Server"
    logo: "/assets/techno/logo_proxmox.png"
  - name: "Mikrotik (Router OS)"
    logo: "/assets/techno/logo_mikrotik.svg"
  - name: "GLPI"
    logo: "/assets/techno/glpi_logo.png"
  - name: "Zabbix"
    logo: "/assets/techno/logo_zabbix.webp"
  - name: "phpMyAdmin"
    logo: "/assets/techno/logo_phpmyadmin.png"
  - name: "HAProxy"
    logo: "/assets/techno/logo_haproxy.png"
  - name: "Apache"
    logo: "/assets/techno/logo_apache.png"
  - name: "MariaDB"
    logo: "/assets/techno/logo_mariadb.png"
  - name: "PHP"
    logo: "/assets/techno/logo_php.svg"
documents:
  - title: "Configuration Switch - VLANs, Spanning Tree"
    url: "/docs/ap4/Configuration%20Switch%20-%20VLANs%2C%20Spanning%20Tree%20-%20AP4.pdf"
  - title: "Configuration VRRP"
    url: "/docs/ap4/Configuration%20VRRP%20-%20AP4.pdf"
  - title: "Installation GLPI"
    url: "/docs/ap4/Installation%20GLPI%20-%20AP4.pdf"
  - title: "Installation Zabbix"
    url: "/docs/ap4/Installation%20Zabbix%20-%20AP4.pdf"
demoLink: "#"
repoLink: "#"
---

Déploiement d'une infrastructure réseau complète et hautement disponible pour l'entreprise ELAN.

### Objectifs

- Mise en place d'un réseau à haute disponibilité avec redondance matérielle.
- Configuration des switchs avec VLANs et Spanning Tree Protocol.
- Déploiement d'un pare-feu Mikrotik avec équilibrage de charge (VRRP).
- Supervision centralisée de l'infrastructure via Zabbix.
- Gestion du parc et incidents via GLPI.
- Hébergement de services web (Apache, MariaDB, PHP) et équilibrage de charge (HAProxy).
