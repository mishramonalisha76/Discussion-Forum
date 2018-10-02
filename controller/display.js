var mongoose = require('mongoose');
var topicModel = require('../models/topic');


var display = function(req, res) {
    topicModel.find({}, function(err, docs) {
        if (!err) {
            var name = [];
            for (var i = 0; i < docs.length; i++) {
                name.push((docs[i]).topicname);
            }
            console.log(name);
        } else {
            throw err;
        }
        
        res.render('display', {
            "topics":name
        });
    });
};

module.exports = {
    "display": display,
};
