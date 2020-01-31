$('document').ready(function() { 
	$("#login-form").validate({
		rules: {
			password: {
				required: true,
			},
			user_email: {
				required: true,
				email: true
			},
		},
		messages: {
			password:{
			  required: "please enter your password"
			 },
			user_email: "please enter your email address",
		},
		submitHandler: submitForm	
	});	   
	function submitForm() {		
		var data = $("#login-form").serialize();				
		$.ajax({				
			type : 'POST',
			url  : 'login.php',
			data : data,
			success : function(response){						
				if(response=="ok"){									
					$("#login_button").html('Signing In ...');
					setTimeout(' window.location.href = "welcome.php"; ');
				} else {									
					$("#error").fadeIn(1000, function(){						
						$("#error").html('<div class="alert alert-danger">'+response+' !</div>');
					});
				}
			}
		});
		return false;
	}   
});