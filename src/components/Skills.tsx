
import { useRef, useEffect } from 'react';

interface Skill {
  name: string;
  icon: string;
}

const skillsData: Skill[] = [
  { name: "Game Development", icon: "🎮" },
  { name: "Programming", icon: "💻" },
  { name: "AR/VR Development", icon: "🥽" },
  { name: "Multiplayer Game Mechanics", icon: "🔄" },
  { name: "Creative Problem-Solving", icon: "💡" },
  { name: "Project Management", icon: "📊" },
  { name: "Collaborative Teamwork", icon: "👥" },
  { name: "Adaptability to New Technologies", icon: "⚙️" },
  { name: "User-Centric Design", icon: "👤" }
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    skillRefs.current.forEach((skill) => {
      if (skill) {
        observer.observe(skill);
      }
    });

    return () => {
      if (section) {
        observer.unobserve(section);
      }
      skillRefs.current.forEach((skill) => {
        if (skill) {
          observer.unobserve(skill);
        }
      });
    };
  }, []);

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 opacity-0"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-2 mb-12">
            <span className="text-sm font-medium text-primary">EXPERTISE</span>
            <h2 className="text-3xl font-bold">Skills & Competencies</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {skillsData.map((skill, index) => (
              <div
                key={index}
                ref={(el) => (skillRefs.current[index] = el)}
                className="bg-card hover:bg-card/80 rounded-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-border opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl">{skill.icon}</span>
                  <div>
                    <h3 className="font-medium mb-2">{skill.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
