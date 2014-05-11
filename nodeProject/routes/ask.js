
/*
 * GET ask questions.
 */

exports.ask = function(req, res){
  res.render('ask', {title: 'ask a question'});
};