---
id: 2
month: "Octobre 2025"
title: "La Panique VBScript et la fin de Windows 10"
summary: "Microsoft retire le support de VBScript dans WinPE, cassant net les séquences MDT standard dans le monde entier."
tags:
  - "MDT"
  - "WinPE"
  - "VBScript"
  - "Intune"
sources:
  - name: "Microsoft Tech Community"
    url: "https://techcommunity.microsoft.com"
---

#### Windows ADK (25H2 Update)

**Alerte Rouge :** Microsoft retire le support par défaut du VBScript dans l'environnement de pré-installation WinPE.

**Conséquence :** Toutes les séquences de tâches MDT standard échouent avec l'erreur `0x80004005`. Les solutions de contournement consistant à réinjecter manuellement les paquets VBS sont jugées trop instables pour un environnement de production.

#### Microsoft Intune

Apparition des bannières d'alerte "Fin de vie Windows 10" directement dans la console d'administration, incitant fortement les entreprises à accélérer la migration vers Windows 11 via Autopilot.
