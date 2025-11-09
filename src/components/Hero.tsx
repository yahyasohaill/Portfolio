import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animate-gradient-shift">
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent opacity-50" 
             style={{ backgroundPosition: "20% 50%" }} />
        <div className="absolute inset-0 bg-gradient-radial from-primary-glow/20 via-transparent to-transparent opacity-50" 
             style={{ backgroundPosition: "80% 80%" }} />
        <div className="absolute inset-0 bg-gradient-radial from-accent/10 via-transparent to-transparent opacity-50" 
             style={{ backgroundPosition: "40% 20%" }} />
      </div>

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="particle absolute w-1 h-1 bg-primary/50 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 15}s`,
            animationDuration: `${Math.random() * 10 + 10}s`,
          }}
        />
      ))}

      <div className="container relative z-10 px-6 mx-auto text-center animate-fade-in-up">
        <div className="glass-card max-w-4xl mx-auto p-12 relative overflow-hidden">
          {/* Rotating gradient border effect */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-[spin_6s_linear_infinite]" />
          </div>

          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text animate-glow">
              Muhammad Yahya
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Front-End Developer | Building Beautiful Web Experiences
            </p>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
              Passionate about creating responsive, user-friendly interfaces with modern technologies
            </p>

            <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-primary via-primary-glow to-primary hover:shadow-[0_0_30px_rgba(120,119,198,0.5)] transition-all duration-300 hover:scale-105"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
              <Button
                onClick={() => scrollToSection("projects")}
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-105"
              >
                View Projects
              </Button>
              <Button
                onClick={() => scrollToSection("skills")}
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-105"
              >
                My Skills
              </Button>
            </div>

            <div className="flex justify-center gap-6 mt-8 animate-fade-in" style={{ animationDelay: "0.8s" }}>
              <a
                href="https://github.com/yahyasohaill"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/yahya-sohail"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:yahyasohail745@gmail.com"
                className="text-foreground/70 hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
