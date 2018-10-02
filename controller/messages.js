var mongoose = require('mongoose');
var topicModel = require('../models/topic');

var display = function(req, res) {
    topicModel.findOne({topicname:req.params.id}, function(err, docs) {
        if (!err) {
            docs = docs.messages
            console.log(docs);
        } else {
            throw err;
        }
        res.render('chatbox', {
            "messages":docs
        });
    });
};

module.exports = {
    "display": display,
};
