const {Router} = require('express');
const router = Router();
//localhost:8080/
router.get("/",function(req,res){
	res.render("index");
});
//localhost:8080/login/
router.get("/login",function(req,res){
	res.render("login");
});
//localhost:8080/new_user/
router.get("/new_user",function(req,res){
	res.render("new_user");
});


module.exports = router;
