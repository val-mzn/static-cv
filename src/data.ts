import {
  EnvelopeIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  MapPinIcon,
  PhoneIcon,
} from "@phosphor-icons/react";
import {
  SiDocker,
  SiGit,
  SiGitlab,
  SiJavascript,
  SiKubernetes,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTypescript,
} from "@icons-pack/react-simple-icons";
import type {
  contactInfoProps,
  CourseProps,
  EducationProps,
  ExperienceProps,
  LanguageProps,
  ProjectProps,
  SkillProps,
} from "./types";

const header = {
  name: "Valentino Manzon",
  role: "Développeur Fullstack .Net & React",
  summary:
    "Développeur fullstack de 23 ans adepte des méthodes agiles, j'aime apprendre de nouvelles technologies et relever des défis. Passionné par les design patterns et les bonnes pratiques de développement, je crée des applications performantes et maintenables dans le temps.",
};

const contactInfos: contactInfoProps[] = [
  { icon: EnvelopeIcon, value: "valentinomanzon@gmail.com" },
  { icon: PhoneIcon, value: "+41 78 353 28 15" },
  { icon: MapPinIcon, value: "Bassins, Vaud" },
  { icon: LinkedinLogoIcon, value: "linkedin.com/in/ valentinomanzon" },
  { icon: GithubLogoIcon, value: "github.com/val-mzn" },
];

const skills: SkillProps[] = [
  {
    name: "Languages",
    technologies: [
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "Python", icon: SiPython, color: "text-yellow-400" },
      { name: "C#", color: "text-purple-700" },
    ],
  },
  {
    name: "Frameworks & Libraries",
    technologies: [
      { name: "React", icon: SiReact, color: "text-blue-700" },
      { name: ".NET Core", color: "text-purple-700" },
      { name: ".NET Framework", color: "text-yellow-500" },
    ],
  },
  {
    name: "Database",
    technologies: [
      { name: "SQL Server", color: "text-purple-700" },
      { name: "Oracle", color: "text-red-700" },
    ],
  },
  {
    name: "DevOps",
    technologies: [
      { name: "Docker", icon: SiDocker, color: "text-cyan-700" },
      { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-700" },
      { name: "CI/CD", icon: SiGitlab, color: "text-purple-700" },
      { name: "Git", icon: SiGit, color: "text-gray-700" },
    ],
  },
];

const educations: EducationProps[] = [
  {
    title: "Concepteur Développeur d'Applications (Bac + 3)",
    description: "Titre RNCP niveau 6 certifié par l'État français",
    institution: "EPSI Grenoble 2020 - 2023",
  },
];

const courses: CourseProps[] = [
  { name: "Kubernetes", date: "Septembre 2025" },
  { name: "Web API .NET", date: "Juin 2024" },
  { name: "React", date: "Mai 2024" },
];

const languages: LanguageProps[] = [
  { name: "Français", level: "Langue maternelle" },
  { name: "Anglais", level: "B2" },
];

const experiences: ExperienceProps[] = [
  {
    company: "Qoia",
    logo: "/qoia-logo.png",
    positions: [
      {
        title: "Développeur Fullstack .Net & React",
        period: "2023 - Présent",
        details: [
          "Développement d'APIs REST en .Net Core 8",
          "Architecture React lead sur nouvelle application",
          "Pipeline IA de migration d'un langage propriétaire vers code C#",
          "Évolution et maintenance d'une application .NET Framework",
          "Création d'une bibliothèque de composants avec l'équipe design",
          "Mise en place de pipeline CI/CD Gitlab",
        ],
      },
      {
        title: "Alternant Ingénieur R&D",
        period: "2022 - 2023",
        details: [
          "Évolution et maintenance d'une application .NET Framework",
          "Résolution de bugs et optimisation des performances",
          "Injection de dépendances dans application legacy",
          "Rédaction de tests unitaires et fonctionnels",
        ],
      },
    ],
  },
  {
    company: "My digital building",
    logo: "/mdb-logo.png",
    positions: [
      {
        title: "Stage Développeur Python",
        period: "Mai - Août 2022",
        details: [
          "Migration des optimisation de scripts Bash vers Python",
          "Deep Learning détection d'objets (plaques et visages)",
          "Création d'un dashboard web pour suivi temps réel traitements",
        ],
      },
    ],
  },
];

const projects: ProjectProps[] = [
  {
    title: "Application Mobile GTA hospitaliers",
    period: "2024 - Présent",
    description:
      "Développement d'une application React pour les actions courantes des collaborateurs hospitaliers. Encapsulation en PWA avec déploiement sur les stores Android et iOS.",
  },
  {
    title: "Outil poker planning",
    period: "2025 - Présent",
    description:
      "Outil développé en React et .Net Core pour faciliter les séances de poker planning en équipe. Utilisation de WebSockets pour les mises à jour en temps réel.",
  },
];

export {
  header,
  contactInfos,
  skills,
  educations,
  courses,
  languages,
  experiences,
  projects,
};
