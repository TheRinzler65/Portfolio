export const veilleTools = [
  {
    name: "Gemini",
    description:
      "Assistant IA pour rechercher des informations techniques sur les déploiements Windows/macOS/Linux et analyser les logs d'erreurs (BSOD, scripts).",
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
      "Suivi de chaînes spécialisées pour les démonstrations techniques (Autopilot, Jamf, FOG Project, Ansible).",
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg",
  },
  {
    name: "X (Twitter)",
    description:
      "Suivi des comptes officiels (Microsoft Intune, Apple Support) et des experts MVP pour une veille en temps réel et remonter les bugs critiques.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg",
  },
];

export const veilleBilan = {
  intro:
    "La période allant de septembre 2025 à janvier 2026 marque une rupture historique dans les méthodes de déploiement de postes de travail. L'ère de l'imagerie traditionnelle touche à sa fin au profit du provisionnement et de la gestion déclarative.",
  points: [
    "Windows : L'imagerie (Masterisation) est morte. Microsoft a retiré MDT et bloque l'usage de VBScript. Le provisionnement via Autopilot V2 est désormais la norme.",
    "macOS : Le Mac devient autonome. Le passage à macOS 16 impose le DDM (Declarative Device Management), rendant obsolètes les anciennes méthodes MDM.",
    "Linux : L'automatisation via Ansible se standardise fortement pour gérer la configuration post-installation, remplaçant les scripts shell monolithiques.",
  ],
  conclusion:
    "Action immédiate requise : il faut cesser tout nouveau projet basé sur MDT pour migrer vers Windows Autopilot. Côté Apple, un audit des profils Jamf/Intune est nécessaire pour basculer sur les configurations déclaratives. Linux reste une excellente alternative (via FOG/Ansible) pour le matériel vieillissant.",
};

