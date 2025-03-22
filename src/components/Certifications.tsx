
import { Award } from 'lucide-react';
import { useRef, useEffect } from 'react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  credential?: string;
}

const certifications: Certification[] = [
  {
    title: "INTERACTIVE AUGMENTED AND VIRTUAL REALITY APP DEVELOPMENT",
    issuer: "IHUB DivyaSampark @ IIT Roorkee",
    date: "Apr 2022",
    credential: "TIH220016"
  }
];

const Certifications = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const certRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    certRefs.current.forEach((cert) => {
      if (cert) {
        observer.observe(cert);
      }
    });

    return () => {
      if (section) {
        observer.unobserve(section);
      }
      certRefs.current.forEach((cert) => {
        if (cert) {
          observer.unobserve(cert);
        }
      });
    };
  }, []);

  return (
    <section 
      id="certifications" 
      ref={sectionRef}
      className="py-20 opacity-0"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-2 mb-12">
            <span className="text-sm font-medium text-primary">CREDENTIALS</span>
            <h2 className="text-3xl font-bold">Certifications</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                ref={(el) => (certRefs.current[index] = el)}
                className="bg-card hover:bg-card/80 rounded-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-border flex flex-col opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Award className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold">{cert.title}</h3>
                </div>
                
                <div className="text-sm text-muted-foreground mb-2">
                  <span className="font-medium">Issuing Organization:</span> {cert.issuer}
                </div>
                
                <div className="text-sm text-muted-foreground mb-2">
                  <span className="font-medium">Date:</span> {cert.date}
                </div>
                
                {cert.credential && (
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium">Credential ID:</span> {cert.credential}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
