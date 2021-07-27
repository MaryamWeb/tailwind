$(document).ready(function() {
	$('#menu').click(() => {
		$('#nav-sm').hasClass('hidden')
			? $('#nav-sm').removeClass('hidden').addClass('flex')
			: $('#nav-sm').removeClass('flex').addClass('hidden');
	});
});
