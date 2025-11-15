import type { IconProps } from "@phosphor-icons/react";

interface HeaderProps {
  name: string;
  role: string;
  summary: string;
}

interface contactInfoProps {
  icon: React.ComponentType<IconProps>;
  value: string;
}

interface TechnologyProps {
  name: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
}

interface SkillProps {
  name: string;
  technologies: TechnologyProps[];
}

interface EducationProps {
  title: string;
  description: string;
  institution: string;
}

interface CourseProps {
  name: string;
  date: string;
}

interface LanguageProps {
  name: string;
  level: string;
}

interface PositionProps {
  title: string;
  period: string;
  details: string[];
}

interface ExperienceProps {
  company: string;
  logo: string;
  positions: PositionProps[];
}

interface ProjectProps {
  title: string;
  period: string;
  description: string;
}

export type {
  HeaderProps,
  contactInfoProps,
  SkillProps,
  EducationProps,
  CourseProps,
  LanguageProps,
  ExperienceProps,
  ProjectProps,
};