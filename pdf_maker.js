const PDFDocument = require('pdfkit');
const spawn = require('child_process').spawn;
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const doc = new PDFDocument;
const morgan = require('morgan');
var p12 = require('node-openssl-p12').createClientSSL;
const app = express();
const cors = require('cors')
app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.listen(3000, (req, res) => {
    console.log('port is running on port 3000')
})


app.post('/hi', (req, res) => {

  const process = spawn('python', ['./Python-files/assist.py']);

    process.stdout.on('data', function(data) {

       const test = data.toString()
       //.replace(/[^a-zA-Z ]/g, "")
        
       res.send(`The best crop suited for the conditions is ${temp}.`)
  
const fn='file'
doc.pipe(fs.createWriteStream(`./${fn}.pdf`)); // write to PDF
doc.pipe(res);                                       // HTTP response

// add stuff to PDF here using methods described below...



doc.fontSize(8);
doc.text(`${test}`, {
  width: 410,
  align: 'left'
}
);

doc.moveDown();
doc.text(` ${test}`, {
  width: 410,
  align: 'center'
}
);

doc.moveDown();
doc.text(` ${test}`, { 
  width: 410,
  align: 'right'
}
);

doc.moveDown();
doc.text(` ${test}`, { 
  width: 410,
  align: 'justify'
});

// draw bounding rectangle
doc.rect(doc.x, 0, 410, doc.y).stroke();

// finalize the PDF and end the stream
doc.end();

res.status(200).send()
})

})

// app.post('/signin',(req,res)=>{
//     // const {name,email,pass,fn} = req.body
//     var p12options = {
//         bitSize: 2048,
//         clientFileName :req.body.name,
//         C:'EX',
//         ST: 'Example',
//         L: 'Example',
//         O: 'Example',
//         OU: 'Example',
//         CN: 'Example',
//         emailAddress: req.body.email,
//         clientPass: req.body.pass,
//         caFileName: req.body.fn,
//         serial: '01',
//         days: 365
//     };
    
//     p12(p12options).done(function(options, sha1fingerprint) {
//         console.log('SHA-1 fingerprint:', sha1fingerprint);
//     }).fail( function(err) {
//         console.log(err);
//     });
// })
app.post('/signin',(req,res)=>{
    // const {name,email,pass,fn} = req.body
    var p12options = {
        bitSize: 2048,
        clientFileName :req.body.name,
        C:'EX',
        ST: 'Example',
        L: 'Example',
        O: 'Example',
        OU: 'Example',
        CN: 'Example',
        emailAddress: req.body.email,
        clientPass: req.body.pass,
        caFileName: req.body.fn,
        serial: '01',
        days: 365
    };
    
    p12(p12options).done(function(options, sha1fingerprint) {
        console.log('SHA-1 fingerprint:', sha1fingerprint);
    }).fail( function(err) {
        console.log(err);
    });
})
