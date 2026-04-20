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
      "Suivi des comptes officiels (Microsoft Intune, Ubuntu) et des experts MVP pour une veille en temps réel et remonter les bugs critiques.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg",
  },
];

export const veilleBilan = {
  intro:
    "Le paysage du déploiement informatique traverse une rupture majeure et irréversible. L'approche traditionnelle basée sur l'imagerie disque (masterisation) cède définitivement sa place au provisionnement dynamique par le Cloud et à l'automatisation déclarative de l'état des terminaux.",
  points: [
    "Windows : Fin actée de la masterisation classique avec le retrait de MDT et l'obsolescence de VBScript. Le provisionnement via Autopilot V2 s'impose comme le standard industriel, soutenu par des alternatives communautaires modernes comme OSDCloud pour le bare-metal.",
    "Linux : Transition d'une gestion artisanale vers une intégration d'entreprise. L'automatisation via Ansible se généralise pour la post-configuration, et le support croissant des agents UEM permet d'appliquer des politiques de conformité centralisées au même titre que Windows.",
  ],
  conclusion:
    "Stratégie recommandée : abandonner les projets basés sur des infrastructures MDT vieillissantes pour migrer les flux Windows vers Intune et Autopilot. Parallèlement, capitaliser sur le matériel existant en unifiant la gestion des postes Linux via des consoles UEM et la standardisation de leur configuration par le code (Infrastructure-as-Code).",
};

