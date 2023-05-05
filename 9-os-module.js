//note: how we did not put './' while including os
//its a built-in library, but for importing our made modules we use './'
const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

//method returns the system uptime in seconds 
console.log(`The system uptime is: ${os.uptime()} seconds`)
//using `${}` format is called "template strings"

const currentOS = {
	name: os.type(),
	release: os.release(),
	totalMem: os.totalmem(),
	freeMem: os.freemem(),
	//returns memory in bytes
}
console.log(currentOS)