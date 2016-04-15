console.log('Servidor Back - Reto 2');

var http = require('http');
var express = require('express');
var app = express();
var port = 8081;


var General_Service = require('./service.js');
var Usuario_Service = require('./service_usuario.js');
var Registro_Service = require('./service_registro.js');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/create/:collection/:v1/:v2/:v3/:v4/:v5',General_Service.create);
app.get('/read/:collection',General_Service.read);
app.get('/read/:collection/:param',General_Service.readX);
app.get('/update/:collection/:v1/:v2/:id',General_Service.update);
app.get('/delete/:collection/:param/:value',General_Service.delete);
app.post('/', General_Service.post);

app.get('/createRegistro/:collection/:v1/:v2/:v3',Registro_Service.createRegistro);

app.get('/readUsuario/:param/:value',Usuario_Service.readUsuario);
app.get('/readUsuario/:param',Usuario_Service.readUsuarioByName);
app.get('/createUsuario/:v1/:v2/:v3/:v4/:v5',Usuario_Service.createUsuario);



http.createServer(app).listen(port);
console.log("Servidor activo por el puerto " + port);