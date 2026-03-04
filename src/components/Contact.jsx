function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>Contacto</h2>
        <p>¿Tienes un proyecto en mente? ¡Hablemos!</p>
        
        <div className="contact-info">
          <div className="contact-item">
            <h3>Email</h3>
            <p>Bryanja868@gmail.com</p>
          </div>
          
          <div className="contact-item">
            <h3>GitHub</h3>
            <p>@LOLBRAYAN123INSMe</p>
          </div>
          
          <div className="contact-item">
            <h3>LinkedIn</h3>
            <p>Brayan Santos</p>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Tu nombre" required />
          <input type="email" placeholder="Tu email" required />
          <textarea placeholder="Tu mensaje" rows="5" required></textarea>
          <button type="submit" className="submit-button">Enviar</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;