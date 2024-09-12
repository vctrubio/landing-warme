import React from 'react';
import '../css/contactForm.css'
import { sendEmail } from './sendemail';

export const ContactForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const text = formData.get('name');
        const email = formData.get('email');
        const msg = formData.get('message');

        console.log("Name:", text);
        console.log("Email:", email);
        console.log("Message:", msg);

        sendEmail({ text, email, msg });
      };

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
                <form onSubmit={handleSubmit}>
                    <div className='contact-form-inputs'>
                        <input type="text" name="name" placeholder="Nombre" required />
                        <input type="email" name="email" placeholder="Email" required />
                        <textarea name="message" placeholder="Mensaje" style={{ height: '60px', verticalAlign: 'top' }} required></textarea>
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </flex>
    )
}