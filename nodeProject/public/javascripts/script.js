$(document).ready(function(){
	console.log("ready steady");

	var client = new Faye.Client('http://localhost:3000/faye');


	$("#feedback-success").hide();
	$("#feedback-error").hide();
	var feedback = "";

	$('#btnShoot').on('click', function(e){

		var name = $('#name').val();
		var question = $('#question').val();

		if(name.length >= 2 && question.length >= 1)
		{

			client.publish('/shoot', {
				name: name,
				question: question
			});

			$('#name').val('');
			$('#question').val('');

			// USE CSS3 ANIMATIONS LATER

			$("#feedback-success").slideDown();
			$("#feedback-error").hide();
			feedback = "success";

		}
		else
		{
			$("#feedback-error").slideDown();
			$("#feedback-success").hide();
			// feedback = "error";
		}


		// TIMEOUT FEEDBACK
		if(feedback == "success")
		{
			setTimeout(function(){
				$("#feedback-success").slideUp();
			}, 5000);
		}

		e.preventDefault();

	});

	client.subscribe('/shoot', function(shoot){
		var name = shoot.name;
		var question = shoot.question;

		$('#allQuestions').prepend("<li class='vote list-group-item'><p>"+name+"</p><p>"+question+"</p></li>");

		// NEW QUESTION ADDED!
		$("#animatePulse").addClass('animated-pulse pulse');

		setTimeout(function(){
			$("#animatePulse").removeClass('animated-pulse pulse');
		}, 1000 );

	});

});