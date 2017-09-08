export interface Achievement {
  icon: string;
  description: string;
  color: string;
}

export interface Project {
  id: number;
  title: string;
  team: string;
  advisor: string;
  mentors: string[];
  shortDescription: string;
  description: string;
  video: string;
  image?: string;
  achievements: Achievement[];
}
