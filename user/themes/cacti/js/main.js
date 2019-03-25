$(document).ready(function () {
	$('.btn-call-back').click(function (e) {
		e.preventDefault();
	})
	
	$("#form, #form2, #form3").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../mail.php", //Change
			data: th.serialize()
		}).done(function() {
			// alert("Спасибо! Мы скоро свяжемся с Вами.");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
				$('.close-modal').trigger('click');
			}, 1000);
		});
		return false;
	});
	
	
});