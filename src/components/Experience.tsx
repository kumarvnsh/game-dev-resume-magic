
import { useState, useRef, useEffect } from 'react';
import { CalendarIcon, Crosshair, Target, Award } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Unity Developer",
    company: "Saathi",
    period: "Oct 2023 - Present",
    description: [
      "Specialized in developing both hyper-casual and hybrid casual games, as well as AR and VR applications.",
      "Instrumental in building a reusable code library and pioneering the integration of new technologies in projects.",
      "Collaborated with teams, managed multiple projects, and experimented with innovative multiplayer plugins."
    ]
  },
  {
    title: "Unity Developer/AR-VR Developer",
    company: "Meta Extended Reality(MXR)",
    period: "Mar 2023 - Sep 2023",
    description: [
      "Created cutting-edge AR and VR applications with a special emphasis on multiplayer aspects.",
      "Collaborated with teams to innovate and integrate advanced multiplayer functionalities.",
      "Enhanced the immersive experience of AR and VR projects through technical innovation."
    ]
  },
  {
    title: "Unity Developer",
    company: "Zaap Solutions",
    period: "Dec 2022 - Mar 2023",
    description: [
      "Focused on creating cutting-edge AR and VR applications with emphasis on multiplayer aspects.",
      "Collaborated with teams to innovate and integrate advanced multiplayer functionalities.",
      "Enhanced immersive experiences through technical innovations and creative problem-solving."
    ]
  }
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

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

    const current = sectionRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="py-20 opacity-0 bg-cod-black/90 cod-noise relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cod-darkgray/30 pointer-events-none"></div>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-2 mb-12">
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium tracking-[0.2em] text-primary font-mono">DEPLOYMENT HISTORY</span>
            </div>
            <h2 className="text-3xl font-bold tracking-wider text-gray-100">FIELD OPERATIONS</h2>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex overflow-x-auto md:flex-col md:min-w-[200px] border-b md:border-b-0 md:border-l border-cod-gray/50">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  className={`px-4 py-3 text-left whitespace-nowrap md:whitespace-normal transition-all duration-300 military-border ${
                    activeTab === index 
                      ? 'text-primary border-primary md:border-l-2 md:-ml-[1px] md:border-b-0 border-b-2 bg-cod-darkgray' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-cod-darkgray/50'
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  <span className="font-mono">{exp.company.split(' ')[0]}</span>
                </button>
              ))}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex flex-col gap-2 p-4 bg-cod-darkgray/60 backdrop-blur-sm border border-cod-gray/50 military-border military-border-bottom">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold flex flex-wrap items-start gap-x-2 tracking-wide">
                    <Award className="h-5 w-5 text-primary mr-1" />
                    <span>{experiences[activeTab].title}</span>
                    <span className="text-primary">@ {experiences[activeTab].company}</span>
                  </h3>
                </div>
                
                <div className="flex items-center text-sm text-muted-foreground mb-4 font-mono">
                  <CalendarIcon className="h-4 w-4 mr-2 text-primary" />
                  <span>{experiences[activeTab].period}</span>
                </div>
                
                <ul className="space-y-4">
                  {experiences[activeTab].description.map((item, idx) => (
                    <li key={idx} className="flex gap-2 text-muted-foreground font-mono">
                      <Crosshair className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
