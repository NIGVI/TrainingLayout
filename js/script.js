

// BURGER MENU

const burgerDiv = document.querySelector('.burger')

if (burgerDiv) {
	window.addEventListener('resize', function() {
		if (window.innerWidth > 800) {
			const linksMenu = document.querySelector('.navigation-body')
			burgerDiv.classList.remove('_active')
			document.body.classList.remove('_lock')
			if (linksMenu) {
				linksMenu.classList.remove('_active')
			}
		}
	})
	burgerDiv.addEventListener('click', function() {
		const linksMenu = document.querySelector('.navigation-body')
		burgerDiv.classList.toggle('_active')
		if (linksMenu) {
			linksMenu.classList.toggle('_active')
		}
		document.body.classList.toggle('_lock')
	})
}



// FAQ menu

const questionsDiv = document.querySelector('.questions')

if (questionsDiv) {
	questionsDiv.addEventListener('click', (event) => {
		const question = event.target.closest('.question-header')
		
		if (question) {
			question.closest('.question').classList.toggle('_active')
		}
	})
}



// INPUT ANIMATION

const emilInput = document.querySelector('input.form__email')
const form = emilInput.closest('form')

if (emilInput && form) {

	form.addEventListener('submit', (event) => {
		console.log('submit')

		// Какое то страшное регулярное выражение для проверки валидности
		// fetch('site.com/api/newsletter', {method: "POST", body: new FormData(form)})

		event.preventDefault()
	})

	emilInput.addEventListener('focus', () => {
		form.classList.add('_active')
	})
	emilInput.addEventListener('blur', () => {
		if (emilInput.value.trim() == '') {
			form.classList.remove('_active')
		}
	})
}



// SLIDER

const sliderBTNs = document.querySelector('.quotes-btns')
const sliderDiv = document.querySelector('.slider')

if (sliderBTNs && sliderDiv) {
	let current = '1'

	sliderBTNs.addEventListener('click', (event) => {
		const btn = event.target.closest('.quotes__btn')

		if (btn) {
			const slideid = btn.dataset.sliderid

			if (slideid == current) return null

			const slideBTNNow = sliderBTNs.querySelector('._active')
			slideBTNNow.classList.remove('_active')
			btn.classList.add('_active')

			current = slideid
			
			sliderDiv.querySelector('._active').classList.remove('_active')
			const slideNow = document.querySelector(`[data-sliderid=${current}]`)
			slideNow.classList.add('_active')
		}
	})
}