$(document).ready(function(){
	console.log("ready steady");

	var client = new Faye.Client('http://localhost:3000/faye');


	$("#feedback-success").hide();
	$("#feedback-error").hide();
	var feedback = "";
	var i = 1;
	var likes = 0;

	$('#btnShoot').on('click', function(e){

		var name = $('#name').val();
		var question = $('#question').val();

		if(name.length >= 2 && question.length >= 2)
		{
			if(question.length <= 140)
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
			}

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
		var likes = 0;
		var liQ = 	"<li id='q"+i+"' class='list-group-item'>" + 
					"<h2 class='label label-success'>" +
					"<span class='glyphicon glyphicon-user'> "+name+" </span></h2>" +
					"<span id='v"+i+"' class='likes badge'>"+likes+"</span>&nbsp;" +
					"<span class='pull-right'>votes&nbsp;</span>" +
					"<blockquote><p class='question'>"+question+"</p></blockquote>" +
					"<span>&nbsp;</span>" +
					"<a class='voteDown pull-right' href='#'><span class='glyphicon glyphicon-thumbs-down'></span></a>" +
					"<a class='voteUp pull-right' href='#'><span class='glyphicon glyphicon-thumbs-up'></span></a>" +
					"</li>";

		var liM = 	"<li id='q"+i+"' class='list-group-item'>" + 
					"<h2 class='label label-success'>" +
					"<span class='glyphicon glyphicon-user'> "+name+" </span></h2>" +
					"<blockquote><p class='question'>"+question+"</p></blockquote>" +
					"<a class='rmItem' href='#'>Delete</a>" +
					"</li>";
		i++

		$(liQ).prependTo('#allQuestions').hide().slideDown('fast');
		$(liM).prependTo('#allQuestionsModerate').hide().slideDown('fast');

		// NEW QUESTION ADDED!
		$("#animatePulse").addClass('animated-pulse pulse');

		setTimeout(function(){
			$("#animatePulse").removeClass('animated-pulse pulse');
		}, 1000 );


	}); // END SUBSCRIBE SHOOT


	// REMOVE LIST ITEM	
	$("#allQuestionsModerate").on('click', 'a.rmItem', function(e){
		// console.log('deleting....');

		var deleteThis = $(this).parent().attr('id');

		client.publish('/delete', {
			deleteThis: deleteThis
		});

		e.preventDefault();

	});

	client.subscribe('/delete', function(deleting){
		var deleteThis = deleting.deleteThis;
		// console.log("deleting "+deleteThis);

		$('#'+deleteThis).slideUp(function(){
			$(this).remove();
		});

	}); // END SUBSCRIBE DELETE LI


	// VOTING UP
	$("#allQuestions").on('click', '.voteUp', function(e){
			
		var like = $(this).parent().find('.likes').attr('id');
		like = like.substr(1);

		var liked = $("#q"+like+" #v"+like).html();

		client.publish('/like', {
			like: like,
			liked: liked
		});

	});

	client.subscribe('/like', function(liking){
		var like = liking.like;
		var liked = liking.liked;

		$("#q"+like+" #v"+like).html(likes+=1);
	});


	// VOTING DOWN
	$("#allQuestions").on('click', '.voteDown', function(e){

		var like = $(this).parent().find('.likes').attr('id');
		like = like.substr(1);

		var liked = $("#q"+like+" #v"+like).html();

		client.publish('/dislike', {
			like: like,
			liked: liked
		});

	});

	client.subscribe('/dislike', function(liking){
		var like = liking.like;
		var liked = liking.liked;

		$("#q"+like+" #v"+like).html(likes-=1);
	});


});