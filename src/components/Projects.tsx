import React, { useState } from 'react';
import { projects, ProjectCategory } from '../data/projects';
import SectionHeading from './ui/SectionHeading';
import ProjectCard from './ui/ProjectCard';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'all'>('all');
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="container mx-auto">
        <SectionHeading
          title="My Projects"
          subtitle="Recent work I've done"
        />
        
        <div className="mt-12">
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === 'all'
                  ? 'bg-blue-600 dark:bg-blue-500 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300'
              }`}
            >
              All
            </button>
            {(['web', 'mobile', 'design'] as ProjectCategory[]).map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-blue-600 dark:bg-blue-500 text-white shadow-md'
                    : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;