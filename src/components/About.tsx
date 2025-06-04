import React from 'react';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="container mx-auto">
        <SectionHeading
          title="About Me"
          subtitle="Get to know me better"
        />
        
        <div className="flex flex-col md:flex-row gap-12 mt-12">
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Who I Am
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
             I'm a passionate Full Stack Developer and a 2024 B.Tech graduate in Electronics and Communication Engineering. I'm focused on building smart, modern, and responsive web applications that solve real-world problems. My journey in tech began with my curiosity for software development and has only grown stronger since then.

            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              
                  I specialize in creating accessible, high-performance web applications using modern Java-based backend tools (like Spring Boot, JSP/Servlet) and frontend technologies (React.js, Tailwind CSS, and Bootstrap). I have a strong interest in user experience design and enjoy crafting applications that are not only functional but also visually compelling.

            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
             
             Outside of coding, I’m committed to self-improvement, learning new technologies, and preparing for my next big opportunity in tech. I actively build projects, explore automation tools, and follow industry trends.

            </p>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center">
                <Calendar size={20} className="text-blue-600 dark:text-blue-400 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">Born: Jan 25, 2002
                </span>
              </div>
              <div className="flex items-center">
                <MapPin size={20} className="text-blue-600 dark:text-blue-400 mr-2" />
                <span className="text-gray-700 dark:text-gray-300"> Location: Hyderabad
                </span>
              </div>
              <div className="flex items-center">
                <GraduationCap size={20} className="text-blue-600 dark:text-blue-400 mr-2" />
                <span className="text-gray-700 dark:text-gray-300"> Degree: B.Tech in ECE
                </span>
              </div>
              <div className="flex items-center">
                <Briefcase size={20} className="text-blue-600 dark:text-blue-400 mr-2" />
                <span className="text-gray-700 dark:text-gray-300"> Status: Fresher | Actively seeking software job roles
</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              My Journey
            </h3>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-blue-600/30 dark:before:bg-blue-400/30">
              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 border-4 border-white dark:border-gray-800 z-10"></div>
                <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg shadow-sm">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    Java Full Stack Developer (Trainee)
                        2024 -2025
                       

                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 text-sm mb-2">2025 - Present</p>
                  <p className="text-gray-700 dark:text-gray-300">
                     • Practiced problem-solving and coding with focus on DSA fundamentals <br />
                    • Deployed websites on Netlify and GitHub Pages
                    • Built full-stack applications using JSP, Servlets, and Spring Boot <br />
                    • Created responsive UIs with React.js and Tailwind CSS
                  </p>
                </div>
              </div>
              
              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 border-4 border-white dark:border-gray-800 z-10"></div>
                <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg shadow-sm">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                     Portfolio Projects   2025 - present
                
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 text-sm mb-2">2025</p>
                  <p className="text-gray-700 dark:text-gray-300">
                     • Designed and deployed personal portfolio site with multi-section layout <br />
                  • Developed modules like job tracker, contact forms, and GitHub integrations. <br />
                    • Used Figma for UI designs and GitHub for version control
                  </p>
                </div>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;