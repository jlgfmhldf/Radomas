import Swiper from 'swiper'

const $slider = document.querySelector('.js-main-slider')

const sliderOptions = {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		modifierClass: 'main-slider__',
		bulletClass: 'main-slider__circle',
		bulletActiveClass: 'main-slider__circle_active'
	},
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
}

const swiper = new Swiper($slider, sliderOptions)
