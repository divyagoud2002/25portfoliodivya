import React, { useState } from 'react';
import { testimonials } from '../data/testimonials';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-20 px-4 bg-white dark:bg-gray-800 overflow-hidden">
      <div className="container mx-auto">
        <SectionHeading
          title="Testimonials"
          subtitle="What people say about me"
        />
        
        <div className="mt-12 relative max-w-4xl mx-auto">
          <div className="absolute top-0 left-0 -translate-x-8 -translate-y-8">
            <Quote size={64} className="text-blue-200 dark:text-blue-900/30" />
          </div>
          
          <div className="relative z-10">
            <div className="relative h-[420px] md:h-[320px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out ${
                    activeIndex === index
                      ? 'opacity-100 translate-x-0'
                      : index < activeIndex
                      ? 'opacity-0 -translate-x-full'
                      : 'opacity-0 translate-x-full'
                  }`}
                >
                  <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-md">
                    <p className="text-gray-700 dark:text-gray-300 italic mb-6 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="flex items-center">
                      <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-blue-600 dark:text-blue-400 text-sm">
                          {testimonial.position}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-8 gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? 'bg-blue-600 dark:bg-blue-400 w-8'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className="flex justify-between mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white dark:bg-gray-700 shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white dark:bg-gray-700 shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;