export interface Skill {
  id: number;
  category: string;
  domain: string;
  skills: string[];
  context: string;
  proofText: string;
  proofLink: string;
  isExternal: boolean;
}

export const skillsData: Skill[] = [
  {
    id: 1,
    category: "Projet et TP en cours de scolarité",
    domain: "Développer la présence en ligne de l’organisation",
    skills: [
      "1 - Participer à la valorisation de l’image de l’organisation sur les médias numériques",
      "3 - Participer à l’évolution d’un site Web exploitant les données de l’organisation",
    ],
    context:
      "AP1 : Réalisation d'un portfolio de présentation (et mises à jour)",
    proofText: "Voir le Portfolio",
    proofLink: "/",
    isExternal: false,
  },
  {
    id: 2,
    category: "Projet et TP en cours de scolarité",
    domain: "Travailler en mode projet",
    skills: [
      "1 - Analyser les objectifs et les modalités d’organisation d’un projet",
      "2 - Planifier les activities",
      "3 - Évaluer les indicateurs de suivi d’un projet et analyser les écarts",
    ],
    context: "AP2 : Réalisation d'un fork de Wetransfert (Send It)",
    proofText: "Voir le projet",
    proofLink: "/",
    isExternal: false,
  },
  {
    id: 3,
    category: "Projet et TP en cours de scolarité",
    domain: "Travailler en mode projet",
    skills: [
      "1 - Analyser les objectifs et les modalités d’organisation d’un projet",
      "2 - Planifier les activités",
      "3 - Évaluer les indicateurs de suivi d’un projet et analyser les écarts",
    ],
    context:
      "AP3 : Réalisation d'une application pour la journée Santé Citoyenneté",
    proofText: "Voir le projet",
    proofLink: "/project/sante",
    isExternal: false,
  },
  {
    id: 4,
    category: "Projet et TP en cours de scolarité",
    domain: "Organiser son développement professionnel",
    skills: [
      "1 - Mettre en place son environnement d’apprentissage personnel",
      "2 - Mettre en œuvre des outils et stratégies de veille informationnelle",
      "4 - Développer son projet professionnel",
    ],
    context: "Scolarité : Veille Technologique",
    proofText: "Voir ma veille",
    proofLink: "/veille",
    isExternal: false,
  },
  {
    id: 5,
    category: "Réalisations en milieu professionnel en cours de première année",
    domain: "Mettre à disposition des utilisateurs un service informatique",
    skills: [
      "1 - Réaliser les tests d’intégration et d’acceptation d’un service",
      "2 - Déployer un service",
      "3 - Accompagner les utilisateurs dans la mise en place d’un service",
    ],
    context: "Milieu pro : Projet Migration Windows 11 sur l'ensemble du parc",
    proofText: "Voir la migration",
    proofLink: "/project/migration-w11",
    isExternal: false,
  },
  {
    id: 6,
    category: "Réalisations en milieu professionnel en cours de première année",
    domain:
      "Répondre aux incidents et aux demandes d’assistance et d’évolution",
    skills: [
      "1 - Collecter, suivre et orienter des demandes",
      "2 - Traiter des demandes concernant les services réseau et système, applicatifs",
      "3 - Traiter des demandes concernant les applications",
    ],
    context: "Milieu pro : Hotline Informatique et gestion du Ticketing",
    proofText: "Détails Hotline",
    proofLink: "/project/hotline",
    isExternal: false,
  },
  {
    id: 7,
    category: "Réalisations en milieu professionnel en cours de première année",
    domain: "Gérer le patrimoine informatique",
    skills: [
      "4 - Vérifier les conditions de la continuité d’un service informatique",
    ],
    context:
      "Milieu pro : Cyberattaque en entreprise et postes corrompus (BSOD)",
    proofText: "Détails",
    proofLink: "/divers",
    isExternal: false,
  },
  {
    id: 8,
    category: "Réalisations en milieu professionnel en cours de seconde année",
    domain: "Mettre à disposition des utilisateurs un service informatique",
    skills: [
      "1 - Réaliser les tests d’intégration et d’acceptation d’un service",
      "2 - Déployer un service",
      "3 - Accompagner les utilisateurs dans la mise en place d’un service",
    ],
    context: "Milieu pro : Projet Migration Windows 11 (Suite en 2ème année)",
    proofText: "Voir la migration",
    proofLink: "/project/migration-w11",
    isExternal: false,
  },
  {
    id: 9,
    category: "Réalisations en milieu professionnel en cours de seconde année",
    domain: "Mettre à disposition des utilisateurs un service informatique",
    skills: [
      "1 - Réaliser les tests d’intégration et d’acceptation d’un service",
      "2 - Déployer un service",
    ],
    context:
      "Milieu pro : Création de scripts PowerShell pour le déploiement d'applications",
    proofText: "Voir le script",
    proofLink: "/divers",
    isExternal: false,
  },
  {
    id: 10,
    category: "Réalisations en milieu professionnel en cours de seconde année",
    domain: "Gérer le patrimoine informatique",
    skills: [
      "4 - Vérifier les conditions de la continuité d’un service informatique",
      "5 - Gérer des sauvegardes",
    ],
    context:
      "Milieu pro : Amélioration du script de sauvegarde et restauration",
    proofText: "Code source",
    proofLink: "/divers",
    isExternal: false,
  },
  {
    id: 11,
    category: "Réalisations en milieu professionnel en cours de seconde année",
    domain: "Gérer le patrimoine informatique",
    skills: [
      "1 - Recenser et identifier les ressources numériques",
      "6 - Vérifier le respect des règles d’utilisation des ressources numériques",
    ],
    context:
      "Milieu pro : Utilisation d'un erase disk pour le don d'anciens postes",
    proofText: "Détails",
    proofLink: "/divers",
    isExternal: false,
  },
  {
    id: 12,
    category: "Réalisations en milieu professionnel en cours de seconde année",
    domain: "Mettre à disposition des utilisateurs un service informatique",
    skills: [
      "3 - Accompagner les utilisateurs dans la mise en place d’un service",
    ],
    context: "Milieu pro : Mise à jour du guide utilisateur informatique",
    proofText: "Voir le guide",
    proofLink: "/divers",
    isExternal: false,
  },
  {
    id: 13,
    category: "Réalisations en milieu professionnel en cours de seconde année",
    domain:
      "Répondre aux incidents et aux demandes d’assistance et d’évolution",
    skills: [
      "1 - Collecter, suivre et orienter des demandes",
      "2 - Traiter des demandes concernant les services réseau et système, applicatifs",
      "3 - Traiter des demandes concernant les applications",
    ],
    context:
      "Milieu pro : Hotline Informatique et gestion du Ticketing (Suite en 2ème année)",
    proofText: "Détails Hotline",
    proofLink: "/project/hotline",
    isExternal: false,
  },
];