export const veilleArticles = [
  {
    id: 1,
    month: "Septembre 2025",
    title: "La rentrée des OS et les premières ruptures",
    summary:
      "Lancement de Windows 11 25H2 et GNOME 49, apportant de nouveaux défis majeurs de déploiement.",
    content: `
            <h4 class="font-bold text-lg text-accent mb-2">Windows 11 25H2 (Release)</h4>
            <p><strong>Problème critique :</strong> Les premières tentatives de déploiement via SCCM/MDT échouent (BSOD) sur le matériel récent en raison de l'incompatibilité des nouveaux noyaux avec les anciens pilotes de stockage génériques.</p>
            <p><strong>Nouveauté :</strong> Intégration native de la commande <code class="bg-base-300 px-1 rounded">Sudo</code> pour Windows, modifiant les scripts d'élévation de privilèges dans Intune.</p>
            <br>
            <h4 class="font-bold text-lg text-accent mb-2">Linux (GNOME 49)</h4>
            <p>Modifications majeures des API de configuration d'affichage, nécessitant une mise à jour immédiate des collections Ansible <code class="bg-base-300 px-1 rounded">community.general</code>.</p>
        `,
    tags: ["Windows 11 25H2", "Ansible", "GNOME 49"],
    sources: [{ name: "Ansible Galaxy", url: "https://galaxy.ansible.com/" }],
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
    title: "Hardware, Autopilot V2 et correctifs",
    summary:
      "Sortie de Windows Autopilot V2 et gestion des bugs critiques concernant le chiffrement BitLocker.",
    content: `
            <h4 class="font-bold text-lg text-accent mb-2">Windows Autopilot "Device Preparation" (V2)</h4>
            <p>Passage en "Généralement Disponible" (GA). Cette méthode supprime enfin la nécessité de capturer le fastidieux "Hardware Hash" pour de nombreux scénarios, ce qui accélère drastiquement l'enrôlement des PC neufs.</p>
            <br>
            <h4 class="font-bold text-lg text-accent mb-2">BitLocker (Windows)</h4>
            <p>Découverte d'un bug critique sur les SSD Samsung avec la mise à jour cumulative KB505xxxx, empêchant le chiffrement silencieux déclenché via Intune.</p>
        `,
    tags: ["Autopilot V2", "BitLocker"],
    sources: [
      {
        name: "Intune Blog (Autopilot V2)",
        url: "https://techcommunity.microsoft.com/t5/intune-customer-success/bg-p/IntuneCustomerSuccess",
      },
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
            <h4 class="font-bold text-lg text-accent mb-2">Sécurité SSH (Linux & Windows)</h4>
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
    title: "Intelligence Artificielle et Sécurité Renforcée",
    summary:
      "Intégration de Microsoft Copilot dans Intune et arrivée de l'IA générative dans Ansible.",
    content: `
            <h4 class="font-bold text-lg text-accent mb-2">Windows & Intune (Copilot & Autopilot V2)</h4>
            <p>L'intégration de Microsoft Copilot dans Intune franchit un nouveau cap. L'outil est désormais capable d'analyser en profondeur les journaux d'erreurs générés lors d'un échec de déploiement Autopilot et de suggérer directement la modification de la politique ou de l'application bloquante. En parallèle, Microsoft améliore l'expérience utilisateur de la nouvelle version d'Autopilot Device Preparation avec une barre de progression plus détaillée, réduisant les appels au support technique.</p>
            <br>
            <h4 class="font-bold text-lg text-accent mb-2">Linux & Ansible (Automatisation)</h4>
            <p>Red Hat pousse fortement l'intégration de l'IA générative dans Ansible via le projet Lightspeed. La génération de playbooks complexes pour la configuration de postes de travail hybrides (Linux/Windows) via des instructions en langage naturel devient beaucoup plus fiable, accélérant la création de scripts de post-déploiement.</p>
        `,
    tags: ["Copilot", "Intune", "Ansible Lightspeed"],
    sources: [
      {
        name: "Intune Blog (Copilot)",
        url: "https://techcommunity.microsoft.com/t5/intune-customer-success/bg-p/IntuneCustomerSuccess",
      },
      {
        name: "Red Hat Ansible Lightspeed",
        url: "https://www.redhat.com/en/technologies/management/ansible/ansible-lightspeed",
      },
    ],
  },
  {
    id: 7,
    month: "Mars 2026",
    title: "Gestion de l'après-Windows 10 et Mises à jour de Printemps",
    summary:
      "Sortie de MECM 2603 et maintien de FOG pour l'imagerie fine de Linux et Windows.",
    content: `
            <h4 class="font-bold text-lg text-accent mb-2">Écosystème Microsoft (SCCM 2603 & Migration ESU)</h4>
            <p>Le premier jalon de l'année pour Configuration Manager (MECM version 2603) est déployé. Sans surprise, aucune nouveauté majeure n'est annoncée pour le déploiement traditionnel On-Premise (OSD). L'essentiel de la mise à jour se concentre sur l'amélioration du Cloud Attach et la sécurité du serveur. Parallèlement, les entreprises ayant souscrit aux mises à jour de sécurité étendues (ESU) suite à la fin de support de Windows 10 en octobre 2025 accélèrent massivement leur migration vers Windows 11, constatant que l'imagerie classique n'est plus viable.</p>
            <br>
            <h4 class="font-bold text-lg text-accent mb-2">FOG Project (Résistance de l'imagerie)</h4>
            <p>Alors que le monde Windows abandonne l'imagerie avec le retrait définitif de MDT, la communauté FOG Project publie des guides mis à jour pour capturer et déployer des images fines (Thin Images) de Windows 11 et des dernières distributions Linux (comme Ubuntu 24.04 LTS et 26.04). FOG confirme ainsi son statut d'ultime solution libre pour les environnements hors ligne ou académiques nécessitant du clonage de masse.</p>
        `,
    tags: ["MECM 2603", "FOG Project", "Thin Images"],
    sources: [
      {
        name: "Microsoft Learn (MECM What's New)",
        url: "https://learn.microsoft.com/en-us/mem/configmgr/core/plan-design/changes/whats-new-in-version-2603",
      },
      {
        name: "FOG Project Forums",
        url: "https://forums.fogproject.org/",
      },
    ],
  },
  {
    id: 8,
    month: "Avril 2026",
    title: "Optimisation Cloud et Convergence Linux",
    summary:
      "Priorisation des applications via Autopilot, prédiction des mises à jour Windows et alignement de la gestion Linux sur les standards UEM.",
    content: `
            <h4 class="font-bold text-lg text-accent mb-2">Windows Autopilot "Early App Trust"</h4>
            <p>Déploiement d'une nouvelle fonctionnalité permettant aux applications (Win32, Store) d'être considérées comme "approuvées" plus tôt dans le processus de provisionnement. Cela garantit que les applications de sécurité critiques sont fonctionnelles avant même que l'utilisateur n'accède à son bureau, réduisant les échecs lors de l'OOBE.</p>
            <br>
            <h4 class="font-bold text-lg text-accent mb-2">Windows Autopatch & OSDCloud</h4>
            <p>La fonctionnalité <em>Update Readiness</em> est généralisée dans Autopatch, offrant des tableaux de bord prédictifs pour la compatibilité du parc. En parallèle, pour le déploiement "Bare-Metal", la communauté adopte massivement <strong>OSDCloud</strong> pour pallier la mort de MDT, permettant l'injection d'images Windows directement depuis le cloud sans infrastructure locale.</p>
            <br>
            <h4 class="font-bold text-lg text-accent mb-2">Linux UEM (Unified Endpoint Management)</h4>
            <p>Linux rattrape son retard sur la gestion centralisée. L'émergence d'agents légers spécialisés (comme ceux de JumpCloud ou Swif.ai) permet désormais d'appliquer des politiques de conformité, de chiffrement de disque et de gestion des mots de passe sur des distributions comme Ubuntu, Fedora et Debian, directement depuis des consoles unifiées.</p>
        `,
    tags: ["Early App Trust", "OSDCloud", "Linux UEM", "Autopatch"],
    sources: [
      {
        name: "OSDCloud Documentation",
        url: "https://www.osdcloud.com/",
      },
      {
        name: "Microsoft Intune Updates",
        url: "https://learn.microsoft.com/en-us/mem/intune/fundamentals/whats-new",
      },
    ],
  },
];
