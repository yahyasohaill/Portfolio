const projects = [
  {
    title: "E-Commerce Platform",
    description: "A fully responsive online shopping platform with cart functionality, product filters, and secure checkout process.",
    tags: ["React", "Redux", "Stripe API"],
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather application with geolocation support, 7-day forecasts, and interactive charts.",
    tags: ["Vue.js", "API Integration", "Chart.js"],
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio website with smooth animations, dark mode toggle, and contact form integration.",
    tags: ["HTML/CSS", "JavaScript", "GSAP"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="glass-card p-8 md:p-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="glass-card p-6 relative overflow-hidden group hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(120,119,198,0.4)] transition-all duration-500 cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Animated gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary-glow/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-primary group-hover:text-primary-glow transition-colors duration-300 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-primary to-primary-glow text-primary-foreground rounded-full hover:scale-110 transition-transform duration-300 animate-scale-in"
                        style={{ animationDelay: `${(index * 0.2) + (tagIndex * 0.1)}s` }}
                      >
                        {tag}
                      </span>
                    ))}
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

export default Projects;
