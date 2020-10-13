/*Ejemplo de Servidor*/

var http = require ("http"); /*Llamada a HTTP*/

/*Función del server*/
var manejador = function(solicitud, respuesta){ 

    console.log("Recibiendo petición");
    respuesta.end("Hola mundo");

};

/*Creación del servidor*/
var servidor = http.createServer(manejador);

/*Escucha*/
servidor.listen(8080);