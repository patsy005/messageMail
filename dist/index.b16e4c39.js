var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},i={},s=t.parcelRequire8dea;null==s&&((s=function(t){if(t in e)return e[t].exports;if(t in i){var s=i[t];delete i[t];var d={id:t,exports:{}};return e[t]=d,s.call(d.exports,d,d.exports),d.exports}var r=Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){i[t]=e},t.parcelRequire8dea=s),s("ic7rk");class d{_slides=document.querySelectorAll(".slide");_btnPrev=document.querySelector(".slider__arrow--prev");_btnNext=document.querySelector(".slider__arrow--next");_dots=document.querySelector(".dots");_currentSlide=0;_maxSlide=this._slides.length;_time=null;constructor(){this._btnNext.addEventListener("click",this.nextSlide.bind(this)),this._btnPrev.addEventListener("click",this.prevSlide.bind(this)),this.setSlide(this._currentSlide),this.createDots(),this.dotActivation(this._currentSlide),document.addEventListener("keydown",this.keydownHandler.bind(this))}setSlide(t){this._slides.forEach((e,i)=>e.style.transform=`translateX(${100*(i-t)}%)`),clearTimeout(this._time),this._time=setTimeout(()=>{this.nextSlide(),console.log(this._time)},6e3)}nextSlide(){this._currentSlide===this._maxSlide-1?this._currentSlide=0:this._currentSlide++,this.setSlide(this._currentSlide),this.dotActivation(this._currentSlide)}prevSlide(){0===this._currentSlide?this._currentSlide=this._maxSlide-1:this._currentSlide--,this.setSlide(this._currentSlide),this.dotActivation(this._currentSlide)}createDots(){this._slides.forEach((t,e)=>{this._dots.insertAdjacentHTML("beforeend",`<button class="dots__dot" data-slide="${e}"></button>`)})}dotActivation(t){let e=[...this._dots.querySelectorAll(".dots__dot")];e.forEach(e=>{e.classList.remove("dots__dot--active"),e.dataset.slide===`${t}`?e.classList.add("dots__dot--active"):e.classList.remove("dots__dot--active")}),this._dots.addEventListener("click",this.dotsHandler.bind(this))}dotsHandler(t){if(t.target.classList.contains("dots__dot")){let{slide:e}=t.target.dataset;this.setSlide(e),this.dotActivation(e)}}keydownHandler(t){"ArrowLeft"===t.key&&this.prevSlide(),"ArrowRight"===t.key&&this.nextSlide()}}new d;//# sourceMappingURL=index.b16e4c39.js.map

//# sourceMappingURL=index.b16e4c39.js.map