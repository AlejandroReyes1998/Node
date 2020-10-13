var http = require("http");

var manejador = function(solicitud,respuesta){
	console.log("Recibimos peitición")
	respuesta.end("Peticion aceptada")
}

var servidor = http.createServer(manejador);

servidor.listen(8080);