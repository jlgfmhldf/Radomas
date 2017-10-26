import Expander from '../../scripts/utils/Expander'

const elems = document.querySelectorAll('.js-faq-btn')

const params = {
	contentSelector: '.js-faq-content',
	btnShowClass: 'faq-item__question-link_open',
	contentShowClass: 'faq-item__content_open',
}

const addExpander = elem => new Expander({
	btn: elem,
	...params,
})

elems.forEach(addExpander)