export const veilleArticles = [
  {
    id: 1,
    month: "Septembre 2025",
    title: "La rentrée des OS et les premières ruptures",
    summary:
      "Lancement de Windows 11 25H2, macOS 16 et GNOME 49, apportant de nouveaux défis majeurs de déploiement.",
    content: `
            <h4 class="font-bold text-lg text-accent mb-2">Windows 11 25H2 (Release)</h4>
            <p><strong>Problème critique :</strong> Les premières tentatives de déploiement via SCCM/MDT échouent (BSOD) sur le matériel récent en raison de l'incompatibilité des nouveaux noyaux avec les anciens pilotes de stockage génériques.</p>
            <p><strong>Nouveauté :</strong> Intégration native de la commande <code class="bg-base-300 px-1 rounded">Sudo</code> pour Windows, modifiant les scripts d'élévation de privilèges dans Intune.</p>
            <br>
            <h4 class="font-bold text-lg text-accent mb-2">macOS 16 (Lancement)</h4>
            <p><strong>Impact Déploiement :</strong> Apple déprécie officiellement les commandes MDM traditionnelles pour les mises à jour logicielles (ScheduleOSUpdate). Seules les commandes déclaratives (DDM) sont garanties fonctionnelles.</p>
            <br>
            <h4 class="font-bold text-lg text-accent mb-2">Linux (GNOME 49)</h4>
            <p>Modifications majeures des API de configuration d'affichage, nécessitant une mise à jour immédiate des collections Ansible <code class="bg-base-300 px-1 rounded">community.general</code>.</p>
        `,
    tags: ["Windows 11 25H2", "macOS 16", "Ansible"],
    sources: [{ name: "Jamf Release Notes (macOS 16)", url: "#" }],
  },
  {
    id: 2,
    month: "Octobre 2025",
    title: "La Panique VBScript et la fin de Windows 10",
    summary:
      "Microsoft retire le support de VBScript dans WinPE, cassant net les séquences MDT standard dans le monde entier.",
    content: `
            <h4 class="font-bold text-lg text-accent mb-2">Windows ADK (25H2 Update)</h4>
            <p><strong class="text-error">Alerte Rouge :</strong> Microsoft retire le support par défaut du VBScript dans l'environnement de pré-installation WinPE.</p>
            <p><strong>Conséquence :</strong> Toutes les séquences de tâches MDT standard échouent avec l'erreur <code>0x80004005</code>. Les solutions de contournement consistant à réinjecter manuellement les paquets VBS sont jugées trop instables pour un environnement de production.</p>
            <br>
            <h4 class="font-bold text-lg text-accent mb-2">Microsoft Intune</h4>
            <p>Apparition des bannières d'alerte "Fin de vie Windows 10" directement dans la console d'administration, incitant fortement les entreprises à accélérer la migration vers Windows 11 via Autopilot.</p>
        `,
    tags: ["MDT", "WinPE", "VBScript", "Intune"],
    sources: [
      {
        name: "Microsoft Tech Community",
        url: "https://techcommunity.microsoft.com",
      },
    ],
  },
  {
    id: 3,
    month: "Novembre 2025",
    title: "Hardware, puces M4 et Autopilot V2",
    summary:
      "Sortie de Windows Autopilot V2 et gestion des bugs critiques sur les nouvelles puces Apple et le chiffrement BitLocker.",
    content: `
            <h4 class="font-bold text-lg text-accent mb-2">Windows Autopilot "Device Preparation" (V2)</h4>
            <p>Passage en "Généralement Disponible" (GA). Cette méthode supprime enfin la nécessité de capturer le fastidieux "Hardware Hash" pour de nombreux scénarios, ce qui accélère drastiquement l'enrôlement des PC neufs.</p>
            <br>
            <h4 class="font-bold text-lg text-accent mb-2">Matériel Apple (Puces M4)</h4>
            <p>Les nouveaux MacBook Pro M4 présentent un bug lors de l'enrôlement automatisé (ADE) si l'étape "Configuration Bluetooth" est masquée dans le profil Jamf, bloquant la connexion Wi-Fi initiale. Un correctif a été déployé en urgence via Jamf Pro 11.10.</p>
            <br>
            <h4 class="font-bold text-lg text-accent mb-2">BitLocker (Windows)</h4>
            <p>Découverte d'un bug critique sur les SSD Samsung avec la mise à jour cumulative KB505xxxx, empêchant le chiffrement silencieux déclenché via Intune.</p>
        `,
    tags: ["Autopilot V2", "Apple M4", "Jamf Pro", "BitLocker"],
    sources: [
      {
        name: "Intune Blog (Autopilot V2)",
        url: "https://techcommunity.microsoft.com/t5/intune-customer-success/bg-p/IntuneCustomerSuccess",
      },
      { name: "Jamf Release Notes", url: "#" },
    ],
  },
  {
    id: 4,
    month: "Décembre 2025",
    title: "Sécurité, FOG Project et fin annoncée de MDT",
    summary:
      "Mise à jour majeure de FOG, faille OpenSSH critique et publication du bulletin final pour MDT.",
    content: `
            <h4 class="font-bold text-lg text-accent mb-2">FOG Project (v1.5.10-RC2)</h4>
            <p>Mise à jour critique pour le support des disques NVMe Gen5. Les versions précédentes ne détectaient pas ces disques ou offraient des débits de clonage extrêmement lents, bloquant les déploiements sur le matériel très récent.</p>
            <br>
            <h4 class="font-bold text-lg text-accent mb-2">Sécurité SSH (Multi-OS)</h4>
            <p><strong class="text-error">Faille critique :</strong> Une vulnérabilité dans OpenSSH oblige les administrateurs à déployer des scripts de remédiation d'urgence. Utilisation massive d'Ansible pour le parc Linux et de scripts Intune pour Windows afin de sécuriser le port 22.</p>
            <br>
            <h4 class="font-bold text-lg text-accent mb-2">Annonce Fin de Vie MDT</h4>
            <p>Microsoft publie le bulletin final confirmant le retrait des sources d'installation de Microsoft Deployment Toolkit prévu pour le mois suivant. C'est la fin officielle du produit.</p>
        `,
    tags: ["FOG Project", "OpenSSH", "MDT", "Sécurité"],
    sources: [
      {
        name: "FOG Project GitHub",
        url: "https://github.com/FOGProject/fogproject",
      },
      {
        name: "Microsoft Tech Community",
        url: "https://techcommunity.microsoft.com",
      },
    ],
  },
  {
    id: 5,
    month: "Janvier 2026",
    title: "La bascule officielle : Mort de MDT",
    summary:
      "MDT est déclaré 'Legacy'. Microsoft pousse définitivement vers Intune avec de nouvelles capacités de gestion applicative.",
    content: `
            <h4 class="font-bold text-lg text-accent mb-2">Mort de MDT (06 Janvier 2026)</h4>
            <p>Retrait officiel des liens de téléchargement de Microsoft Deployment Toolkit sur les serveurs Microsoft. L'outil est officiellement déclaré "Legacy" sans aucun support futur garanti.</p>
            <br>
            <h4 class="font-bold text-lg text-accent mb-2">Windows 10 ESU (Extended Security Updates)</h4>
            <p>Publication des tarifs de support étendu pour Windows 10 (environ 61$/poste/an). Ce coût rend le maintien des vieux parcs économiquement non viable par rapport à un renouvellement matériel couplé à un déploiement Autopilot.</p>
            <br>
            <h4 class="font-bold text-lg text-accent mb-2">Intune "Enterprise App Management"</h4>
            <p>Nouvelle capacité native très attendue permettant de mettre à jour automatiquement les applications Win32 tierces (Chrome, Adobe Reader, etc.) sans avoir besoin de repackager manuellement les installeurs (.intunewin), simplifiant grandement la maintenance post-déploiement.</p>
        `,
    tags: ["MDT Legacy", "Windows 10 ESU", "Intune App Management"],
    sources: [
      {
        name: "Microsoft Tech Community : Deprecation of MDT",
        url: "https://learn.microsoft.com/en-us/windows/deployment/deploy-windows-mdt/deploy-windows-10-with-the-microsoft-deployment-toolkit",
      },
    ],
  },
  {
    id: 6,
    month: "Février 2026",
    title: "À venir...",
    summary: "Article en cours de rédaction pour le mois de février.",
    content: `
            <p>Le contenu de la veille technologique pour le mois de février 2026 sera bientôt disponible.</p>
        `,
    tags: ["En cours"],
    sources: [],
  },
  {
    id: 7,
    month: "Mars 2026",
    title: "À venir...",
    summary: "Article en cours de rédaction pour le mois de mars.",
    content: `
            <p>Le contenu de la veille technologique pour le mois de mars 2026 sera bientôt disponible.</p>
        `,
    tags: ["En cours"],
    sources: [],
  },
  {
    id: 8,
    month: "Avril 2026",
    title: "À venir...",
    summary: "Article en cours de rédaction pour le mois d'avril.",
    content: `
            <p>Le contenu de la veille technologique pour le mois d'avril 2026 sera bientôt disponible.</p>
        `,
    tags: ["En cours"],
    sources: [],
  },
];
