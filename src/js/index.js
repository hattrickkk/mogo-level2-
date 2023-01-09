
$(document).ready(function () {
	$('.accordion__top').click(function (event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});
});

const swiper = new Swiper('.reviews__slider', {
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	centeredSlides: true,
	initialSlide: 1,
	autoplay: true,
	speed: 500,
	autoHeight: true,
});