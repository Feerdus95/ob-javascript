import * as moduloController from './controller.js'
import chalk from 'chalk';

const suma1 = moduloController.suma(1,2);
const suma2 = moduloController.suma(4,5);
const mult = moduloController.multiplica(suma1,suma2);

console.log(chalk.green(mult));

