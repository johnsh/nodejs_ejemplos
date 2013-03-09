// Se incluyen las librerias necesarias para el proyecto.

// Incluimos el framerwork express para crear la aplicacion
var express = require("express");
// Motor de plantillas
var jade = require("jade");
// Consolidate
var cons = require("consolidate");

// Exportamos express,jade y cons
// Esto es necesario para que en nuestro archivo index.js
// pueda hacer uso de cada libreria
exports.express = express;
exports.jade = jade;
exports.cons = cons;