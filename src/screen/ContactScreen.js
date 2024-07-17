import React from 'react';
import '../style/contact_screen.scss';
import Hero from '../components/Hero';
import bg_contact from '../images/bg_contact.jpg';

const ContactScreen = () => {
  return (
    
      <Hero img={bg_contact} disableOverlay>
        <div className="contact-container d-flex flex-column align-items-center">
          <div className='mt-5'>
            <h1 className="text-white">Contattaci</h1>
            <p className="subtitle">Hai bisogno di aiuto? Contattaci subito!</p>
          </div>
          <div className="form-container m-5">
            <form className="form"

                // action è l'URL del server che riceverà i dati del form di Formspree
                action="https://formspree.io/f/xrbzbjzr"
                method="POST"
            >
              <div className="form-group">
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" name="nome" placeholder="Inserisci nome" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Inserisci email" />
              </div>
              <div className="form-group">
                <label htmlFor="telefono">Telefono</label>
                <input type="tel" id="telefono" name="telefono" placeholder="Inserisci telefono" />
              </div>
              <div className="form-group">
                <label htmlFor="messaggio">Messaggio</label>
                <textarea id="messaggio" name="messaggio" placeholder="Inserisci messaggio"></textarea>
              </div>
              <button className="form-submit-btn" type="submit">
                Invia
              </button>
            </form>
          </div>
        </div>
      </Hero>
  );
};

export default ContactScreen;
