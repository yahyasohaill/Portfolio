const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Vue.js",
  "Tailwind CSS",
  "Bootstrap",
  "Git & GitHub",
  "Responsive Design",
  "REST APIs",
  "Webpack",
  "TypeScript",
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="glass-card p-8 md:p-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="glass-card p-4 text-center font-semibold text-sm relative overflow-hidden group cursor-pointer animate-slide-up hover:-translate-y-3 hover:shadow-[0_15px_40px_rgba(120,119,198,0.5)] transition-all duration-300"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Gradient bottom border on hover */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary-glow to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                
                <span className="relative z-10 text-foreground group-hover:text-primary transition-colors duration-300">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
