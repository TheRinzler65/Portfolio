---
id: 4
month: "Décembre 2025"
title: "Sécurité, FOG Project et fin annoncée de MDT"
summary: "Mise à jour majeure de FOG, faille OpenSSH critique et publication du bulletin final pour MDT."
tags:
  - "FOG Project"
  - "OpenSSH"
  - "MDT"
  - "Sécurité"
sources:
  - name: "FOG Project GitHub"
    url: "https://github.com/FOGProject/fogproject"
  - name: "Microsoft Tech Community"
    url: "https://techcommunity.microsoft.com"
---

#### FOG Project (v1.5.10-RC2)

Mise à jour critique pour le support des disques NVMe Gen5. Les versions précédentes ne détectaient pas ces disques ou offraient des débits de clonage extrêmement lents, bloquant les déploiements sur le matériel très récent.

#### Sécurité SSH (Linux & Windows)

**Faille critique :** Une vulnérabilité dans OpenSSH oblige les administrateurs à déployer des scripts de remédiation d'urgence. Utilisation massive d'Ansible pour le parc Linux et de scripts Intune pour Windows afin de sécuriser le port 22.

#### Annonce Fin de Vie MDT

Microsoft publie le bulletin final confirmant le retrait des sources d'installation de Microsoft Deployment Toolkit prévu pour le mois suivant. C'est la fin officielle du produit.
