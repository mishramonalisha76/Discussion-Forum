var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/' ,function(req,res){
  res.redirect('home');
});
router.get('/login' ,function(req,res){
  res.render('login');
})
router.get('/chat' ,function(req,res){
  res.render('chatbox');
})


router.post('/homepage',function(req,res){
  res.redirect('/login');

});
router.get('/homepage' ,function(req,res){
  res.render('page');
})
router.post('/login',function(req,res){
  res.redirect('/chat');

});
module.exports = router;
