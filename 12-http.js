const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page')
    } else if(req.url === '/about'){
        res.end('Here is our short history')
    }else{
        //writing the default output if user requests a page that doesn't exits
        res.end(`
        <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">Back Home</a>
        `)
    }
    //res.write('Welcome to our home page')
    //res.end()
    //These above two lines were the statements written before setting the if ladder above
    //note how above we placed the string in res.end() itself and not in res.write()    
})

//represents the port our server will listen to
server.listen(5000)