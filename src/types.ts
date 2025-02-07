export interface Project {
  id: string;
  title: string;
  description: string;
  skills: string[];
  image: string;
  longDescription: string;
  challenge: string;
  solution: string;
  outcome: string;
  link?: string;
  github?: string;
  methodologyImage?: string;
  resultImage?: string;
  startDate?: string;
  duration?: string;
  status?: string;
  projectGoals?: string[];
  techStack?: {
    tools: string[];
    approach: string[];
  };
  performanceMetrics?: {
    value: string;
    label: string;
    description: string;
  }[];
}