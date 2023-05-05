// npm - global command, comes with node
// npm --version
// npm --v

// local dependency - use it only in this partiular project
// 'npm i <packageName>', you may write 'install' instead of 'i'

// global dependency - use it in any project 
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// 3 ways to create this file shown below: 1 manual and the other 2 automate this process
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)