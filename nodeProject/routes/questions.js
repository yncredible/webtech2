
/*
 * GET all questions.
 */

exports.questions = function(req, res){
	res.render('questions', {title: 'all questions'})
};
