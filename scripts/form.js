$(function() {

	// Get the form.
	var form = $('#ajax-contact');

	// Get the messages div.
	var formMessages = $('#form-messages');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass('bg-danger');
			$(formMessages).addClass('bg-success');

			// Set the message text.
			$(formMessages).text('Su mensaje fue enviado con éxito');

			// Clear the form.
			$('#name, #email, #message').val('');			
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('bg-success');
			$(formMessages).addClass('bg-danger');

			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('¡Ups! Ocurrió un error y no se pudo enviar su mensaje, vuelva a intentarlo más tarde');
			}
		});

	});

});