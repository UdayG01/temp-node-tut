const path = require('path')

console.log(path.sep)
//returns the path separator for 'your' system- mine is Windows

const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

//NO: const absolute = path.resolve(__dirname, filePath)
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)