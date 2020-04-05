var fs=require('fs');
var data=fs.readFileSync('sample.json', 'utf8');
var words=JSON.parse(data);
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')



const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.listen(4000 , () => {
    console.log('Server running on port 4000')
})

app.post('/encrypt', (req, res) => {
    const spawn = require('child_process').spawn

    var process = spawn('python' , ['./encrpyt.py' , req.body.key ])

    process.stdout.on('data', (data) => {
        res.send(data.toString())
    })
})

app.post('/edit', (req, res) => {
    const spawn = require('child_process').spawn

    var process = spawn('python' , ['./edit.py'])

    process.stdout.on('data', (data) => {
        res.send(data.toString())
    })
})

app.post('/assist', (req, res) => {
    const spawn = require('child_process').spawn
    
    var process = spawn('python' , ['./assist.py'])

    process.stdout.on('data', (data) => {
        res.send(data.toString())
    })
})

app.post('/decrypt', (req, res) => {
    const spawn = require('child_process').spawn

    var id = req.body.id
    var process = spawn('python' , ['./decrypt.py', id])

    process.stdout.on('data', (data) => {
        res.send(data.toString())
    })
})

app.post('/print', (req,res) => {
    res.send(words)
})