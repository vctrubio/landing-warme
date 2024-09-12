import emailjs from 'emailjs-com';

export const sendEmail = ({ text, email, msg }) => {
    console.log("🚀 ~ sendEmail ~ text:", text);
    console.log("🚀 ~ sendEmail ~ email:", email);
    console.log("🚀 ~ sendEmail ~ msg:", msg);

    // Log environment variables
    console.log("Service ID:", process.env.REACT_APP_SERVICE_ID);
    console.log("Template ID:", process.env.REACT_APP_TEMPLATE_ID);
    console.log("User ID:", process.env.REACT_APP_USER_ID);

    // Prepare email parameters
    const templateParams = {
        name: text,
        email: email,
        message: msg,
    };

    return 
    emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
    )
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};

export const sendEmailForm = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
        const response = await fetch('https://formspree.io/f/{your_form_id}', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            console.log('Form successfully submitted');
            form.reset(); // Optionally reset the form
        } else {
            console.error('Form submission error:', response.statusText);
        }
    } catch (error) {
        console.error('Form submission error:', error);
    }
};