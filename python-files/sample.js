const fs = require('fs')

const buffer = fs.readFileSync('sample.json')
const datajson = buffer.toString()
const data = JSON.parse(datajson)
console.log(data)

