export type ProjectCategory = 'web' | 'mobile' | 'design';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: ProjectCategory;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with product management, shopping cart, and payment processing.',
    image: 'https://images.pexels.com/photos/6169/woman-hand-smartphone-desk.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    category: 'web',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'Redux'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A productivity app to manage tasks, set deadlines, and track progress with team collaboration features.',
    image: 'https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    category: 'web',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Auth0'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com'
  },
  {
    id: 3,
    title: 'Weather Forecast App',
    description: 'A mobile application that provides real-time weather forecasts and alerts based on user location.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    category: 'mobile',
    technologies: ['React Native', 'Redux', 'OpenWeather API', 'Geolocation'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com'
  },
  {
    id: 4,
    title: 'Finance Dashboard',
    description: 'An interactive dashboard for visualizing financial data with charts, graphs, and forecasting tools.',
    image: 'https://images.pexels.com/photos/7567460/pexels-photo-7567460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    category: 'web',
    technologies: ['React', 'D3.js', 'Express', 'MongoDB', 'Chart.js'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com'
  },
  {
    id: 5,
    title: 'Social Network UI Design',
    description: 'A comprehensive UI design for a social network platform focused on user experience and accessibility.',
    image: 'https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    category: 'design',
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping'],
    demoUrl: 'https://example.com'
  },
  {
    id: 6,
    title: 'Fitness Tracker',
    description: 'A mobile application for tracking workouts, nutrition, and fitness progress with personalized recommendations.',
    image: 'https://images.pexels.com/photos/1092878/pexels-photo-1092878.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    category: 'mobile',
    technologies: ['React Native', 'Firebase', 'Redux', 'HealthKit/Google Fit API'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com'
  }
];