//using destructuring of object
const {readFileSync, writeFileSync} = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt', 'utf-8') 
const second = readFileSync('./content/second.txt', 'utf-8')
//try removing the 'utf-8' parameter and try again

//console.log(first, second)

//creates new file and writes in it, or overwrites in existing one
writeFileSync('./content/result-sync.txt',
 `Here is the result: ${first}, ${second}`
	)

//for appending to a file 
writeFileSync('./content/result-sync.txt',
 `\nAppended Text..`,
  {flag: 'a'}
)

console.log('done with this task')
console.log('starting the next one')