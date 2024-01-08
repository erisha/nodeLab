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
const PORT = 3000;


const server = http.createServer((req, res) => {
    console.log(req.url)
    if(req.url === '/') {
        res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain'); (old)
        res.setHeader('Content-Type', 'text/html');
        res.write("<h1 style='color: red'>Hello World!<h1>");
        res.write("<p> I wonder what else we can send...<p>");
    // res.end('Hello World!\n'); (old)
        res.end();}
        else if(req.url === '/puppies'){
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.write('<h1>Puppy Index</h1>');
            res.write('<h3> Look at all the cute puppies! Choose one !</h3>');
            res.end();
        } else{
            res.statusCode = 400;
            res.write('<h1>Oops page is not found </h1>')
            res.end();
        }
});

server.listen(PORT, hostname, () => {
    console.log(`Server running at http://${hostname}:${PORT}/`);
});

