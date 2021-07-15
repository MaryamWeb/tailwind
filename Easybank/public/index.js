$(document).ready(function() {
	$('#menu').click(() => {
		if ($('#show').hasClass('hidden')) {
			$('#show').removeClass('hidden').addClass('flex');
			$('#wrapper-overlay').removeClass('opacity-0').addClass('opacity-50');
			$('#menu').attr('src', './images/icon-close.svg');
		} else {
			$('#show').removeClass('flex').addClass('hidden');
			$('#wrapper-overlay').removeClass('opacity-50').addClass('opacity-0');
			$('#menu').attr('src', './images/icon-hamburger.svg');
		}
	});
	$(window).resize(function() {
		if ($(window).width() > 640) {
			$('#show').removeClass('flex').addClass('hidden');
			$('#wrapper-overlay').removeClass('opacity-50').addClass('opacity-0');
			$('#menu').attr('src', './images/icon-hamburger.svg');
		}
	});
});
