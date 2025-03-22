
import { useEffect, useRef } from 'react';

const About = () => {
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
      id="about" 
      ref={sectionRef}
      className="py-20 opacity-0 bg-gradient-to-b from-game-950/70 to-game-900/90"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto border-l-4 border-primary/60 pl-6">
          <div className="flex flex-col gap-2 mb-8">
            <span className="text-sm font-medium uppercase tracking-widest text-primary inline-flex items-center gap-2">
              <span className="bg-primary w-4 h-0.5"></span>
              INTEL FILE
            </span>
            <h2 className="text-3xl font-bold uppercase tracking-wider text-gray-100">Mission Profile</h2>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed font-mono">
              [CLASSIFIED] Unity Developer with 2 years of experience in game development and AR/VR applications. 
              Specialized in Unity, C#, AR, VR, and multiplayer plugins like Photon PUN. Successfully 
              deployed a range of hyper-casual and hybrid casual games, combining strategic technical expertise 
              with tactical design implementations.
            </p>
            
            <p className="text-muted-foreground leading-relaxed font-mono">
              [OBJECTIVE] Deliver immersive user experiences through advanced digital interaction protocols. 
              Approach combines technical innovation with user-centric design tactics to create 
              engaging, intuitive, and high-impact gaming operations.
            </p>
            
            <p className="text-muted-foreground leading-relaxed font-mono">
              [HISTORY] Collaborated with elite tactical teams across multiple projects, 
              developing reusable code assets and implementing cutting-edge technologies to expand 
              operational capabilities in game development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
