function Hero() {
  const handleClick = () => {
    // Scroll a la sección de proyectos
    const projectsSection = document.getElementById('projects');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h2>¡Hola! Soy BRAYAN SANTOS</h2>
        <p>Desarrollador Web & App Móvil</p>
        <p className="hero-description">
          Creando soluciones digitales innovadoras con React y JavaScript
        </p>
        <button className="cta-button" onClick={handleClick}>
          Ver mis proyectos
        </button>
      </div>
    </section>
  );
}

export default Hero;