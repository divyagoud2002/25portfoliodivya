import React, { useState } from 'react';
import { Project } from '../../data/projects';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-56">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
          style={{
            transform: isHovered ? 'scale(1.1)' : 'scale(1)'
          }}
        />
        <div className={`absolute inset-0 bg-blue-600/80 dark:bg-blue-900/80 flex items-center justify-center gap-4 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full text-blue-600 dark:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="View demo"
            >
              <ExternalLink size={20} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full text-blue-600 dark:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="View GitHub repository"
            >
              <Github size={20} />
            </a>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <span className={`text-xs px-2 py-1 rounded-full ${
            project.category === 'web' 
              ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300' 
              : project.category === 'mobile'
              ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
              : 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300'
          }`}>
            {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
          </span>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;