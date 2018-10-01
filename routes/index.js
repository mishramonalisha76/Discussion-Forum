var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/' ,function(req,res){
  res.redirect('homepage');
});
router.get('/login' ,function(req,res){
  res.render('login');
})
router.get('/register' ,function(req,res){
  res.render('register');
})
router.get('/chat' ,function(req,res){
  res.render('chatbox');
});


router.get('/homepage' ,function(req,res){
  res.render('page');
})
router.post('/login',function(req,res){
  res.redirect('/chat');
});
module.exports = router;
