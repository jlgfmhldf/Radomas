import navigation from 'formstone/dist/js/navigation'
import $ from 'jquery'


const $menu = $('.js-menu')
const $submenuBtn = $('.js-submenu-btn')
const listActiveClass = 'header-menu__submenu_show'
const listSelector = '.js-submenu-list'
const containerSelector = '.js-submenu-container'

$menu.navigation({
	type: 'overlay',
	gravity: 'left',
	maxWidth: '1040px',
	label: false,
})

$submenuBtn.on('click', function () {
	event.preventDefault()

	const $btn = $(this)
	const $container = $btn.closest(containerSelector)
	const $submenuList = $container.find(listSelector).first()
	const $internalLists = $submenuList.find(listSelector)


	// debugger

	$submenuList.toggleClass(listActiveClass)
	$internalLists.removeClass(listActiveClass)
})
