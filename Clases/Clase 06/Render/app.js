/*Configuración de variables de entorno, puertos, recursos*/

require('dotenv').config();

/******************************************/

/*Importación de modulos (Propios o Externos)*/

const bodyParser = require("body-parser"); //Importamos la libreria Body Parser para leer parametros
const express = require("express") //Importamos el middleware de express.js (node_modules)
const app = express(); //Indicamos que nuestra app funcionara bajo Express
const main_port = process.env.MAIN_PORT;

/******************************************/

/*Configuración de routing o views*/

//Especificamos que utilizaremos un motor de vistas en este caso PUG
app.set('views', './views'); 
app.set('view engine', 'pug'); 

//Se declara que la App podra extraer parametros
app.use(bodyParser.json()) //Formato JSON
app.use(bodyParser.urlencoded({extended: true}))//Encoded

/******************************************/

/*Funciones y métodos HTTP con el cliente*/

app.get("/", function(req,res){ //Metodo Principal 

    res.render("index");

});

app.get("/login", function(req,res){ //Login
   
    res.render("login");

});

app.post("/users", function(req,res){ //Login
    console.log("Contraseña: "+ req.body.Password);
    console.log("Nombre: "+req.body.Nombre);
    res.send("Recibido");

});

/******************************************/

/*Lanzamiento de servidor y canales*/

app.listen(main_port);

/******************************************/