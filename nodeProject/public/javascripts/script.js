$(document).ready(function(){
	console.log("ready steady");

	var client = new Faye.Client('http://localhost:3000/faye');

	$('#btnShoot').on('click', function(e){

		var name = $('#name').val();
		var question = $('#question').val();

		client.publish('/shoot', {
			name: name,
			question: question
		});

		$('#name').val('');
		$('#question').val('');

		e.preventDefault();

	});

	client.subscribe('/shoot', function(shoot){
		var name = shoot.name;
		var question = shoot.question;

		$('#allQuestions').prepend("<li class='vote'><p>"+name+"</p><p>"+question+"</p></li>");
	});

});