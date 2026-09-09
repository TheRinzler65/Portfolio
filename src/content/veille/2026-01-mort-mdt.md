---
id: 5
month: "Janvier 2026"
title: "La bascule officielle : Mort de MDT"
summary: "MDT est déclaré 'Legacy'. Microsoft pousse définitivement vers Intune avec de nouvelles capacités de gestion applicative."
tags:
  - "MDT Legacy"
  - "Windows 10 ESU"
  - "Intune App Management"
sources:
  - name: "Microsoft Tech Community : Deprecation of MDT"
    url: "https://learn.microsoft.com/en-us/windows/deployment/deploy-windows-mdt/deploy-windows-10-with-the-microsoft-deployment-toolkit"
---

#### Mort de MDT (06 Janvier 2026)

Retrait officiel des liens de téléchargement de Microsoft Deployment Toolkit sur les serveurs Microsoft. L'outil est officiellement déclaré "Legacy" sans aucun support futur garanti.

#### Windows 10 ESU (Extended Security Updates)

Publication des tarifs de support étendu pour Windows 10 (environ 61$/poste/an). Ce coût rend le maintien des vieux parcs économiquement non viable par rapport à un renouvellement matériel couplé à un déploiement Autopilot.

#### Intune "Enterprise App Management"

Nouvelle capacité native très attendue permettant de mettre à jour automatiquement les applications Win32 tierces (Chrome, Adobe Reader, etc.) sans avoir besoin de repackager manuellement les installeurs (.intunewin), simplifiant grandement la maintenance post-déploiement.
