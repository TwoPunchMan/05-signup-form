
// Input nodes id
const first_name = document.querySelector('#first_name');
const last_name = document.querySelector('#last_name');
const email = document.querySelector('#email');
const phone_number = document.querySelector('#phone_number');
const password = document.querySelector('#password');
const pw_confirm = document.querySelector('#pw_confirm');
const error_msg = document.querySelector('#error');

// Error message nodes
const password_html = document.createElement('p');
const pw_confirm_html = document.createElement('p');

// Account button
const account_btn = document.querySelector('.account-btn');

// Account create handling
account_btn.addEventListener('click', function() {
	
	// password handling
	let msg = '';

	if (password.value == '' || pw_confirm.value == '') {
		msg = "* Please enter a password";

	} else if (password.value != pw_confirm.value) {
		msg = "* Passwords do not match";
		
	}

	error_msg.innerHTML = msg;
});