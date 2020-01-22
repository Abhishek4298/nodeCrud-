const http = require('http');
const userOperations = require('./userOperation');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
  let body = '';
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/json');

  if (req.url === '/add' && req.method == 'POST') {
    req.on('data', function (data) {
      body += data;
    });

    req.on('end', function () {
	  console.log(body);
	  res.end(userOperations.addUser(body));
    });    
    
  }
  else if (req.url === '/delete' && req.method == 'POST') {
    req.on('data', function (data) {
      body += data;
    });
    req.on('end', function () {
      res.end(userOperations.deleteUser(body));
    });  
  }
  else if (req.url === '/getUser' && req.method == 'POST') {
    req.on('data', function (data) {
      body += data;
    });
    req.on('end', function () {
      res.end(userOperations.getUser(body));
    });  
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


