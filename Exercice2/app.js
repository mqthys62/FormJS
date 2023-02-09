const commandForm = document.getElementById('commandForm');
commandForm.addEventListener('submit', event => {
    event.preventDefault();

    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const phoneInput = document.getElementById('phone');
    const adressInput = document.getElementById('postalAdress');
    const cityInput = document.getElementById('city');
    const postalInput = document.getElementById('postalCode');
    const sizeInput = document.getElementById('pizzaSize');
    const baseInput = document.getElementById('pizzaBase');
    const meatInput = document.getElementById('meatOption');
    const totalHtml = document.querySelector('.total');
    
    const formData = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        phone: phoneInput.value,
        adress: adressInput.value,
        city: cityInput.value,
        postal: postalInput.value,
        size: sizeInput.value,
        base: baseInput.value,
        meat: meatInput.value,
    }

    const errors = {
        firstName: false,
        lastName: false,
        phone: false,
        adress: false,
        city: false,
        postal: false,
        size: false,
        base: false,
        meat: false,
    }

const firstNameError = document.getElementById('firstNameError');
const lastNameError = document.getElementById('lastNameError');
const phoneError = document.getElementById('phoneError');
const adressError = document.getElementById('postalAdressError');
const cityError = document.getElementById('cityError');
const postalError = document.getElementById('postalCodeError');
const sizeError = document.getElementById('pizzaSizeError');
const baseError = document.getElementById('pizzaBaseError');
const meatError = document.getElementById('meatOptionError');
firstNameError.style.display = 'none';
lastNameError.style.display = 'none';
phoneError.style.display = 'none';
adressError.style.display = 'none';
cityError.style.display = 'none';
postalError.style.display = 'none';
sizeError.style.display = 'none';
baseError.style.display = 'none';
meatError.style.display = 'none';

const nameRegex = /^[A-zÀ-ÿ]+$/
const postalCodeRegex = /^[0-9]{5}$/
const cityRegex = /^[A-zÀ-ÿ]+$/
const addressRegex = /^(?:\w+\W+){0,5}(?:\w+)$/
const phoneRegex = /^[0-9]{10}$/

if (!formData.firstName || !nameRegex.test(formData.firstName)) {
    errors.firstName = true;
    firstNameError.style.display = 'block';
}
if (!formData.lastName || !nameRegex.test(formData.lastName)) {
    errors.lastName = true;
    lastNameError.style.display = 'block';
}
if (!formData.phone || !phoneRegex.test(formData.phone)) {
    errors.phone = true;
    phoneError.style.display = 'block';
}
if (!formData.adress || !addressRegex.test(formData.adress)) {
    errors.adress = true;
    adressError.style.display = 'block';
}
if (!formData.city || !cityRegex.test(formData.city)) {
    errors.city = true;
    cityError.style.display = 'block';
}
if (!formData.postal || !postalCodeRegex.test(formData.postal)) {
    errors.postal = true;
    postalError.style.display = 'block'
}
if (formData.size === "default") {
    errors.sizeError = true;
    sizeError.style.display = 'block';
}
if (formData.base === "default") {
    errors.baseError = true;
    baseError.style.display = 'block';  
}
if (formData.meat === "default") {
    errors.meat = true;
    meatError.style.display = 'block';
}
if (!Object.values(errors).includes(true)) {
    console.log(formData)
    alert('Votre commande a bien été prise en compte!')
    commandForm.reset()
    totalHtml.textContent = 'Le total de votre panier est de 0€'
}

})

const sizePizza = document.getElementById('pizzaSize');
const basePizza = document.getElementById('pizzaBase');
const optionMeat = document.getElementById('meatOption');
const totalHtml = document.querySelector('.total');

const sizePrice = {
    default: 0,
    small: 4,
    medium: 6,
    large: 8,
}

const basePrice = {
    default: 0,
    cheese: 3,
    tomato: 2,
}

const meatPrice = {
    default: 0,
    ham: 2,
    groundMeat: 3,
    chicken: 2,
}

let totalPrice = 0;
let pizzaSizeTotal = 0;
let pizzaBaseTotal = 0;
let pizzaMeatTotal = 0;

sizePizza.addEventListener('change', () => {
    if(sizePizza.value !== "") {
        if(["small","medium","large","default"].includes(sizePizza.value)) {
            pizzaSizeTotal = sizePrice[sizePizza.value];
            totalHtml.textContent = `Le total de votre panier est de ${pizzaSizeTotal + pizzaBaseTotal + pizzaMeatTotal} €`
        }
    }
})  

basePizza.addEventListener('change', () => {
    if (basePizza.value !== "") {
        if(["cheese","tomato","default"].includes(basePizza.value)) {
            pizzaBaseTotal = basePrice[basePizza.value];
            totalHtml.textContent = `Le total de votre panier est de ${pizzaBaseTotal + pizzaSizeTotal + pizzaMeatTotal} €`
        }
    }
})

optionMeat.addEventListener('change', () => {
    if(optionMeat.value !== "") {
        if(["ham", "groundMeat", "chicken","default"].includes(optionMeat.value)) {
            pizzaMeatTotal = meatPrice[optionMeat.value];
            totalHtml.textContent = `Le total de votre panier est de ${pizzaBaseTotal + pizzaSizeTotal + pizzaMeatTotal} €`
        }
    }
})

