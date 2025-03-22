
import { ArrowDownCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 hero-gradient opacity-20"></div>
      <div className="absolute top-0 right-0 -z-10 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background/0 to-background"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider bg-primary/10 text-primary rounded-full mb-4 animate-fade-in">
              UNITY DEVELOPER
            </span>
          </div>
          
          <h1 
            className={`text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Creating Immersive <span className="text-primary">Game</span> Experiences
          </h1>
          
          <p 
            className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Dedicated Unity Developer with expertise in AR/VR applications and multiplayer games. 
            Blending technical expertise with creative design to deliver captivating user experiences.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-900 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <a 
              href="#about" 
              className="px-6 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Discover My Work
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 border border-primary text-primary hover:bg-primary/10 font-medium rounded-md transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDownCircle className="text-primary h-10 w-10" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
