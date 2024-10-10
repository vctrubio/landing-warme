import emailjs from 'emailjs-com';

// const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });


// emailjs.init('YOUR_PUBLIC_KEY'); // Use your actual public key here
export const sendEmailEvent = (e, formData) => {
    e.preventDefault(); // Prevent the default form submission

    emailjs
    // .send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY')

        .send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
        .then((response) => {
            console.log('Email sent successfully!', response.status, response.text);
        })
        .catch((err) => {
            console.error('Failed to send email. Error:', err);
        });

};

