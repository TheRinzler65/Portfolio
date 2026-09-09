---
id: 3
month: "Novembre 2025"
title: "Hardware, Autopilot V2 et correctifs"
summary: "Sortie de Windows Autopilot V2 et gestion des bugs critiques concernant le chiffrement BitLocker."
tags:
  - "Autopilot V2"
  - "BitLocker"
sources:
  - name: "Intune Blog (Autopilot V2)"
    url: "https://techcommunity.microsoft.com/t5/intune-customer-success/bg-p/IntuneCustomerSuccess"
---

#### Windows Autopilot "Device Preparation" (V2)

Passage en "Généralement Disponible" (GA). Cette méthode supprime enfin la nécessité de capturer le fastidieux "Hardware Hash" pour de nombreux scénarios, ce qui accélère drastiquement l'enrôlement des PC neufs.

#### BitLocker (Windows)

Découverte d'un bug critique sur les SSD Samsung avec la mise à jour cumulative KB505xxxx, empêchant le chiffrement silencieux déclenché via Intune.
