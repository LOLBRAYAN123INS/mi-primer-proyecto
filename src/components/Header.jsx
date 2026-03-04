function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>BRAYAN SANTOS</h1>
        </div>
        
        <nav className="nav">
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#about">Sobre Mí</a></li>
            <li><a href="#projects">Proyectos</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;