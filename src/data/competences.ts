export interface Skill {
  id: number;
  domain: string;
  skill: string;
  context: string;
  proofText: string;
  proofLink: string;
  isExternal: boolean;
}

export const skillsData: Skill[] = [
  {
    id: 1,
    domain: "Gérer le patrimoine informatique",
    skill:
      "1.4 - Vérifier les conditions de la continuité d'un service informatique",
    context:
      "Milieu pro : Cyberattaque en entreprise et restauration de postes corrompus (BSOD)",
    proofText: "Détails",
    proofLink: "/divers",
    isExternal: false,
  },
  {
    id: 2,
    domain: "Gérer le patrimoine informatique",
    skill: "1.5 - Gérer des sauvegardes",
    context:
      "Milieu pro : Amélioration du script de sauvegarde et restauration des données utilisateurs",
    proofText: "Code source",
    proofLink: "/divers",
    isExternal: false,
  },
  {
    id: 3,
    domain: "Répondre aux incidents",
    skill:
      "2.2 - Traiter des demandes concernant les services réseau et système",
    context:
      "Milieu pro : Hotline Informatique, gestion du Ticketing et changement de postes",
    proofText: "Détails Hotline",
    proofLink: "/project/hotline",
    isExternal: false,
  },
  {
    id: 4,
    domain: "Développer la présence en ligne",
    skill: "3.1 - Participer à la valorisation de l'image de l'organisation",
    context:
      "AP1 : Réalisation d'un portfolio de présentation (mis à jour régulièrement)",
    proofText: "Voir le Portfolio",
    proofLink: "/",
    isExternal: false,
  },
  {
    id: 5,
    domain: "Travailler en mode projet",
    skill: "4.1 & 4.2 - Analyser les objectifs et planifier les activités",
    context: "AP2 : Réalisation d'un fork de Wetransfert (Send It)",
    proofText: "Dépôt GitHub",
    proofLink: "https://github.com/",
    isExternal: true,
  },
  {
    id: 6,
    domain: "Travailler en mode projet",
    skill: "4.3 - Évaluer les indicateurs de suivi d'un projet",
    context:
      "AP3 : Réalisation d'une application pour la journée Santé Citoyenneté",
    proofText: "Voir le projet",
    proofLink: "/project/sante",
    isExternal: false,
  },
  {
    id: 7,
    domain: "Mettre à disposition un service",
    skill: "5.2 & 5.3 - Déployer un service et accompagner les utilisateurs",
    context:
      "Milieu pro : Projet Migration Windows 11 sur l'ensemble du parc informatique",
    proofText: "Voir la migration",
    proofLink: "/project/migration-w11",
    isExternal: false,
  },
  {
    id: 8,
    domain: "Mettre à disposition un service",
    skill: "5.2 - Déployer un service (Automatisation)",
    context:
      "Milieu pro : Création et amélioration de scripts PowerShell pour le déploiement d'applications",
    proofText: "Voir le script",
    proofLink: "/divers",
    isExternal: false,
  },
  {
    id: 9,
    domain: "Organiser son développement",
    skill: "6.2 - Mettre en œuvre des outils de veille informationnelle",
    context: "Scolarité : Veille Technologique régulière",
    proofText: "Voir ma veille",
    proofLink: "/veille",
    isExternal: false,
  },
];
