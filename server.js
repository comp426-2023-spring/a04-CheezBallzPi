import { rps, rpsls } from "../lib/rpsls.js";
import { express } from "express";

const [,, ...args] = process.argv;

const app = express()
let hostname = "128.0.0.1" // localhost
let port = 5000;

// Allow parsing of keys in API call
app.use(express.json())
app.use(express.urlencoded())

// Parse args
for(let i = 0; i < args.length; i++) {
    switch(args[i]) {
        case "--port":
            port = parseInt(args[i + 1]);
    }
}

app.get('/app/', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html',
    }).end("OK");
})

app.get('/app/rps', (req, res) => {
    res.send(JSON.stringify(rps()))
})

app.get('/app/rpsls', (req, res) => {
    res.send(JSON.stringify(rpsls()))
})

app.get('/app/rps/play', (req, res) => {
    res.send(JSON.stringify(rps(req.body.shot)))
})

app.get('/app/rpsls/play', (req, res) => {
    res.send(JSON.stringify(rpsls(req.body.shot)))
})

// Create the server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})