var express = require('express');
var router = express.Router();
var register = require('../controller/register');
var login = require('../controller/login');
var create = require('../controller/create');
var topics = require('../controller/display');
var messages = require('../controller/messages');
var send = require('../controller/send');
/* GET home page. */
router.get('/', function(req, res) {
    res.redirect('homepage');
});


router.get('/login', function(req, res) {
    res.render('login',{"msg":""});
});
router.get('/register', function(req, res) {
    res.render('register');
});
router.get('/homepage', function(req, res) {
    res.render('page');
});
router.get('/topic/:id', messages.display);

router.get('/profile', function(req, res) {
    console.log(req.session.user);
    res.render('profile',{'user':req.session.user});
});


router.post('/login', login.login);
router.post('/register', register.register);
router.post('/create', create.topics);
router.post('/display', topics.display);
router.post('/send', send.message);
router.post('/logout', function(req, res) {
    req.session = null;
    res.render('login',{"msg":"Logged out Successfully..!!"});
});
module.exports = router;
