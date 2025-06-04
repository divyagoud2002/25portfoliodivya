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
              I'm a passionate Full Stack Developer with 5+ years of experience building web applications 
              that solve real-world problems. My journey in technology started when I built my first website at 14, 
              and I've been hooked ever since.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I specialize in creating responsive, accessible, and performant web applications using 
              modern technologies. I'm particularly interested in user experience design and building 
              products that are not just functional but also delightful to use.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Outside of coding, I enjoy hiking, reading science fiction, and experimenting with new recipes.
              I believe in continuous learning and regularly attend tech conferences and workshops.
            </p>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center">
                <Calendar size={20} className="text-blue-600 dark:text-blue-400 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">Born: Jan 15, 1990</span>
              </div>
              <div className="flex items-center">
                <MapPin size={20} className="text-blue-600 dark:text-blue-400 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">San Francisco, CA</span>
              </div>
              <div className="flex items-center">
                <GraduationCap size={20} className="text-blue-600 dark:text-blue-400 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">B.S. Computer Science</span>
              </div>
              <div className="flex items-center">
                <Briefcase size={20} className="text-blue-600 dark:text-blue-400 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">5+ Years Experience</span>
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
                    Senior Developer at TechCorp
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 text-sm mb-2">2020 - Present</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Leading development of enterprise applications. Mentoring junior developers and implementing best practices.
                  </p>
                </div>
              </div>
              
              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 border-4 border-white dark:border-gray-800 z-10"></div>
                <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg shadow-sm">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    Full Stack Developer at StartupX
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 text-sm mb-2">2018 - 2020</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Built and maintained multiple client projects using React, Node.js, and MongoDB.
                  </p>
                </div>
              </div>
              
              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 border-4 border-white dark:border-gray-800 z-10"></div>
                <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg shadow-sm">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    Frontend Developer at DesignAgency
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 text-sm mb-2">2016 - 2018</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Created responsive websites and interactive UI components for various clients.
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