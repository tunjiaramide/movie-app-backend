const http = require('http');
const app = require('./src/app');
const PORT = 5000;

const server = http.createServer(app)

server.listen(PORT, () => {
    console.log('Servier is running on port 5000')
})