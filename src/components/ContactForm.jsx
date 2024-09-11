import React from 'react';
import '../css/contactForm.css'

export const ContactForm = () => {
    return (
        <flex className='contact-container'>
            <div className='d-flex ' style={{ width: '400px', height: '580px', backgroundColor: 'grey', borderRadius: '5px' }}>
            </div>
            <div className='contact-form'>
                <h2>Contacto</h2>
                <div className='p-4 d-flex flex-column' style={{ gap: '5px' }}>
                    <p>¿Interesado en saber más sobre lo que te podemos ofrecer como cliente B2B? </p>
                    <p>¿Tienes preguntas sobre nuestros productos? </p>
                    <p>Déjanos un mensaje y nos pondremos en contacto contigo</p>
                </div>
                <div className='contact-form-inputs'>
                    <input type="text" placeholder="Nombre" />
                    <input type="email" placeholder="Email" />
                    <textarea type='msg' placeholder="Mensaje" style={{height: '60px', verticalAlign: 'top' }}></textarea>
                </div>
                <button>Enviar</button>
            </div>
        </flex>
    )
}