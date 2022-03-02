var db = require('../db');
const shortid = require('shortid');	


module.exports.index = (req, res) => {
	res.render('users/index',{
		users: db.get('users').value()
	});
};

module.exports.renderCreate = (req, res)=>{
	res.render('users/create');
};

module.exports.create =function(req,res){
	req.body.id = shortid.generate();
	db.get('users').push(req.body).write();
	res.redirect('/users');
};

module.exports.search = (req, res)=>{
	var q = req.query.q;
	var users = db.get('users').value();
	var matchedSearch = users.filter(function(user){
		return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	});
	res.render('users/index',{
		users: matchedSearch,
		ques: q	
	});
};

module.exports.id = function(req, res){
	var id = req.params.id;
	var user = db.get('users').find({ id: id}).value();
	res.render('users/views', {
		user: user
	});
};