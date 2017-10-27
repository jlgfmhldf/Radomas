import Expander from '../../scripts/utils/Expander'

const elems = [ ...document.querySelectorAll('.js-fold-btn')]

const params = {
	contentSelector: '.js-fold-content',
	btnShowClass: 'service-folding-info__fold-link_show',
	contentShowClass: 'service-folding-info__folding-text_show',
}

const addExpander = elem => new Expander({
	btn: elem,
	...params,
})

elems.forEach(addExpander)
