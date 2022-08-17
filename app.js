const removeModals = () => {
	// Hide the modal backdrop to allow the click of the site
	document.querySelectorAll('.modal-backdrop').forEach(el => {
		if (el.classList.contains('show')) {
			el.classList.remove('show')
			el.style.display = 'none'
		}
	})

	// Hide the modal
	document.querySelectorAll('.modal').forEach(el => {
		if (el.style.display === 'block') {
			if(confirm('Deseas esconder la alerta que dice: \n' + el.innerText)) {
				el.style.display = 'none'
			}
		}
	});
};

let interval = null;

interval = setInterval(() => {
	if(document.querySelectorAll('.pace-inactive').length === 1){ // The site has finished loading
		// Stop the interval
		clearInterval(interval);
	
		
		removeModals();
	}
}, 250)