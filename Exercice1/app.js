const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const firstNameInput = document.getElementById('firstName');
    const passwordInput = document.getElementById('password');
    const emailInput = document.getElementById('emailInput');
    const phoneInput = document.getElementById('phoneInput');

    const formData = {
        firstName: firstNameInput.value,
        password: passwordInput.value,
        email: emailInput.value,
        phone: phoneInput.value, 
    }

    const errors = {
        firstName: false,
        password: false,
        email: false,
        phone: false,
    }

    const firstNameError = document.getElementById('firstNameError');
    const passwordError = document.getElementById('passwordError');
    const phoneError = document.getElementById('phoneError');
    const emailError = document.getElementById('emailError');
    firstNameError.style.display = 'none';
    passwordError.style.display = 'none';
    emailError.style.display = 'none';
    phoneError.style.display = 'none';

    if (!formData.firstName || !formData.password || !formData.email || !formData.phone ) {
        const nameRegex = /^[a-zA-Z ]+$/
        const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
        const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.{8,})/
        
        if (!formData.firstName || !nameRegex.test(formData.firstName)) {
            errors.firstName = true;
            firstNameError.style.display = 'block';
        }
        if (!formData.password || !passwordRegex.test(formData.password)) {
            errors.password = true;
            passwordError.style.display = 'block';
        }
        if (!formData.email || !emailRegex.test(formData.email)) {
            errors.email = true;
            emailError.style.display = 'block';
        }
        if (!formData.phone || !phoneRegex.test(formData.phone)) {
            errors.phone = true;
            phoneError.style.display = 'block';
        }
    }
    
    if (!Object.values(errors).includes(true)) {
        console.log(formData)
        document.getElementById('contactForm').reset()

    }
})

