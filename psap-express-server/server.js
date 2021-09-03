const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { WSASERVICE_NOT_FOUND } = require('constants');
const app = express();
const port = 4000;
const expressWs = require('express-ws')(app)
const crypto = require('crypto');

const validStudies = [
	"cow-bug-milk"
]

const sha256 = (msg) => {
    return crypto.createHash('sha256').update(msg).digest('hex');
}

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'enter.html'))
})

app.post('/enter', (req, res) => {
    let id = sha256(req.body.studyid)
    res.redirect(`http://localhost:3000/${id}`)
    app.ws(`/${id}`, (ws, res) => {
	console.log('connection')
        ws.on('message', msg => {
		console.log(msg)
		ws.send('we hear ya')
        })
    })
})


