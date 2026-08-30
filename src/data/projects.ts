export const projects = [
  {
    id: 1,
    title: "AP1 - Portfolio",
    imageproject: "",
    description:
      "Portfolio personnel pour présenter mes compétences et projets",
    location: "Lycée Pasteur Mont Roland à Dole, France",
    year: "2024",
    team: {
      network: ["Léo Gruet"],
      dev: ["Léo Gruet"],
    },
    images: [],
    technologies: [
      {
        name: "HTML",
        logo: "/assets/techno/html.png",
      },
      {
        name: "CSS",
        logo: "/assets/techno/css.png",
      },
      {
        name: "JavaScript",
        logo: "/assets/techno/js.png",
      },
    ],
    documents: [],
    demoLink: "#",
    repoLink: "#",
  },
  {
    id: 2,
    title: "AP2 - Send It",
    description: "Fork de Wetransfer pour le partage de fichiers en local",
    imageproject: "/assets/projects/ap2/logo_sendit.png",
    location: "Lycée Pasteur Mont Roland à Dole, France",
    year: "2025",
    team: {
      network: ["Léo GRUET", "Léo PERNIN"],
      dev: [
        "Yulian GUINAND",
        "Mélanie TROUTIER",
        "Théo VALADOUX",
        "Mathis MOLLIER",
      ],
    },
    images: [],
    technologies: [
      {
        name: "Proxmox VE",
        logo: "/assets/techno/logo_proxmox.png",
      },
      {
        name: "Pfsense",
        logo: "/assets/techno/pfsense.png",
      },
    ],
    documents: [
      { title: "Documentation Proxmox", url: "/docs/ap2/proxmox.pdf" },
      { title: "Configuration Firewall", url: "/docs/ap2/pfsense.pdf" },
    ],
    demoLink: "#",
    repoLink: "#",
  },
  {
    id: 3,
    title: "AP3 - Engagement Leucémie",
    imageproject: "/assets/projects/ap3/logo_leucemie.png",
    description: "",
    location: "Lycée Pasteur Mont Roland à Dole, France",
    year: "Septembre 2025 - Janvier 2026",
    team: {
      network: ["Léo GRUET", "Dylan DOS SANTOS", "Evan MORBOEUF"],
      dev: [
        "Yulian GUINAND",
        "Mélanie TROUTIER",
        "Théo VALADOUX",
        "Mathis MOLLIER",
      ],
    },
    images: [],
    technologies: [
      {
        name: "Proxmox Virtual Environment",
        logo: "/assets/techno/logo_proxmox.png",
      },
      {
        name: "Proxmox Backup Server",
        logo: "/assets/techno/logo_proxmox.png",
      },
      {
        name: "Mikrotik (Router OS)",
        logo: "/assets/techno/logo_mikrotik.svg",
      },
      {
        name: "GLPI",
        logo: "/assets/techno/glpi_logo.png",
      },
      {
        name: "Apache",
        logo: "/assets/techno/logo_apache.png",
      },
      {
        name: "PHP",
        logo: "/assets/techno/logo_php.svg",
      },
      {
        name: "Windows Server 2022",
        logo: "/assets/techno/windows_server_logo.webp",
      },
      {
        name: "SSMS (SQL Server Management Studio)",
        logo: "/assets/techno/ssms.webp",
      },
      {
        name: "Nextcloud",
        logo: "/assets/techno/nextcloud_logo.webp",
      },
    ],
    documents: [],
    demoLink: "#",
    repoLink: "#",
  },
  {
    id: 4,
    title: "AP4 - ELAN",
    imageproject: "/assets/projects/ap4/logo_elan.png",
    description: "",
    location: "Lycée Pasteur Mont Roland à Dole, France",
    year: "Janvier 2026 - Avril 2026",
    team: {
      network: ["Léo GRUET", "Dylan DOS SANTOS", "Samuel GAULARD"],
      dev: [
        "Yulian GUINAND",
        "Mélanie TROUTIER",
        "Théo VALADOUX",
        "Mathis MOLLIER",
      ],
    },
    images: [
      {
        url: "/images/ap4/Schema_Physique.png",
        title: "Schémas Physique du réseau",
      },
      {
        url: "/images/ap4/Schema_Logique.png",
        title: "Schémas Logique du réseau",
      },
    ],
    technologies: [
      {
        name: "Proxmox Virtual Environment",
        logo: "/assets/techno/logo_proxmox.png",
      },
      {
        name: "Proxmox Backup Server",
        logo: "/assets/techno/logo_proxmox_backup.png",
      },
      {
        name: "Mikrotik (Router OS)",
        logo: "/assets/techno/mikrotik_logo.webp",
      },
      {
        name: "GLPI",
        logo: "/assets/techno/glpi_logo.png",
      },
      {
        name: "Zabbix",
        logo: "/assets/techno/logo_zabbix.webp",
      },
      {
        name: "phpMyAdmin",
        logo: "/assets/techno/logo_phpmyadmin.png",
      },
      {
        name: "HAProxy",
        logo: "/assets/techno/logo_haproxy.png",
      },
      {
        name: "Apache",
        logo: "/assets/techno/logo_apache.png",
      },
      {
        name: "MariaDB",
        logo: "/assets/techno/logo_mariadb.png",
      },
      {
        name: "PHP",
        logo: "/assets/techno/logo_php.svg",
      },
      {
        name: "",
        logo: "",
      },
    ],
    documents: [
      {
        title: "Configuration Switch - VLANs, Spanning Tree",
        url: "/docs/ap4/Configuration Switch - VLANs, Spanning Tree - AP4.pdf",
      },
      {
        title: "Configuration VRRP",
        url: "/docs/ap4/Configuration VRRP - AP4.pdf",
      },
      {
        title: "Installation GLPI",
        url: "/docs/ap4/Installation GLPI - AP4.pdf",
      },
      {
        title: "Installation Zabbix",
        url: "/docs/ap4/Installation Zabbix - AP4.pdf",
      },
    ],
    demoLink: "#",
    repoLink: "#",
  },
];
