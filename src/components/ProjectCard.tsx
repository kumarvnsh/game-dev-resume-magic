
import { useEffect, useRef } from 'react';
import { ArrowUpRight, Crosshair } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  delay?: number;
}

const ProjectCard = ({ title, description, image, tags, link, delay = 0 }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-blur-in');
              observer.unobserve(entry.target);
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const current = cardRef.current;
    if (current) {
      observer.observe(current);
    }
    
    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [delay]);
  
  return (
    <div 
      ref={cardRef} 
      className="group relative rounded-none overflow-hidden border border-cod-gray bg-cod-darkgray/80 h-full opacity-0 filter blur-[10px] military-border military-border-bottom"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cod-black/90 to-transparent"></div>
        
        <div className="absolute top-2 right-2 font-mono text-xs text-primary border border-primary py-1 px-2 bg-cod-black/50">
          ACTIVE PROJECT
        </div>
      </div>
      
      <div className="p-6 relative z-10">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 text-xs font-mono bg-cod-black/50 text-primary border border-primary/30"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold mb-2 flex items-center">
          <Crosshair className="h-4 w-4 text-primary mr-2" />
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 font-mono">{description}</p>
        
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors font-mono"
          >
            DEPLOY PROJECT <ArrowUpRight className="ml-1 h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
