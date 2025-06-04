import React from 'react';
import { FileDown, FileText, Award, BookOpen } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <SectionHeading
          title="Resume & Qualifications"
          subtitle="My professional background"
        />
        
        <div className="mt-12 flex flex-col md:flex-row gap-10">
          <div className="md:w-1/3 flex flex-col items-center">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full">
              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                  <FileText size={48} className="text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-center text-gray-900 dark:text-white mb-4">
                Download Resume
              </h3>
              
              <p className="text-gray-700 dark:text-gray-300 text-center mb-6">
                Get a comprehensive overview of my skills, experience, and education in a downloadable format.
              </p>
              
              <div className="flex flex-col gap-3">
                <a 
                  href="#" 
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  <FileDown size={18} />
                  Download PDF
                </a>
                <a 
                  href="#" 
                  className="flex items-center justify-center gap-2 px-6 py-3 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors duration-300"
                >
                  <FileText size={18} />
                  View Online
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8">
              <div className="flex items-center mb-6">
                <BookOpen size={24} className="text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Education
                </h3>
              </div>
              
              <div className="space-y-6">
                <div className="pb-6 border-b border-gray-200 dark:border-gray-700">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    Master of Computer Science
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 mb-1">Stanford University • 2015-2017</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Focused on human-computer interaction and machine learning. 
                    Graduated with honors and completed a thesis on adaptive user interfaces.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    Bachelor of Science in Computer Science
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 mb-1">University of California, Berkeley • 2011-2015</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Core coursework in algorithms, data structures, and software engineering. 
                    Participated in multiple hackathons and coding competitions.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <Award size={24} className="text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Certifications & Awards
                </h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 dark:text-white">AWS Certified Solutions Architect</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">2021</p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 dark:text-white">Google Cloud Professional Developer</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">2020</p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 dark:text-white">Innovation Award, TechCrunch Hackathon</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">2019</p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 dark:text-white">MongoDB Certified Developer</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">2018</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;