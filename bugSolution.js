const http = require('http');

const server = http.createServer((req, res) => {
  // Logic to handle requests
  // ...
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const port = process.env.PORT || 3000;

const signals = ['SIGINT', 'SIGTERM'];

let serverIsClosing = false; 

const closeServer = () => {
  if (serverIsClosing) {
    return;
  }
  serverIsClosing = true;
  server.close(() => {
    console.log('Server closed gracefully.');
    process.exit(0);
  });
};

signals.forEach(signal => {
  process.on(signal, closeServer);
});


server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});