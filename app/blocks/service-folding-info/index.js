const elems = document.querySelectorAll('.js-fold-btn')

const contentHiddenClass = 'service-folding-info__folding-text_hidden'
const btnHiddenClass = 'service-folding-info__fold-link_hide'

const toggleFoldState = event => {
	const el = event.target
	const id = el.dataset.id
	const content = document.querySelector(`[data-for='${id}']`)

	const isShowed = content.classList.contains(contentHiddenClass)

	el.innerText = isShowed ? 'Скрыть' : 'Раскрыть'

	content.classList.toggle(contentHiddenClass)
	el.classList.toggle(btnHiddenClass)
}

elems.forEach(elem => elem.addEventListener('click', toggleFoldState))
