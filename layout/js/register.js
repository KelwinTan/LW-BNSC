function checkAlpha (str){
	for(let i = 0; i < str.length; i++){
		const ch = str.charAt(i)
		if((ch < 65 || ch > 96) && (ch < 97 || 122) && ch !== ' ') return false
	}

	return true
}

function checkNumeric(str){
	for(let i = 0; i < str.length; i++){
		const ch = str.charAt(i)
		if(ch < '0' || ch > '9') return false
	}

	return true
}

function checkContainUppercase(str){
	for(let i = 0; i < str.length; i++){
		const ch = str.charAt(i)
		if(ch >= 'A' && ch <= 'Z') return true
	}

	return false
}

function checkContainNumber(str){
	for(let i = 0; i < str.length; i++){
		const ch = str.charAt(i)
		if(ch >= '0' && ch <= '9') return true
	}

	return false
}

function validateName(){
	const name = document.getElementById('name').value
	let name_err = document.getElementById('name_err')
	let error_msg = ''
	if(name.length === 0) error_msg = 'Name field cannot be empty.'
	else if(!checkAlpha(name)) error_msg = 'Name must be alphabetic.'

	name_err.innerHTML = error_msg
}

function validateEmail(){
	const email = document.getElementById('email').value
	let email_err = document.getElementById('email_err')
	let error_msg = ''
	if(email.length === 0) error_msg = 'Email field cannot be empty.'
	else if(email.indexOf('@') <= 0) error_msg = 'Email must contain @ and cannot starts with @'
	else if(email.indexOf('.') <= 0) error_msg = 'Email must contain . and cannot starts with .'
	else if(email.indexOf('@') !== email.lastIndexOf('@')) error_msg = 'Email cannot contain more than one @'
	else if(email.lastIndexOf('@') === email.length - 1 || email.lastIndexOf('.') === email.length - 1) error_msg = 'Email cannot ends with @ or .'

	email_err.innerHTML = error_msg

}

function validatePassword(){
	const password = document.getElementById('password').value
	let password_err = document.getElementById('password_err')
	let error_msg = ''
	if(password.length === 0) error_msg = 'Password field cannot be empty'
	else if(!checkContainUppercase(password)) error_msg = 'Password must contain uppercase letter'
	else if(!checkContainNumber(password)) error_msg = 'Password must contain a number'
	else if(password.length < 5 || password.length > 12) error_msg = 'Password length must be between 5 - 12 characters'

	password_err.innerHTML = error_msg
}

function validateTelephone(){
	const telephone = document.getElementById('telephone').value
	let telephone_err = document.getElementById('telephone_err')
	let error_msg = ''
	if(telephone.length < 10 || telephone.length > 12) error_msg = 'Telephone length must be be between 10 -12 characters'
	else if(!checkNumeric(telephone)) error_msg = 'Telephone must be numeric'

	telephone_err.innerHTML = error_msg
}

function validateGender(){
	const gender = document.getElementById('gender').value
	let gender_err = document.getElementById('gender_err')
	let error_msg = ''
	if(gender === 'Gender') error_msg = 'Gender must be chosen'

	gender_err.innerHTML = error_msg
}




function order(event){
	validateName()
	validateEmail()
	validatePassword()
	validateGender()
	validateTelephone()
}
