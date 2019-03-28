$(document).ready(function () {
	$('.btn-call-back').click(function (e) {
		e.preventDefault();
	});
	
	$('.card .btn.btn-lg').click( function () {
		let product = $(this).closest('.card').find('.product-title span').text();
		console.log(product);
		$('#pName').val('Заявка с продукта:' + ' ' +  product);
	});
	
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