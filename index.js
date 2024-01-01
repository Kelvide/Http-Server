const http = require("http");
const PORT = 3200;

const server = http.createServer()
server.on('request', (req, res) => {
    if (req.url === "/home") {
        // res.writeHead(200, {
        //     'Content-Type': "application/json",
        // });

        // Another method to set header
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json")
        res.end(JSON.stringify({
            id: 1,
            name: "Understanding Node Server!",
        }));
    } else if (req.url === "/message") {
        // Header set to Html
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html")
        res.write('<li>Hello</li>')
        res.write('<li>World</li>')
        res.end();
    } else {
        res.statusCode = 400;
        res.end();
    }
})

server.listen(PORT, () => { console.log(`Listening to port ${PORT}...`) })