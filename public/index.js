$(document).ready(function() {
	$('form').submit((e) => {
		let email = $('input').val();
		if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
			e.preventDefault();
			$('#error-msg').removeClass('invisible').addClass('visible');
			$('#error-sign').removeClass('invisible').addClass('visible');
			$('form').removeClass('shadow-pink').addClass('shadow-red');
		}
	});
	$('input').focus(() => {
		$('#error-msg').removeClass('visible').addClass('invisible');
		$('#error-sign').removeClass('visible').addClass('invisible');
		$('form').removeClass('shadow-red').addClass('shadow-pink');
	});
	$('button').hover(() => $('#arrow').toggleClass('scale-125'));
});
