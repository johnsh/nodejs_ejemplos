// La idea es mantener todo separado.
// Por eso todo se encuentra en archivos separados.

// Se incluyen las librerias (./libs.js) que usara el proyecto
var libs = require("./libs");

// Configuracion el archivo de configuracion del proyecto
// Pasamos como parametro a config() la variable libs
// ya que config depende de las Librerias incluidas
var config = require("./config").config( libs );

// Manejador de rutas
var rutas = require("./rutas").rutas( config );

// Puerto por defecto donde se iniciazara nuestra app
// Obtenemos el puerto directamente desde la configuracion 
config.listen(config.get("APP_PUERTO"));

// Mensaje informativo
console.log("Aplicacion Iniciada...(127..0.0.1:"+ config.get("APP_PUERTO") +")");

