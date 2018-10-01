var mongoose = require('mongoose');
var topicModel = require('../models/topic');

var topics=function(req,res){
		var topicmodel = new topicModel({
			topicname:req.body.topic,
            messages:["Created by "+req.session.user.name]
		});
		console.log(req.session.user.name);
		topicmodel.save(function(err,doc){
			if(err) res.render('chatbox',{"msg":'Successfully created the topic:'+req.body.topic})
			res.render('chatbox',{msg:"The topic you entered already exists..!!"})
		});
};

module.exports = {"topics":topics};
