const express = require('express')
const app = express()

app.use('/',express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.get('/page', function (req, res) {
  res.sendFile(__dirname + '/public/page.html')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
