const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.listen(5000 , () => {
    console.log('Server is running on port 5000')
})

app.post('/main' , (req, res) => {
    const spawn = require('child_process').spawn

    var process = spawn('python', ['./assist.py'])

    process.stdout.on('data', (data) => {
        res.send(data)
    })
})