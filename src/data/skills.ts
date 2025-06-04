export type SkillCategory = 'frontend' | 'backend' | 'design' | 'tools';

interface Skill {
  name: string;
  level: number;
  color: string;
}

export const skillsData: Record<SkillCategory, Skill[]> = {
  frontend: [
    { name: 'HTML5/CSS3', level: 95, color: '#E44D26' },
    { name: 'JavaScript', level: 90, color: '#F7DF1E' },
    { name: 'React', level: 88, color: '#61DAFB' },
    { name: 'TypeScript', level: 85, color: '#3178C6' },
    { name: 'Next.js', level: 82, color: '#000000' },
    { name: 'Tailwind CSS', level: 90, color: '#38B2AC' }
  ],
  backend: [
    { name: 'Node.js', level: 85, color: '#339933' },
    { name: 'Express.js', level: 82, color: '#000000' },
    { name: 'MongoDB', level: 78, color: '#47A248' },
    { name: 'PostgreSQL', level: 75, color: '#336791' },
    { name: 'GraphQL', level: 70, color: '#E535AB' },
    { name: 'Python', level: 65, color: '#3776AB' }
  ],
  design: [
    { name: 'Figma', level: 85, color: '#F24E1E' },
    { name: 'UI/UX Design', level: 80, color: '#4285F4' },
    { name: 'Responsive Design', level: 90, color: '#38B2AC' },
    { name: 'Adobe XD', level: 75, color: '#FF61F6' },
    { name: 'Sketch', level: 70, color: '#F7B500' }
  ],
  tools: [
    { name: 'Git', level: 90, color: '#F05032' },
    { name: 'Docker', level: 75, color: '#2496ED' },
    { name: 'AWS', level: 70, color: '#FF9900' },
    { name: 'CI/CD', level: 80, color: '#4285F4' },
    { name: 'Jest', level: 85, color: '#C21325' },
    { name: 'Webpack', level: 78, color: '#8DD6F9' }
  ]
};