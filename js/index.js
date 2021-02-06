//select elements from DOM
const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

//getting registration form elements
const registrationForm = document.getElementById('registrationForm');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const country = document.getElementById('country');
const signUpSubmitBtn = document.getElementById('signUpSubmitBtn');

//getting login form elements
const loginForm = document.getElementById('loginForm');
const loginEmail = document.getElementById('loginEmail');
const loginPhone = document.getElementById('loginPhone');


//getting the toggle elements
const registerBtn = document.getElementById('registerBtn');
const loginBtn = document.getElementById('loginBtn');
const navItems = document.getElementsByClassName('nav-item');

const menuToggle = () => {
	hamburger.addEventListener('click', function () {
		hamburger.classList.toggle('active');
		navList.classList.toggle('active');
	});

	//Toggle the class on click of the list
	for (let input of navItems) {
		input.addEventListener('click', function () {
			hamburger.classList.toggle('active');
			navList.classList.toggle('active');
		});
	}
};


window.onload = function () {
	menuToggle();

	registrationForm.addEventListener('submit', function (e) {
		e.preventDefault();
		checkInputs();
	});

	loginForm.addEventListener('submit', function (e) {
		e.preventDefault();
		checkLoginInputs();
    });

    displayDivs();
};

function checkInputs() {
	//get the input fields value
	const firstNameValue = firstName.value.trim();
	const lastNameValue = lastName.value.trim();
	const emailValue = email.value.trim();
	const phoneValue = phone.value.trim();
	const countryValue = country.value.trim();

	//checking for values
	if (firstNameValue === '') {
		//show error
		setError(firstName, 'First Name cannot be blank');
	} else {
		//show success
		setSuccess(firstName);
	}

	if (lastNameValue === '') {
		setError(lastName, 'Last Name cannot be blank');
	} else {
		setSuccess(lastName);
	}

	if (emailValue === '') {
		setError(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setError(email, 'Enter a valid email address');
	} else {
		setSuccess(email);
	}

	if (phoneValue === '') {
		setError(phone, 'Phone Number is needed');
	} else if (!isPhoneNumber(phoneValue)) {
		setError(phone, 'Enter a valid phone number');
	} else {
		setSuccess(phone);
	}

	if (countryValue === '') {
		setError(country, 'Country cannot be blank');
	} else {
		setSuccess(country);
	}
}

//setting error message and class
const setError = (input, message) => {
	const form = input.parentElement;
	const small = form.querySelector('small');
	small.innerText = message;

	form.className = 'form-control error';
};

//setting success class
const setSuccess = (input) => {
	const form = input.parentElement;
	form.className = 'form-control success';
};

const isEmail = (email) => {
	const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
	return regex.test(email);
};

const isPhoneNumber = (phone) => {
	const regex = /^(?:\d{2}-\d{3}-\d{3}-\d{3}|\d{11})$/;
	return regex.test(phone);
};


function checkLoginInputs() {
	const loginEmailValue = loginEmail.value.trim();
	const loginPhoneValue = loginPhone.value.trim();

	if (loginEmailValue === '') {
		setError(loginEmail, 'Email cannot be blank');
	} else if (!isEmail(loginEmailValue)) {
		setError(loginEmail, 'Enter valid email address');
	} else {
		setSuccess(loginEmail);
	}

	if (loginPhoneValue === '') {
		setError(loginPhone, 'Phone number is needed');
	} else if (!isPhoneNumber(loginPhoneValue)) {
		setError(loginPhone, 'Enter valid phone number');
	} else {
		setSuccess(loginPhone);
	}
}

function toggleForm(e) {
	if (e.target.id === 'loginBtn') {
		loginForm.style.display = 'block';
		registrationForm.style.display = 'none';
		registerBtn.style.backgroundColor = 'transparent';
		loginBtn.style.backgroundColor = 'white';
	} else {
		registrationForm.style.display = 'block';
		loginForm.style.display = 'none';
		loginBtn.style.backgroundColor = 'transparent';
		registerBtn.style.backgroundColor = 'white';
	}
}

registerBtn.addEventListener('click', toggleForm);
loginBtn.addEventListener('click', toggleForm);

const imageContainer = document.getElementById('image-container');

const details = [
	{ image: './img/icon-usp-secure.svg', text: 'Regulated & Secure' },
	{ image: './img/icon-usp-award.svg', text: 'Award Winning' },
	{ image: './img/icon-usp-leverage.svg', text: '1:1000 Leverage' },
	{ image: './img/icon-usp-seminars.svg', text: 'Live Seminars & Training' },
	{ image: './img/icon-usp-platform.svg', text: 'Advanced Trading Platform' },
	{
		image: './img/icon-usp-instruments.svg',
		text: '500+ Trading Instruments',
	},
];

const generateDivs = (
	image,
	text
) => `<div class="image-wrapper">
        <div class="image-set"><img class="about-images" src="${image}" alt="" srcset=""></div>
            <p class="about-text">${text}</p>
</div>`;

const displayDivs = () => {
    let divs = '';
    for (let i = 0; i < details.length; i++) {
        const item = generateDivs(details[i].image, details[i].text)
        divs +=item
    }
    imageContainer.innerHTML = divs
}




