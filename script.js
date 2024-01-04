// const http = require("http");

// http.createServer((req, res) => {
//     console.log(req.url);

//     if (req.url === '/'){
//         res.status = 200;
//         res.setHeader("Content-Type", "text/html");
//         res.write("<h1>Hello Node</h1>");
//         res.end();
//     }

   
// }).listen(3000, () => {
//     console.log('server running')
// });

const http = require('http');
const hostname = '127.0.0.1'
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain'); (old)
    res.setHeader('Content-Type', 'text/html');
    res.write("<h1 style='color: red'>Hello World!<h1>")
    res.write("<p> I wonder what else we can send...<p>")
    // res.end('Hello World!\n'); (old)
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});