const express = require('express')
const spawn = require('child_process').spawn;
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.post('/crop', (req,res) =>{

     const process = spawn('python', ['assist.py']);

    process.stdout.on('data', function(data) {

       const temp = data.toString().replace(/[^a-zA-Z ]/g, "")
        
       res.send(`${temp}`)
       res.status(200).send()
        
    })
    
    })

    app.listen(4000, (req, res) => {
        console.log('port is running on port 4000')
    })