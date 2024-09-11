import React from 'react';
import '../css/contactForm.css'

export const ContactForm = () => {
    return (
        <flex className='contact-container'>
            <div className='d-flex ' style={{ width: '400px', height: '580px', backgroundColor: 'grey', borderRadius: '5px' }}>
            </div>
            <div className='contact-form'>
                <h2>Contacto</h2>
                <div className='contact-form-q'>
                    <div>¿Interesado en saber más sobre lo que te podemos ofrecer como cliente B2B? </div>
                    <div>¿Tienes preguntas sobre nuestros productos? </div>
                    <div>Déjanos un mensaje y nos pondremos en contacto contigo</div>
                </div>
                <div className='contact-form-inputs'>
                    <input type="text" placeholder="Nombre" />
                    <input type="email" placeholder="Email" />
                    <textarea type='msFg' placeholder="Mensaje" style={{ height: '60px', verticalAlign: 'top' }}></textarea>
                </div>
                <button>Enviar</button>
            </div>
        </flex>
    )
}