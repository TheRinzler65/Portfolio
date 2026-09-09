export const veilleTools = [
  {
    name: "Gemini",
    description:
      "Assistant IA pour rechercher des informations techniques sur les déploiements Windows/Linux et analyser les logs d'erreurs (BSOD, scripts).",
    icon: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg",
  },
  {
    name: "IT-Connect",
    description:
      "Plateforme francophone de référence pour suivre les tutoriels et l'actualité système et réseau (MDT, Intune, Ansible).",
    icon: "https://www.it-connect.fr/wp-content/themes/itconnect/images/logo.png",
  },
  {
    name: "YouTube",
    description:
      "Suivi de chaînes spécialisées pour les démonstrations techniques (Autopilot, FOG Project, Ansible, OSDCloud).",
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg",
  },
  {
    name: "X (Twitter)",
    description:
      "Suivi des comptes officiels (Microsoft Intune, Ubuntu) et des experts MVP pour une veille en temps réel.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg",
  },
];

export const veilleBilan = {
  intro:
    "Le paysage du déploiement informatique traverse une rupture majeure et irréversible. L'approche traditionnelle basée sur l'imagerie disque (masterisation) cède définitivement sa place au provisionnement dynamique par le Cloud et à l'automatisation déclarative de l'état des terminaux.",
  points: [
    "Windows : Fin actée de la masterisation classique avec le retrait de MDT et l'obsolescence de VBScript. Le provisionnement via Autopilot V2 s'impose comme le standard industriel.",
    "Linux : Transition d'une gestion artisanale vers une intégration d'entreprise. L'automatisation via Ansible se généralise pour la post-configuration.",
  ],
  conclusion:
    "Stratégie recommandée : abandonner les projets basés sur des infrastructures MDT vieillissantes pour migrer les flux Windows vers Intune et Autopilot. Capitaliser sur le matériel existant en unifiant la gestion des postes Linux via des consoles UEM.",
};
