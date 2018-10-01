var express = require('express');
var router = express.Router();
var register = require('../controller/register');

/* GET home page. */
router.get('/' ,function(req,res){
  res.redirect('homepage');
});


router.get('/login' ,function(req,res){
  res.render('login');
});
router.get('/register' ,function(req,res){
  res.render('register');
});
router.get('/homepage' ,function(req,res){
  res.render('page');
});
router.get('/chat' ,function(req,res){
  res.render('chatbox');
});



router.post('/login',function(req,res){
  res.redirect('/chat');
});
router.post('/register' ,register.register)
module.exports = router;
