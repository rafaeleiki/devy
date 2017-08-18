export interface Achievement {
  icon: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  team: string;
  advisor: string;
  mentors: string[];
  description: string;
  video: string;
  image?: string;
  achievements: Achievement[];
}
