var express = require('express');
var router = express.Router();
var register = require('../controller/register');
var login = require('../controller/login');
/* GET home page. */
router.get('/', function(req, res) {
    res.redirect('homepage');
});


router.get('/login', function(req, res) {
    res.render('login');
});
router.get('/register', function(req, res) {
    res.render('register');
});
router.get('/homepage', function(req, res) {
    res.render('page');
});
router.get('/chat', function(req, res) {
    res.render('chatbox');
});
router.get('/profile', function(req, res) {
    console.log(req.session.user);
    res.render('profile',{'user':req.session.user})
});


router.post('/login', login.login);
router.post('/register', register.register);
module.exports = router;
