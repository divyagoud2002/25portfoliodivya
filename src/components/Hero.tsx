import React from 'react';
import { ArrowDownCircle, Github, Linkedin, Mail } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';


const Hero: React.FC = () => {
  return (
    <section className="min-h-screen pt-32 pb-24 md:pt-40 md:pb-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/20 dark:via-purple-500/20 dark:to-pink-500/20"></div>
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/20 dark:via-purple-500/20 dark:to-pink-500/20 rotate-3 transform origin-top-right translate-y-[-40%]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 dark:from-pink-500/20 dark:via-purple-500/20 dark:to-blue-500/20 -rotate-3 transform origin-bottom-left translate-y-[40%]"></div>
      </div>
      
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 mb-10 md:mb-0 md:pr-8">
            <p className="text-primary-600 dark:text-primary-400 mb-3 font-medium animate-fade-in">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-4 animate-fade-in-up">
              DIVYA THIMMAPURAM
            </h1>
           <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 animate-fade-in-up animation-delay-100">
  <Typewriter
    words={['Full Stack Developer', 'Frontend Developer']}
    loop={true}
    cursor
    cursorStyle="|"
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1500}
  />
</h2>

            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-lg animate-fade-in-up animation-delay-200 leading-relaxed">
              I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Let's create something amazing together.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8 animate-fade-in-up animation-delay-300">
              <a 
                href="#contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="px-8 py-4 gradient-border bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                View Projects
              </a>
            </div>
            
            <div className="flex space-x-6 animate-fade-in-up animation-delay-400">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full gradient-border bg-white dark:bg-gray-900 hover:scale-110 transition-transform duration-300"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full gradient-border bg-white dark:bg-gray-900 hover:scale-110 transition-transform duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:john.doe@example.com" 
                className="p-3 rounded-full gradient-border bg-white dark:bg-gray-900 hover:scale-110 transition-transform duration-300"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="md:w-2/5 animate-fade-in">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden gradient-border p-1 shadow-2xl mx-auto">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                  alt="John Doe" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-16 animate-bounce-subtle">
          <a 
            href="#about" 
            className="p-2 rounded-full gradient-border bg-white dark:bg-gray-900 hover:scale-110 transition-transform duration-300"
            aria-label="Scroll down"
          >
            <ArrowDownCircle size={32} className="text-gray-700 dark:text-gray-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;