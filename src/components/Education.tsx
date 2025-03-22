
import { Milestone } from 'lucide-react';
import { useRef, useEffect } from 'react';

interface EducationItem {
  institution: string;
  location: string;
  degree: string;
  major?: string;
  period: string;
}

const educationData: EducationItem[] = [
  {
    institution: "Rajiv Gandhi Prodyugiki Vidhyalaya (RGPV)",
    location: "Bhopal",
    degree: "Bachelor of Technology",
    major: "Computer Science",
    period: "2019-2023"
  },
  {
    institution: "Lexicon International School",
    location: "Pune",
    degree: "Grade XII",
    period: "2017-2019"
  },
  {
    institution: "Air Force School",
    location: "Pune",
    degree: "Grade X",
    period: "2013-2017"
  }
];

const Education = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    timelineRefs.current.forEach((item) => {
      if (item) {
        observer.observe(item);
      }
    });

    return () => {
      if (section) {
        observer.unobserve(section);
      }
      timelineRefs.current.forEach((item) => {
        if (item) {
          observer.unobserve(item);
        }
      });
    };
  }, []);

  return (
    <section 
      id="education" 
      ref={sectionRef}
      className="py-20 opacity-0"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-2 mb-12">
            <span className="text-sm font-medium text-primary">ACADEMIC BACKGROUND</span>
            <h2 className="text-3xl font-bold">Education & Training</h2>
          </div>
          
          <div className="relative pl-8 border-l border-primary/30 space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={index}
                ref={(el) => (timelineRefs.current[index] = el)}
                className="relative opacity-0"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute -left-[41px] w-6 h-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                  <Milestone className="h-3 w-3 text-primary" />
                </div>
                
                <div className="mb-1">
                  <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded">
                    {edu.period}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold">
                  {edu.institution}
                </h3>
                
                <div className="text-muted-foreground mb-1">
                  {edu.location}
                </div>
                
                <div className="flex flex-col">
                  <span className="font-medium">{edu.degree}</span>
                  {edu.major && <span className="text-sm text-muted-foreground">Major: {edu.major}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
