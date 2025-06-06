import React from 'react';

const SectionHeading: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold text-gray-800 dark:text-white">{title}</h2>
    <p className="text-gray-500 dark:text-gray-300 mt-2">{subtitle}</p>
  </div>
);

interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
  image?: string; // optional image field
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-md">
    {project.image && (
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
    )}
    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
    <p className="text-gray-600 dark:text-gray-300 mb-3">{project.description}</p>
    <a
      href={project.link}
      className="text-blue-600 hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      View Project
    </a>
  </div>
);

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Arduino-based Radar System',
      description:
        'Mini project using Arduino and Ultrasonic Sensor to detect object location with radar-like animation.',
      link: 'https://projects.arduinocontent.cc/cover-images/2ea2ea0e-5a1c-4f87-acb3-bf3c5e1585b3.blob',
      image: 'https://projects.arduinocontent.cc/cover-images/2ea2ea0e-5a1c-4f87-acb3-bf3c5e1585b3.blob',
    },
    {
      id: 2,
      title: 'Wheelchair Control through Eye Blinking',
      description:
        'Major project using Arduino Uno and eye-blink detection to control wheelchair movement. Includes login functionality.',
      link: 'https://media.springernature.com/lw685/springer-static/image/art%3A10.1007%2Fs11265-022-01828-6/MediaObjects/11265_2022_1828_Fig12_HTML.jpg',
       image: 'https://media.springernature.com/lw685/springer-static/image/art%3A10.1007%2Fs11265-022-01828-6/MediaObjects/11265_2022_1828_Fig12_HTML.jpg',
    },
    
    {
      id: 3,
      title: 'Restaurant Website',
      description:
        'Responsive restaurant website built using HTML, CSS, and JavaScript to display menu and contact info.',
      link: 'https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1708006767/catalog/1508557312875302912/ocbsf3wfqmt53dwrh2wv.webp',
      image: 'https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1708006767/catalog/1508557312875302912/ocbsf3wfqmt53dwrh2wv.webp',
    },
    {
      id: 4,
      title: 'E-commerce Mini Web App',
      description:
        'Basic shopping site using HTML, CSS, JavaScript with product listings and cart UI.',
      link: 'https://freeprojectscodes.com/wp-content/uploads/2022/02/Ecommerce-Website-in-PHP-MySQL-with-Source-Code-for-free-.-freeprojectscodes.jpg',
      image: 'https://freeprojectscodes.com/wp-content/uploads/2022/02/Ecommerce-Website-in-PHP-MySQL-with-Source-Code-for-free-.-freeprojectscodes.jpg',
    },
    {
      id: 5,
      title: 'Login Page',
      description:
        'Simple and styled login page using Bootstrap and HTML/CSS for frontend authentication UI.',
      link: 'https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1708006767/catalog/1508557312875302912/ocbsf3wfqmt53dwrh2wv.webp',
      image: 'https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1708006767/catalog/1508557312875302912/ocbsf3wfqmt53dwrh2wv.webp',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="container mx-auto">
        <SectionHeading title="My Projects" subtitle="Recent work I've done" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
