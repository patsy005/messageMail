var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},i=e.parcelRequire8dea;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in r){var i=r[e];delete r[e];var s={id:e,exports:{}};return t[e]=s,i.call(s.exports,s,s.exports),s.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},e.parcelRequire8dea=i),i("ic7rk");class s{_form=document.querySelector(".form");_inputs=document.querySelectorAll(".form input");_overlay=document.querySelector(".overlay");_successLoginMsg=document.querySelector(".success-msg-window");_closeOverlayBtn=this._successLoginMsg.querySelector(".btn");_NAME="name";_EMAIL="email";_PASSWORD="password";constructor(){this._form.addEventListener("submit",this.formValidation.bind(this)),this._overlay.addEventListener("click",this.toggleOverlay.bind(this)),this._closeOverlayBtn.addEventListener("click",this.toggleOverlay.bind(this))}toggleOverlay(){this._overlay.classList.toggle("hidden"),this._successLoginMsg.classList.toggle("hidden")}inputCheck(e){let t=document.querySelector(`#${e}`);return t}nameIsValid(e,t){let r=this.inputCheck(e),i=""!==t.name.trim()&&t.name.length>=2;return i||r.id!==e?this.removeError(r):this.addError(e,r),i}emailIsValid(e,t){let r=this.inputCheck(e),i=new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),s=i.test(t.email);return s||r.id!==e?this.removeError(r):this.addError(e,r),s}passwordIsValid(e,t){let r=this.inputCheck(e),i=new RegExp(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/),s=i.test(t.password);return s||r.id!==e?this.removeError(r):this.addError(e,r),s}errorMsg(e){return"name"===e.id?"field requires with min 2 characters":"email"===e.id?"is incorrect":"password"===e.id?"requires min.8 letters and at least 1 symbol, uppercase letter and number":void 0}addError(e,t){t.nextElementSibling.textContent=`${e[0].toUpperCase()+e.slice(1)} ${this.errorMsg(t)}`,t.classList.add("error-input")}removeError(e){e.nextElementSibling.textContent="",e.classList.remove("error-input")}formValidation(e){e.preventDefault();let t=[...new FormData(this._form)],r=Object.fromEntries(t);for(let e in r){let t=this.inputCheck(e),i=this.nameIsValid(this._NAME,r),s=this.passwordIsValid(this._PASSWORD,r),o=this.emailIsValid(this._EMAIL,r);if(o&&i&&s){let e=document.querySelectorAll(".err-msg");e.forEach(e=>e.textContent=""),this._inputs.forEach(e=>{e.value=""}),t.classList.remove("error-input"),this.toggleOverlay()}}// for (const key in this._formObj) {
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
}}new s;//# sourceMappingURL=create-account.2b37408b.js.map

//# sourceMappingURL=create-account.2b37408b.js.map
