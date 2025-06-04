export interface Testimonial {
  name: string;
  position: string;
  company: string;
  image: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    position: 'CTO',
    company: 'TechCorp',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    text: 'John is an exceptional developer who consistently delivers high-quality work. His problem-solving skills and attention to detail have been invaluable to our team. He has a unique ability to understand complex requirements and turn them into elegant, user-friendly solutions.'
  },
  {
    name: 'Michael Chen',
    position: 'Product Manager',
    company: 'StartupX',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    text: 'Working with John was a fantastic experience. He not only delivered exactly what we needed but also provided valuable insights that improved our product. His technical expertise combined with his collaborative approach makes him a standout developer.'
  },
  {
    name: 'Emily Rodriguez',
    position: 'Design Director',
    company: 'DesignAgency',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    text: 'John has an incredible eye for design implementation. He translated our design concepts into flawless code with pixel-perfect precision. His understanding of both design principles and technical constraints made our collaboration seamless and productive.'
  },
  {
    name: 'David Wilson',
    position: 'CEO',
    company: 'WebSolutions',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    text: 'We hired John for a critical project with tight deadlines, and he exceeded all our expectations. His ability to quickly understand our business needs and implement effective solutions was impressive. John is not just a developer but a true problem solver and strategic thinker.'
  }
];