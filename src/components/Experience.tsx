
import { useState, useRef, useEffect } from 'react';
import { CalendarIcon, Crosshair } from 'lucide-react';

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
      className="py-20 opacity-0 bg-gradient-to-b from-game-900/90 to-game-950/70"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-2 mb-12">
            <span className="text-sm font-medium uppercase tracking-widest text-primary inline-flex items-center gap-2">
              <span className="bg-primary w-4 h-0.5"></span>
              COMBAT RECORD
            </span>
            <h2 className="text-3xl font-bold uppercase tracking-wider text-gray-100">Field Operations</h2>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex overflow-x-auto md:flex-col md:min-w-[200px] border-b md:border-b-0 md:border-l border-game-400/30">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  className={`px-4 py-3 text-left whitespace-nowrap md:whitespace-normal transition-all duration-300 ${
                    activeTab === index 
                      ? 'text-primary border-primary md:border-l-2 md:-ml-[1px] md:border-b-0 border-b-2 bg-game-900/50' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-game-800/30'
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {exp.company.split(' ')[0]}
                </button>
              ))}
            </div>
            
            <div className="flex-1 min-w-0 font-mono">
              <div className="flex flex-col gap-2 p-4 border border-game-400/20 bg-game-900/30 backdrop-blur-sm">
                <h3 className="text-xl font-bold flex flex-wrap items-start gap-x-2 uppercase tracking-wide">
                  <span>{experiences[activeTab].title}</span>
                  <span className="text-primary">@ {experiences[activeTab].company}</span>
                </h3>
                
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  <span>{experiences[activeTab].period}</span>
                </div>
                
                <ul className="space-y-4">
                  {experiences[activeTab].description.map((item, idx) => (
                    <li key={idx} className="flex gap-2 text-muted-foreground">
                      <Crosshair className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
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
