$(document).ready(function() {
	let content = document.getElementsByClassName('accordion');

	for (let c of content) {
		c.addEventListener('click', function() {
			this.classList.toggle('active');
			let panel = this.nextElementSibling;
			panel.style.display === 'block' ? (panel.style.display = 'none') : (panel.style.display = 'block');
		});
	}
});
