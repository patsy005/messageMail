import 'core-js/stable'

class Form {
	_form = document.querySelector('.form')
	_inputs = document.querySelectorAll('.form input')

	_overlay = document.querySelector('.overlay')
	_successLoginMsg = document.querySelector('.success-msg-window')
	_closeOverlayBtn = this._successLoginMsg.querySelector('.btn')

	_NAME = 'name'
	_EMAIL = 'email'
	_PASSWORD = 'password'

	constructor() {
		this._form.addEventListener('submit', this.formValidation.bind(this))
		this._overlay.addEventListener('click', this.toggleOverlay.bind(this))
		this._closeOverlayBtn.addEventListener('click', this.toggleOverlay.bind(this))
	}

	toggleOverlay() {
		this._overlay.classList.toggle('hidden')
		this._successLoginMsg.classList.toggle('hidden')
	}

	inputCheck(key) {
		const input = document.querySelector(`#${key}`)
		return input
	}

	nameIsValid(key, obj) {
		const input = this.inputCheck(key)

		const nameIsValid = obj.name.trim() !== '' && obj.name.length >= 2
		if (!nameIsValid && input.id === key) {
			this.addError(key, input)
		} else {
			this.removeError(input)
		}

		return nameIsValid
	}

	emailIsValid(key, obj) {
		const input = this.inputCheck(key)
		const emailRegex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
		const emailIsValid = emailRegex.test(obj.email)
		if (!emailIsValid && input.id === key) {
			this.addError(key, input)
		} else {
			this.removeError(input)
		}
		return emailIsValid
	}

	passwordIsValid(key, obj) {
		const input = this.inputCheck(key)
		const passwordRegex = new RegExp(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
		const passwordIsValid = passwordRegex.test(obj.password)

		const passwordPlaceholder = input.nextElementSibling.nextElementSibling

		if (!passwordIsValid && input.id === key) {
			this.addError(key, input)
			passwordPlaceholder.classList.add('display-none')
		} else {
			this.removeError(input)
			passwordPlaceholder.classList.remove('display-none')
		}
		return passwordIsValid
	}

	errorMsg(input) {
		if (input.id === 'name') {
			return `field requires with min 2 characters`
		}

		if (input.id === 'email') {
			return `is incorrect`
		}

		if (input.id === 'password') {
			return `requires min.8 letters and at least 1 symbol, uppercase letter and number`
		}
	}

	addError(objKey, input) {
		input.nextElementSibling.textContent = `${objKey[0].toUpperCase() + objKey.slice(1)} ${this.errorMsg(input)}`
		input.classList.add('error-input')
	}

	removeError(input) {
		input.nextElementSibling.textContent = ''
		input.classList.remove('error-input')
	}

	formValidation(e) {
		e.preventDefault()

		const formData = [...new FormData(this._form)]
		const formObj = Object.fromEntries(formData)

		for (const key in formObj) {
			const input = this.inputCheck(key)
			const nameIsValid = this.nameIsValid(this._NAME, formObj)
			const passwordIsValid = this.passwordIsValid(this._PASSWORD, formObj)
			const emailIsValid = this.emailIsValid(this._EMAIL, formObj)

			if (emailIsValid && nameIsValid && passwordIsValid) {
				const errMsgs = document.querySelectorAll('.err-msg')
				errMsgs.forEach(err => (err.textContent = ''))
				this._inputs.forEach(input => {
					input.value = ''
				})
				input.classList.remove('error-input')

				this.toggleOverlay()
			}
		}

		// for (const key in this._formObj) {
		// 	const input = document.querySelector(`#${key}`)
		// 	console.log(input)
		// 	if (!nameIsValid && input.id === 'name') {
		// 		this.addError(key, input)
		// 	}

		// 	if (!emailIsValid && input.id === 'email') {
		// 		this.addError(key, input)
		// 	}

		// 	if (!passwordIsValid && input.id === 'password') {
		// 		this.addError(key, input)
		// 	}

		// 	if (emailIsValid && nameIsValid && passwordIsValid) {
		// 		const errMsgs = document.querySelectorAll('.err-msg')
		// 		errMsgs.forEach(err => (err.textContent = ''))
		// 		this._inputs.forEach(input => {
		// 			input.value = ''
		// 		})
		// 		input.classList.remove('error-input')

		// 		this.toggleOverlay()
		// 	}
		// }
	}
}
// // form validation

// function errorMsg(input) {
// 	if (input.id === 'name') {
// 		return `field requires with min 2 characters`
// 	}

// 	if (input.id === 'email') {
// 		return `is incorrect`
// 	}

// 	if (input.id === 'password') {
// 		return `requires min.8 letters and at least 1 symbol, uppercase letter and number`
// 	}
// }

// function handlingFormErrors(objKey, input) {
// 	input.nextElementSibling.textContent = `${objKey[0].toUpperCase() + objKey.slice(1)} ${errorMsg(input)}`
// 	input.classList.add('error-input')
// }

// function formValidation() {
// 	const formData = [...new FormData(form)]
// 	const formObj = Object.fromEntries(formData)
// 	const inputs = document.querySelectorAll('.form input')

// 	const nameIsValid = formObj.name.trim() !== '' && formObj.name.length >= 2
// 	console.log(nameIsValid)

// 	const emailRegex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
// 	const emailIsValid = emailRegex.test(formObj.email)
// 	console.log(emailRegex.test(formObj.email))

// 	const passwordRegex = new RegExp(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
// 	const passwordIsValid = passwordRegex.test(formObj.password)

// 	for (const key in formObj) {
// 		const input = document.querySelector(`#${key}`)
// 		if (!nameIsValid && input.id === 'name') {
// 			handlingFormErrors(key, input)
// 		}

// 		if (!emailIsValid && input.id === 'email') {
// 			handlingFormErrors(key, input)
// 		}

// 		if (!passwordIsValid && input.id === 'password') {
// 			handlingFormErrors(key, input)
// 		}

// 		if (emailIsValid && nameIsValid && passwordIsValid) {
// 			const errMsgs = document.querySelectorAll('.err-msg')
// 			errMsgs.forEach(err => (err.textContent = ''))
// 			inputs.forEach(input => (input.value = ''))
// 			input.classList.remove('error-input')
// 			overlayToggle()
// 		}
// 	}
// }

// // handling overlay
// function overlayToggle() {
// 	overlay.classList.toggle('hidden')
// 	successLoginMsg.classList.toggle('hidden')
// }

// // listeneres
// form.addEventListener('submit', e => {
// 	e.preventDefault()

// 	formValidation()
// })
// overlay.addEventListener('click', overlayToggle)
// closeOverlayBtn.addEventListener('click', overlayToggle)

const form2 = new Form()
