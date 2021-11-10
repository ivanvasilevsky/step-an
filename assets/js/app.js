const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

var elm = document.getElementById("burger");
if (elm) elm.onclick = function (event) {
	burger.classList.toggle('active')
	nav.classList.toggle('active')

	if (event.target !== event.currentTarget) {
		return;
	}
	event.stopPropagation()
};

document.body.addEventListener("click", (e) => {
	burger.classList.remove('active')
	nav.classList.remove('active')

	e.stopPropagation()
});

nav.addEventListener("click", (e) => {
	e.stopPropagation()
});
const check = document.getElementById('price-check');
const btn_check = document.getElementById('btn-input');

var elm = document.getElementById("price-check");
if (elm) elm.onclick = function (event) {
	btn_check.classList.toggle('active')
};
$(document).ready(function () {
	$("#phone_one").mask("+7 (999) 999-99-99");
	$("#phone_two").mask("+7 (999) 999-99-99");
});
const faqs = document.querySelectorAll('.questions__item');

faqs.forEach(faq => {
	faq.addEventListener("click", () => {
		faq.classList.toggle("active")
	})
})