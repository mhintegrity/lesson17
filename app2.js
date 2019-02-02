let http = require('http');
let fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(function (req, res) {
  fs.readFile('HelloWorld.html', function (err, data) {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.write(data);
    res.end();
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});