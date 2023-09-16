var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequire8dea;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){n[e]=o},e.parcelRequire8dea=t),t("ic7rk");const r=document.querySelector(".burger-btn"),l=document.querySelector(".nav-mobile .exit-btn"),d=document.querySelector(".nav__buttons"),i=document.querySelector(".nav-mobile"),a=document.querySelector(".nav-desktop");// handling mobile nav
function c(){i.classList.toggle("nav-mobile--active"),d.classList.toggle("display-none")}// listeners
r.addEventListener("click",c),l.addEventListener("click",c),document.addEventListener("scroll",function(){// navs.forEach(nav => {
// 	window.scrollY > 70 ? (nav.style.backgroundColor = '#132239') : (nav.style.backgroundColor = 'transparent')
// })
window.scrollY>70?(a.style.backgroundColor="#132239",d.style.backgroundColor="#132239"):(a.style.backgroundColor="transparent",d.style.backgroundColor="transparent")});//# sourceMappingURL=index.cc94a06f.js.map

//# sourceMappingURL=index.cc94a06f.js.map
