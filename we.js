const spawn = require('child_process');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const morgan = require('morgan');
const node_openssl = require('node-openssl-cert');

const app = express();

app.use(morgan('combined'))
app.use(bodyParser.json());     
app.listen(3000, (req, res) => {
    console.log('port is running on port 3000')
})

var options = {
    binpath: '/usr/bin/openssl'
}

const openssl = new node_openssl(options);
var rsakeyoptions = {
    encryption: {
        password: 'test',
        cipher: 'des3'
    },
    rsa_keygen_bits: 2048,
    rsa_keygen_pubexp: 65537,
    format: 'PKCS8'
}

var csroptions = {
    hash: 'sha512',
    subject: {
        countryName: 'j',
        stateOrProvinceName: 'Louisiana',
        localityName: 'Slidell',
        postalCode: '70458',
        streetAddress: '1001 Gause Blvd.',
        organizationName: 'SMH',
        organizationalUnitName: 'IT',
        commonName: [
            'certificatetools.com',
            'www.certificatetools.com'
        ],
        emailAddress: 'lyas.spiehler@slidellmemorial.org'
    },
    extensions: {
        basicConstraints: {
            critical: true,
            CA: true,
            pathlen: 1
        },
        keyUsage: {
            //critical: false,
            usages: [
                'digitalSignature',
                'keyEncipherment'
            ]
        },
        extendedKeyUsage: {
            critical: true,
            usages: [
                'serverAuth',
                'clientAuth'
            ]	
        },
        SANs: {
            DNS: [
                'certificatetools.com',
                'www.certificatetools.com'
            ]
        }
    }
}


openssl.generateRSAPrivateKey(rsakeyoptions, function(err, key, cmd) {
    
    console.log(cmd);
    
    console.log(key);
    fs.writeFile("./ssl/key11.txt", key, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
      }); 

    openssl.generateCSR(csroptions, key, 'test', function(err, csr, cmd) {
        
        if(err) {
            console.log(err);
        } else {
            console.log(cmd.command);
            
            console.log(csr);
        }
        fs.writeFile("./ssl/certificatem.txt", csr, function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("The file was saved!");
          }); 
            
           
            
    });
})
