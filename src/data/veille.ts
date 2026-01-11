export const veilleTools = [
  {
    name: "Feedly",
    description:
      "Agrégateur de flux RSS pour centraliser les blogs techniques (Microsoft, IT Connect, Reddit Sysadmin).",
    icon: "https://upload.wikimedia.org/wikipedia/commons/2/29/Feedly_logo.svg",
  },
  {
    name: "Google Alerts",
    description:
      "Alertes par email sur les mots clés : 'Windows Autopilot', 'MDT Deployment', 'SCCM update'.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg",
  },
  {
    name: "YouTube",
    description:
      "Suivi de chaînes spécialisées (John Savill, NetworkChuck) pour les démos techniques.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg",
  },
  {
    name: "X (Twitter)",
    description:
      "Suivi des MVP Microsoft et des annonces officielles en temps réel.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg",
  },
];

export const veilleBilan = {
  intro:
    "Au cours de ces 6 mois de veille technologique sur le déploiement d'OS, j'ai pu observer une transition majeure du marché.",
  points: [
    "Le déploiement traditionnel (Master/Clone) via MDT/WDS reste efficace pour les environnements statiques mais montre ses limites pour le télétravail.",
    "Le Modern Management (Intune/Autopilot) devient la norme, permettant de déployer des postes sans toucher à l'infrastructure locale.",
    "L'automatisation post-déploiement (Ansible/Chocolatey) est indispensable pour maintenir le parc à jour.",
  ],
  conclusion:
    "Pour mon entreprise, la solution hybride semble être le meilleur compromis à court terme, avant une bascule totale vers le Cloud d'ici 2 ans.",
};

export const veilleArticles = [
  {
    id: 1,
    month: "Décembre 2025",
    title: "État de l'art : MDT vs Modern Management",
    summary:
      "Comparatif des méthodes de déploiement actuelles. Est-ce la fin des images 'Golden' ?",
    content: `
            <p>Le déploiement d'images monolithiques (Golden Images) a longtemps été la norme. Cependant, avec la montée du télétravail, cette méthode montre ses limites (taille des images, nécessité du réseau local).</p>
            <br>
            <h4 class="font-bold">Les limites de MDT :</h4>
            <ul class="list-disc ml-5">
                <li>Maintenance lourde des images WIM</li>
                <li>Dépendance aux drivers spécifiques</li>
                <li>Nécessite une connexion LAN au serveur WDS</li>
            </ul>
            <br>
            <p>À l'inverse, le Modern Management pousse une configuration (profils) sur un Windows générique (OEM). C'est plus léger, mais demande une licence Azure AD Premium.</p>
        `,
    tags: ["MDT", "Intune", "Architecture"],
    sources: [
      { name: "Microsoft Learn", url: "https://learn.microsoft.com" },
      { name: "IT Connect", url: "#" },
    ],
  },
  {
    id: 2,
    month: "Janvier 2026",
    title: "Test de FOG Project : L'alternative Open Source",
    summary:
      "Mise en place d'un serveur FOG pour cloner des salles de classe rapidement.",
    content: `
            <p>FOG Project est une solution de clonage/imaging open source basée sur Linux. Elle utilise PXE et TFTP pour démarrer les clients.</p>
            <br>
            <p>J'ai monté un serveur FOG sur une Debian 12. Le principal avantage est la gestion du <strong>Multicast</strong>, qui permet de descendre l'image sur 30 PC en même temps sans saturer la bande passante, contrairement à un simple partage SMB.</p>
            <br>
            <p>Cependant, le support de l'UEFI et du Secure Boot demande quelques configurations spécifiques (désactivation temporaire ou gestion des clés).</p>
        `,
    tags: ["FOG", "Linux", "Open Source"],
    sources: [
      { name: "Documentation FOG", url: "https://fogproject.org" },
      { name: "Forum Tech2Tech", url: "#" },
    ],
  },
  {
    id: 3,
    month: "Février 2026",
    title: "Windows Autopilot : La révolution Zero Touch",
    summary:
      "Comment livrer un PC directement chez l'utilisateur sans passer par le service IT.",
    content: `
            <p>Windows Autopilot change le paradigme : on ne réinstalle plus l'OS. On utilise la version préinstallée par le constructeur (Dell, HP, Lenovo) et on applique les stratégies d'entreprise dès la première connexion.</p>
            <br>
            <h4 class="font-bold">Le processus :</h4>
            <ol class="list-decimal ml-5">
                <li>Le constructeur upload le Hardware Hash du PC dans notre tenant Intune.</li>
                <li>L'utilisateur reçoit le PC, le connecte au Wi-Fi.</li>
                <li>Il se connecte avec son email pro.</li>
                <li>Autopilot prend le relais : applications, sécurité, VPN s'installent seuls.</li>
            </ol>
        `,
    tags: ["Azure", "Autopilot", "Cloud"],
    sources: [{ name: "Blog Microsoft", url: "#" }],
  },
];