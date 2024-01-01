const http = require("http");
const PORT = 3200;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': "application/json",
    });
    res.end(JSON.stringify({
        id: 1,
        name: "Understanding Node Server!",
    }));
})

server.listen(PORT, () => { console.log(`Listening to port ${PORT}...`) })