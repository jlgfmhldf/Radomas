export default class Expander {
	constructor({
		btn,
		contentSelector,
		btnShowClass,
		contentShowClass,
		isToggleBtnText = false,
		hideText = 'Скрыть',
	}) {
		this.btn = btn
		this.contentSelector = contentSelector

		this.isOpen = false
		this.id = this.btn.dataset.id
		console.log(this.btn.dataset)
		this.container = document.querySelector(`${this.contentSelector}[data-for='${this.id}']`)

		this.isToggleBtnText = isToggleBtnText

		if (isToggleBtnText) {
			this.btnTexts = {
				hide: hideText,
				show: this.btn.innerText,
			}
		}

		this.classes = {
			btnShowClass,
			contentShowClass
		}

		this.btn.addEventListener('click', this.toggle)
	}

	_toggleState() {
		this.isOpen = !this.isOpen
	}

	_updateBtnText(text) {
		this.btn.innerText = text
	}

	toggle = e => {
		e.preventDefault()

		this._toggleState()

		if (this.isToggleBtnText) {
			const newBtnText = this.isOpen ? this.btnTexts.show : this.btnTexts.hide

			this._updateBtnText(newBtnText)
		}

		this.btn.classList.toggle(this.classes.btnShowClass)
		this.container.classList.toggle(this.classes.contentShowClass)
	}
}
