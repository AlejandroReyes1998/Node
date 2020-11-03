const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DB = process.env.DB;

mongoose.connect(DB); //Si no existe se crea

const user_Schema = new Schema({

	Nombre: {type: String,maxlength:[10,"Máximo 10 caracteres"],required:"Campo obligatorio"},
	Password: {type: String,minlength:[5,"Mínimo 5 caracteres"],required:"Campo obligatorio"},
	Email: {type: String,required:"Campo obligatorio"}

});

const User = mongoose.model("User",user_Schema);

module.exports.User = User;