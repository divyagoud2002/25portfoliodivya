import React, { useState } from 'react';

type SkillCategory = 'frontend' | 'backend' | 'tools';

interface Skill {
  name: string;
  level: number;
  color: string;
}

const skillsData: Record<SkillCategory, Skill[]> = {
  frontend: [
    { name: 'HTML', level: 90, color: '#e34c26' },
    { name: 'CSS', level: 85, color: '#264de4' },
    { name: 'JavaScript', level: 80, color: '#f0db4f' },
    { name: 'ReactJS', level: 75, color: '#61dafb' },
    { name: 'TailwindCSS', level: 80, color: '#38bdf8' },
  ],
  backend: [
    { name: 'Java', level: 85, color: '#f89820' },
    { name: 'DBMS / SQL', level: 75, color: '#00618A' },
    { name: 'JSP', level: 70, color: '#ff5722' },
    { name: 'Servlets', level: 70, color: '#009688' },
  ],
  tools: [
    { name: 'Eclipse', level: 80, color: '#2c2255' },
    { name: 'Git', level: 85, color: '#f1502f' },
    { name: 'GitHub', level: 85, color: '#0000FF' },
    { name: 'Netlify', level: 70, color: '#00c7b7' },
    { name: 'VS Code', level: 90, color: '#007acc' },
    { name: 'MySQL Workbench', level: 75, color: '#00618A' },
  ],
};

const SkillBar: React.FC<Skill> = ({ name, level, color }) => (
  <div>
    <div className="flex justify-between mb-3">
      <span className="text-2xl font-bold text-white">{name}</span>
      <span className="text-lg text-gray-300">{level}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-6 dark:bg-gray-800">
      <div
        className="h-6 rounded-full"
        style={{ width: `${level}%`, backgroundColor: color }}
      ></div>
    </div>
  </div>
);

const SectionHeading: React.FC<{ title: string; subtitle: string }> = ({
  title,
  subtitle,
}) => (
  <div className="text-center mb-20">
    <h2 className="text-5xl font-extrabold text-white">{title}</h2>
    <p className="text-2xl text-gray-300 mt-4">{subtitle}</p>
  </div>
);

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('frontend');

  return (
    <section id="skills" className="min-h-screen py-32 px-10 bg-gray-900">
      <div className="container mx-auto">
        <SectionHeading title="Skills" subtitle="What I bring to the table" />

        <div className="mt-16">
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {(Object.keys(skillsData) as SkillCategory[]).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-2xl px-10 py-4 rounded-full transition-all duration-300 font-semibold ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-xl'
                    : 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-600'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 max-w-6xl mx-auto">
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
