//first we have to install npm
//step 1 npm init
//npm i chalk 
const chalk= require('chalk');
//console.log(ch.blue("Hello World!"));
//console.log(chalk.blue.inverse('Hello') + chalk.bold.cyan(' World') + chalk.red('!'));
const validator=require('validator');
const email=validator.isEmail("utkarshverma689gmail");
console.log(email ? chalk.green.inverse(email) : chalk.red.inverse(email));