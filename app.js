// const http = require('http');

// const port = process.env.PORT || 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello CI/CD with Docker & GitHub Actions!\n');
// });

// server.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}/`);
// });

const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello CI/CD with Docker & GitHub Actions!\n");
});

// Lắng nghe trên tất cả IP (0.0.0.0)
server.listen(port, "0.0.0.0", () => {
  console.log(`Server running at http://0.0.0.0:${port}/`);
});
