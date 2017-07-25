var express = require('express')
var http = require('http')
var path = require('path')

var app = express()
app.use(express.static('html'))
app.use('/css', express.static('css'))
app.use('/js', express.static('js'))
app.use('/font-awesome', express.static('font-awesome'))
app.use('/img', express.static('img'))

http.createServer(app).listen(55007, '172.31.10.167')


var k = 0
app.get('/', (req, res) => {
    k++; console.log(k)
    res.sendFile(path.join(__dirname, '/html/index2.html'));
});

console.log('nalida.info running')
