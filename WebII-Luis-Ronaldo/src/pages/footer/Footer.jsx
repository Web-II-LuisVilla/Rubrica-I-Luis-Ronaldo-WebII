import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
    <footer className="footer">

  <div className="footer-text">
    <h3>Acerca de nosotros</h3>
    <p>Este sitio web es propiedad y está operado por 
      nombre de la empresa. Todos los derechos reservados.</p>
  </div>

  <div className="footer-social">
    <h3>Redes</h3>
    <a href="https://www.facebook.com/[nombre de la empresa]">
      <i className="fab fa-facebook-f"></i>
    </a>
    <a href="https://www.twitter.com/[nombre de la empresa]">
      <i className="fab fa-twitter"></i>
    </a>
    <a href="https://www.instagram.com/[nombre de la empresa]">
      <i className="fab fa-instagram"></i>
    </a>
  </div>

  <div className="footer-text2">
    <h3>Servicio al cliente</h3>
    <p>
      Este sitio web se proporciona únicamente con fines informativos.
      La información contenida en este sitio web no constituye asesoramiento
      legal, médico o profesional. Consulte con un profesional adecuado para
      obtener asesoramiento específico para su situación.
    </p>
  </div>
</footer>
    </>
  );
};

export default Footer;