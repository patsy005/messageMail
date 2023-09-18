import 'core-js/stable'

class Slider {
	_slides = document.querySelectorAll('.slide')
	_btnPrev = document.querySelector('.slider__arrow--prev')
	_btnNext = document.querySelector('.slider__arrow--next')
	_dots = document.querySelector('.dots')

	_currentSlide = 0
	_maxSlide = this._slides.length
    _time = null

	constructor() {
		this._btnNext.addEventListener('click', this.nextSlide.bind(this))
		this._btnPrev.addEventListener('click', this.prevSlide.bind(this))
		this.setSlide(this._currentSlide)
		this.createDots()
		this.dotActivation(this._currentSlide)
        document.addEventListener('keydown', this.keydownHandler.bind(this))
	}

	setSlide(slide) {
		this._slides.forEach((s, index) => (s.style.transform = `translateX(${100 * (index - slide)}%)`))
        clearTimeout(this._time)
        this._time =setTimeout(() => {
            this.nextSlide()
            console.log(this._time)
        }, 6000);
	}

	nextSlide() {
		if (this._currentSlide === this._maxSlide - 1) {
			this._currentSlide = 0
		} else {
			this._currentSlide++
		}

		this.setSlide(this._currentSlide)
		this.dotActivation(this._currentSlide)
	}

	prevSlide() {
		if ((this._currentSlide === 0)) {
			this._currentSlide = this._maxSlide - 1
		} else {
			this._currentSlide--
		}

		this.setSlide(this._currentSlide)
		this.dotActivation(this._currentSlide)
	}

	createDots() {
		this._slides.forEach((_, index) => {
			this._dots.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${index}"></button>`)
		})
	}

	dotActivation(slide) {
		const dots = [...this._dots.querySelectorAll('.dots__dot')]

		dots.forEach(dot => {
			dot.classList.remove('dots__dot--active')
			dot.dataset.slide === `${slide}`
				? dot.classList.add('dots__dot--active')
				: dot.classList.remove('dots__dot--active')
		})

        this._dots.addEventListener('click', this.dotsHandler.bind(this))
	}

    dotsHandler(e){
        if(e.target.classList.contains('dots__dot')){
            const {slide} = e.target.dataset
            this.setSlide(slide)
            this.dotActivation(slide)
        }
    }

    keydownHandler(e){
        e.key === 'ArrowLeft' && this.prevSlide()
        e.key === 'ArrowRight' && this.nextSlide()
    }


}

const slider = new Slider()
