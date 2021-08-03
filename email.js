//Contact form email
$('#contact-form').submit(function(e) {
  var name = document.getElementById('inputName'),
	  email = document.getElementById('inputEmail');
	  
  if (!name.value|| !email.value) {
		alertify.error('Please check your entries')
		} else {
			$.ajax({
			url: "https://formspree.io/you@email.com",
			method: "POST"
			data: $(this).serialize(),
			dataType: "json"
		});
		  e.preventDefault()
		  $(this).get(0).reset()
		  alertify.success('Message sent')
		  
		}
		
	})