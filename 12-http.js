const http = require('http');

const server = http.createServer((req, rest)=>{

if(req.url ==='/'){
rest.end('Welcome to our home page')
}
if(req.url === '/about'){
    rest.end('Here is our short history')
}

rest.end(`
<h1>Oops!</h1>
<p>We cant seem to find the page you are looking for</p>
<a href="/">back home</a>
`)
})

server.listen(5000)
