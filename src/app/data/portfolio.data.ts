export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  username: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/daolvera',
    icon: 'github',
    username: '@daolvera',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/dan-olvera-21b50b223/',
    icon: 'linkedin',
    username: 'Dan Olvera',
  },
  {
    name: 'Twitch',
    url: 'https://www.twitch.tv/daolveradev',
    icon: 'twitch',
    username: '@daolveradev',
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@daocodes',
    icon: 'youtube',
    username: '@daocodes',
  },
];

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    title: 'Dao.AI.BreakPoint',
    description:
      'Aspire Project for the BreakPoint AI Tennis Coach App - an intelligent coaching assistant.',
    technologies: ['C#', '.NET Aspire', 'AI', 'Azure'],
    githubUrl: 'https://github.com/daolvera/Dao.AI.BreakPoint',
    featured: true,
  },
  {
    title: 'Dao.AI.Prompting',
    description:
      'A way to structure your prompts with C# objects for better AI interactions.',
    technologies: ['C#', '.NET', 'AI', 'Prompt Engineering'],
    githubUrl: 'https://github.com/daolvera/Dao.AI.Prompting',
    featured: true,
  },
  {
    title: 'Meeting Timer',
    description:
      'Angular application to create speaking timers and broadcast messages to shared rooms.',
    technologies: ['Angular', 'TypeScript', 'Real-time'],
    githubUrl: 'https://github.com/daolvera/MeetingTimer',
    featured: true,
  },
  {
    title: 'Azure-Auth-Schematic',
    description:
      'Angular schematic to quickly create apps using MSAL authorization that authenticates to external services.',
    technologies: ['Angular', 'TypeScript', 'Azure AD', 'MSAL'],
    githubUrl: 'https://github.com/daolvera/Azure-Auth-Schematic',
    featured: true,
  },
];

export const PROFILE = {
  name: 'Dan Olvera',
  title: '.NET & Angular Developer',
  tagline: 'Spokane .NET User Group Leader',
  location: 'Spokane, WA',
  company: 'IntelliTect',
  bio: `Software Engineer focusing on .NET and Angular. I run the Spokane .NET User Group and would love for people to attend!`,
};
