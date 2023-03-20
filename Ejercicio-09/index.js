//Ejercicio-09-Gestión-de-errores

const winston = require ('winston')

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

function tirarError(){
  throw new Error("Funcion tirarErr0r");
}
try{
  tirarError();
} catch(e){
  logger.log("Msj err0r!",e.toString());
}
