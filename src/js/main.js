import 'core-js/stable'

const burgerBtn = document.querySelector('.burger-btn')
const exitBtnNav = document.querySelector('.nav-mobile .exit-btn')
const navButtons = document.querySelector('.nav__buttons')
const navMobile = document.querySelector('.nav-mobile')
const navDesktop = document.querySelector('.nav-desktop')

// handling mobile nav
function handleNav() {
	navMobile.classList.toggle('nav-mobile--active')
	navButtons.classList.toggle('display-none')
}

function scrollObserver() {
	// navs.forEach(nav => {
	// 	window.scrollY > 70 ? (nav.style.backgroundColor = '#132239') : (nav.style.backgroundColor = 'transparent')
	// })
	if (window.scrollY > 70) {
		navDesktop.style.backgroundColor = '#132239'
		navButtons.style.backgroundColor = '#132239'
	} else {
		navDesktop.style.backgroundColor = 'transparent'
		navButtons.style.backgroundColor = 'transparent'
	}
}


// listeners
burgerBtn.addEventListener('click', handleNav)
exitBtnNav.addEventListener('click', handleNav)
document.addEventListener('scroll', scrollObserver)
