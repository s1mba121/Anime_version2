const
	btn = document.querySelector('#button'),
	search = document.querySelector('.search'),
	next = document.querySelector('.next-btn'),
	panel = document.querySelector('.row-special'),
	description = document.querySelector('.description'),
	next_description = document.querySelector('#next')

// Nav listener

btn.addEventListener('click' , () => {
	search.classList.toggle('active')
})

next.addEventListener('click' , () => {
	panel.classList.toggle('active-panel')
	next.classList.toggle('active-btn')
})