const
    description = document.querySelector('.desc')
   ,next_description = document.querySelector('#next')

// Anime card page listener

next_description.addEventListener('click' , () => {
	description.classList.toggle('anime')
})