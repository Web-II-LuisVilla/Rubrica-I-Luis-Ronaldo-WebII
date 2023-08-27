import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-developed">
          <h3>Desarrolladores:</h3>
          <br />
          <p>
            Luis Eduardo Villa Ojeda <br /> <br />
            Ronaldo Suarez Cervera
          </p>
        </div>

        <div className="footer-email">
          <h3>Email:</h3> <br />
          <p>
          lvilla8@cuc.edu.co <br /><br /> 
          rsuarez13@cuc.edu.co
          </p>
        </div>

        <div className="footer-social">
          <h3>Redes</h3>
          <a href="">
          <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="">
          <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="">
          <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;