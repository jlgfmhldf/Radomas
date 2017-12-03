import navigation from 'formstone/dist/js/navigation'
import $ from 'jquery'


const $menu = $('.js-menu')
const $submenuBtn = $('.js-submenu-btn')
const listActiveClass = 'header-menu__submenu_show'
const listSelector = '.js-submenu-list'

$menu.navigation({
	type: 'overlay',
	gravity: 'left',
	maxWidth: '1040px',
	label: false,
})

$submenuBtn.on('click', function () {
	event.preventDefault()

	const $btn = $(this)
	const $submenuList = $btn.next(listSelector)
	const $internalLists = $submenuList.find(listSelector)

	$submenuList.toggleClass(listActiveClass)
	$internalLists.removeClass(listActiveClass)
})
