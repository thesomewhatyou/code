const http = require('http');

// Create web server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from the comments web server!\n');
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});





