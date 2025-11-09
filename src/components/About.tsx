const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="glass-card p-8 md:p-12 animate-fade-in-up hover:shadow-[0_0_40px_rgba(120,119,198,0.3)] transition-all duration-500 hover:-translate-y-2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Hello! I'm <span className="text-primary font-semibold">Muhammad Yahya</span>, a dedicated Front-End Developer with a passion for creating elegant, efficient, and user-centered web applications. I specialize in transforming designs into pixel-perfect, responsive websites that provide exceptional user experiences across all devices.
            </p>
            <p>
              With a strong foundation in modern web technologies and a commitment to staying current with industry trends, I bring creativity and technical expertise to every project I undertake.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
