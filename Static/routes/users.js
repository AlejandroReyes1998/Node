//localhost:8080/users/
const {Router} = require('express');
const router = Router();
const User = require("../models/user").User;

//localhost:8080/users/register
router.post("/register",function(req,res){
	let user = new User({
		Nombre: req.body.Nombre,
		Password: req.body.Password,
		Email: req.body.Email
	});

	user.save(function(err,obj){
		if(err != null){
			console.log(String(err));
			res.redirect("/new_user");
		}else{
			console.log("Usuario registrado");
			console.log(obj);
			res.redirect("/");
		}
	});
});

module.exports = router;