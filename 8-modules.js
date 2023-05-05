//MODULES

//CommonJS, every file is module (by default)
//Modules - Encapsulated code (only share minimum)

const {uday, denovus} = require('./4-names')
const sayHello = require('./5-utils')
const data = require('./6-alternate-flavor')
//console.log(data)

//when you import a module, you actually invoke it
require('./7-mind-grenade')
//think on why above line works 

//Note: how we declared the function name as "sayHi" but imported "sayHello"
//same goes for the "names" object in 4-names.js
sayHello(uday)
sayHello(denovus)
sayHello('Tony')