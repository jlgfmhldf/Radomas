import Swiper from 'swiper'

const $slider = document.querySelector('.js-blue-slider')

const sliderOptions = {
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
}



const swiper = new Swiper($slider, sliderOptions)
