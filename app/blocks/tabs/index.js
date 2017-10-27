import jTabs from 'jtabs'

const tabsContainers = document.querySelector('.js-tabs')
const buttons = document.querySelectorAll('.js-tabs-button')
const tabs = document.querySelectorAll('.js-tabs-tab')

jTabs({
	container: tabsContainers,
	buttons,
	tabs,
	activeBtnClass: 'tabs__button_active',
	activeTabClass: 'tabs__tab_active',
})
