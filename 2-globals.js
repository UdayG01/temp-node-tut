//GLOBALS

console.log(__dirname)
console.log(module)
console.log(require)

//__dirname - path to current directory
//__filename - file name 
//require - function to use modules (CommonJS)
//module - info about current module (file)
//process - info about env where the program is being executed

setInterval(() => {
	console.log('Hello World ')
}, 1000)
