const btns = document.querySelectorAll('.js-popup-open')
const closeBtns = document.querySelectorAll('.js-popup-close')

const activeClass = 'popup_open'
const ohClass = 'page_overflow_hidden'

const handleOpen = event => {
	const { target } = event
	const id = target.dataset.for
	const popupElem = document.querySelector(`.js-popup[data-id=${id}]`)

	popupElem.classList.add(activeClass)

	document.body.classList.add(ohClass)
}

const handleClose = event => {
	const { target } = event
	const popupElem = target.closest('.js-popup')

	popupElem.classList.remove(activeClass)

	document.body.classList.remove(ohClass)
}

btns.forEach(el => el.addEventListener('click', handleOpen))
closeBtns.forEach(el => el.addEventListener('click', handleClose))
