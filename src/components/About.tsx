
import { useEffect, useRef } from 'react';
import { Shield } from 'lucide-react';

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
      className="py-20 opacity-0 bg-cod-black/70 cod-noise relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-cod-darkgray/30 to-transparent pointer-events-none"></div>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-6 border-l-2 border-primary/80 bg-cod-darkgray/60 backdrop-blur military-border military-border-bottom">
            <div className="mb-8">
              <div className="flex items-center mb-2">
                <Shield className="w-5 h-5 text-primary mr-2" />
                <span className="text-sm font-medium text-primary tracking-[0.2em] font-mono">
                  CLASSIFIED INTEL
                </span>
              </div>
              <h2 className="text-3xl font-bold tracking-wider text-gray-100 flex items-center">
                <span className="relative ml-2 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-full before:h-0.5 before:bg-primary">
                  OPERATIVE PROFILE
                </span>
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <div className="flex flex-col gap-4">
                <div className="font-mono bg-cod-darkgray/80 p-4 border-l-2 border-primary">
                  <span className="text-primary mb-2 block">[STATUS]</span>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Unity Developer with 2 years of experience in game development and AR/VR applications. 
                    Specialized in Unity, C#, AR, VR, and multiplayer plugins like Photon PUN. Successfully 
                    deployed a range of hyper-casual and hybrid casual games, combining strategic technical expertise 
                    with tactical design implementations.
                  </p>
                </div>
                
                <div className="font-mono bg-cod-darkgray/80 p-4 border-l-2 border-primary">
                  <span className="text-primary mb-2 block">[MISSION DIRECTIVE]</span>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Deliver immersive user experiences through advanced digital interaction protocols. 
                    Approach combines technical innovation with user-centric design tactics to create 
                    engaging, intuitive, and high-impact gaming operations.
                  </p>
                </div>
                
                <div className="font-mono bg-cod-darkgray/80 p-4 border-l-2 border-primary">
                  <span className="text-primary mb-2 block">[FIELD RECORD]</span>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Collaborated with elite tactical teams across multiple projects, 
                    developing reusable code assets and implementing cutting-edge technologies to expand 
                    operational capabilities in game development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
