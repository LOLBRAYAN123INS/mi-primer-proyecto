function Projects() {
  const projects = [
    {
      id: 1,
      name: "Mi Portafolio",
      description: "Página personal de portafolio con React",
      tech: "React, CSS"
    },
    {
      id: 2,
      name: "App de Tareas",
      description: "Aplicación para gestionar tareas diarias",
      tech: "React, JavaScript"
    },
    {
      id: 3,
      name: "Tienda Online",
      description: "E-commerce con carrito de compras",
      tech: "React, Node.js"
    },
    {
      id: 4,
      name: "Juego Interactivo",
      description: "Juego de piedra, papel, tijeras",
      tech: "React, CSS"
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2>Mis Proyectos</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p className="tech">{project.tech}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;