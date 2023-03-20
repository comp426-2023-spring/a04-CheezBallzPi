import { rps, rpsls } from "./lib/rpsls.js";
import express from "express";
import parseArgs from "minimist";

const app = express()
let hostname = "128.0.0.1" // localhost

// Allow parsing of keys in API call
app.use(express.json())

// Parse args
var args = parseArgs(process.argv.slice(2), {string: 'port'});

var port = ('port' in args) ? parseInt(args.port) : 5000;

app.get('/app/', (req, res) => {
    res.set('Content-Type', 'text/html')
    res.status(200).send("200 OK")
})

app.get('/app/rps', (req, res) => {
    res.set('Content-Type', 'text/html')
    res.send(JSON.stringify(rps()))
})

app.get('/app/rpsls', (req, res) => {
    res.set('Content-Type', 'text/html')
    res.send(JSON.stringify(rpsls()))
})

app.post('/app/rps/play', (req, res) => {
    res.set('Content-Type', 'text/html')
    res.send(JSON.stringify(rps(req.body.shot)))
})

app.post('/app/rpsls/play', (req, res) => {
    res.set('Content-Type', 'text/html')
    res.send(JSON.stringify(rpsls(req.body.shot)))
})

app.get('/app/rps/play:shot', (req, res) => {
    res.set('Content-Type', 'text/html')
    res.send(JSON.stringify(rps(req.params.shot)))
})

app.get('/app/rpsls/play:shot', (req, res) => {
    res.set('Content-Type', 'text/html')
    res.send(JSON.stringify(rpsls(req.params.shot)))
})

app.use((req, res, next) => {
    res.status(404).send("404 NOT FOUND")
})

// Create the server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})