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
                  href="https://drive.google.com/file/d/1oKTOHVQyKDdk7LJ9DD7qnj3dwjev3rJC/view?usp=sharing" 
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  <FileDown size={18} />
                  Download PDF
                </a>
                <a 
                  href="https://drive.google.com/file/d/1oKTOHVQyKDdk7LJ9DD7qnj3dwjev3rJC/view?usp=sharing" 
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
                    B.Tech in Electronics and Communication Engineering-7.4 CGPA
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 mb-1">Samskruti college of Engineering and Technology • 2021-2024</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Gained foundationa; and practical Knowledge in electronics and software systems
                    <br />
                    Explored web development and fullsttack technologies through  hands-on projects <br />
                    Build and deployed responsive web apps using java,React.js, and SpringBoot
                  </p>
                </div>
                
                <div className="pb-6 border-b border-gray-200 dark:border-gray-700">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                   Diploma in Electronics and Communication Engineering-7.67 CGPA
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 mb-1">Samskruti college of Engineering and Technology • 2018-2021</p>
                  <p className="text-gray-700 dark:text-gray-300">
                     Learned core electronics and circuits design 
                    <br />
                    Introduced to programming an microtroller basics
                    <br />
                    Build real-time project in the finnal year of Diploma.
                  </p>
                </div>
                 <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                   High School -8.8 CGPA
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 mb-1">Serenity Model High School • 2017-2018</p>
                  <p className="text-gray-700 dark:text-gray-300">
                   Actively participated in school-level science exhibition and quiz competitions.
                  </p>
                </div>
               
              </div>
              
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <Award size={24} className="text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Certifications & Internships
                </h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 dark:text-white"> Java FullStack Development </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">2024</p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 dark:text-white">AWS certification</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">2023</p>
                </div>
                
                
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 dark:text-white"> Embedded Systems, Internet of Things and Vlsi Design</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">2021</p>
                </div>
                
              
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 dark:text-white">District Level Tournment Kabaddi</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">2017</p>
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