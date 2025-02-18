const http = require('http');

const server = http.createServer((req, res) => {
  // Logic to handle requests
  // ...
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

//This is a problem because the server is not closing properly and may lead to memory leaks if not handled properly
//the solution is to add an event listener for the 'close' event and listen for 'SIGTERM' and 'SIGINT' to handle closing the server gracefully
//This will prevent memory leaks and unexpected behavior