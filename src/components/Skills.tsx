import React, { useState } from 'react';
import { skillsData, SkillCategory } from '../data/skills';
import SectionHeading from './ui/SectionHeading';
import SkillBar from './ui/SkillBar';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('frontend');
  
  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="What I bring to the table"
        />
        
        <div className="mt-12">
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {(Object.keys(skillsData) as SkillCategory[]).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-blue-600 dark:bg-blue-500 text-white shadow-md'
                    : 'bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skillsData[activeCategory].map((skill) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                color={skill.color}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;