const swiper = new Swiper('.image-slider', {
	direction: 'horizontal',
	loop: false,
	loopedlides: 0,

	freeMode: true,

	navigation: {
		nextEl: '.button-next',
		prevEl: '.button-prev',
	},

	slidesPerView: 4,

	spaceBetween: 24,

	slidesPerGroup: 4,

	speed: 800,
});