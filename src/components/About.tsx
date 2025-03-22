
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
      className="py-20 opacity-0"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-2 mb-8">
            <span className="text-sm font-medium text-primary">ABOUT ME</span>
            <h2 className="text-3xl font-bold">My Journey as a Game Developer</h2>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              Dedicated Unity Developer with 2 years of experience in game development and AR/VR applications. 
              Skilled in Unity, C#, AR, VR, and multiplayer plugins like Photon PUN. I have successfully 
              developed a range of hyper-casual and hybrid casual games, showcasing my ability to blend 
              technical expertise with creative design.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Passionate about delivering immersive user experiences and staying ahead in the evolving 
              field of digital interaction. My approach combines technical innovation with user-centric design 
              principles to create engaging, intuitive, and memorable gaming experiences.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Throughout my career, I've been fortunate to work with talented teams across multiple projects, 
              developing reusable code libraries and implementing cutting-edge technologies to push the 
              boundaries of what's possible in game development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
