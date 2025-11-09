import { Mail, Linkedin, Github } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    title: "Email",
    value: "yahyasohail745@gmail.com",
    href: "mailto:yahyasohail745@gmail.com",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "linkedin.com/in/yahya-sohail",
    href: "https://www.linkedin.com/in/yahya-sohail",
  },
  {
    icon: Github,
    title: "GitHub",
    value: "github.com/yahyasohaill",
    href: "https://github.com/yahyasohaill",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="glass-card p-8 md:p-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Get In Touch
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {contacts.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <a
                  key={contact.title}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="glass-card p-6 text-center group relative overflow-hidden hover:scale-105 hover:shadow-[0_15px_40px_rgba(120,119,198,0.4)] transition-all duration-500 animate-scale-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Ripple effect on hover */}
                  <div className="absolute inset-0 rounded-full bg-primary/10 scale-0 group-hover:scale-150 transition-transform duration-700" />
                  
                  <div className="relative z-10">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 rounded-full bg-gradient-to-r from-primary to-primary-glow group-hover:shadow-[0_0_30px_rgba(120,119,198,0.6)] transition-all duration-300">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                      {contact.title}
                    </h3>
                    <p className="text-sm text-muted-foreground break-all">
                      {contact.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
