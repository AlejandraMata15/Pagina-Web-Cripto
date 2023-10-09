(function (argument) {
	const sliders = [...document.querySelectorAll('.hobbies_body')];
	const buttonNext = document.querySelector('#next');
	const buttonBefore = document.querySelector('#before');
	let value;

	buttonNext.addEventListener('click', ()=>{
		changePosition(1);
	});

	buttonBefore.addEventListener('click', ()=>{
		changePosition(-1);
	});

	const changePosition = (add)=>{
		const currentHobbie = document.querySelector('.hobbies_body_show').dataset.id;
		value = Number(currentHobbie);
		value+= add;

		sliders[Number(currentHobbie)-1].classList.remove('hobbies_body_show')
		if(value === sliders.length+1 || value === 0){
			value = value === 0 ? sliders.length : 1;
		}

		sliders[value-1].classList.add('hobbies_body_show');
	}
})();